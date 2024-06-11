import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ActionCable from "actioncable";
import About from "./About";
import HireMe from "./HireMe";
import API from "../api";
import Menu from "./Menu";

// We use this to isolate each session and persist data when refreshing the browser
// but for the single user.
const generateSessionId = () => {
  const item = window.localStorage.getItem("askmybook-session");
  if (item) return item;

  const sessionId = crypto.randomUUID();
  window.localStorage.setItem("askmybook-session", sessionId);
  return sessionId;
};

// we don't need to bother react state for this info. So we can keep
// performance high.
let lastReceivedAnswerChunkTimer = null;
let answerChunks = [];

export default (props) => {
  const [question, setQuestion] = useState("");
  const [asking, setAsking] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [answer, setAnswer] = useState("");
  const [sessionId, setSessionId] = useState(generateSessionId());
  const [history, setHistory] = useState([]);

  useEffect(() => {
    initChannelConnection();
    getSession();
  }, []);

  // Open a websocket connection
  const initChannelConnection = () => {
    const connectionString = window.location.host.includes("localhost")
      ? `ws://${window.location.host}/cable`
      : `wss://${window.location.host}/cable`;

    const cable = ActionCable.createConsumer(connectionString);

    cable.subscriptions.create(
      { channel: "AnswerChannel", session_id: sessionId },
      {
        received: (data) => {
          setThinking(false);

          if (data.errored) {
            toast.error("OPS! Something went wrong. We have messed up 😭");
            return;
          }

          if (lastReceivedAnswerChunkTimer) {
            clearTimeout(lastReceivedAnswerChunkTimer);
          }

          if (data.body) {
            // we need to sort them using the field "order"
            // that the server send us to be sure the answer
            // makes sense
            answerChunks.push(data);
            answerChunks.sort((a, b) => a.order - b.order);

            setAnswer((prevAnswer) => {
              const chunks = answerChunks.map((chunk) => chunk.body).join("");
              return chunks;
            });

            lastReceivedAnswerChunkTimer = setTimeout(() => {
              // refresh last 10 questions with the one we just answered
              getSession();
            }, 200);
          }
        },
      }
    );
  };

  const getSession = async () => {
    const api = new API(sessionId);
    const session = await api.getSession();
    if (session.questions?.length > 0) {
      setHistory(session.questions);
    }
  };

  const ask = async () => {
    const api = new API(sessionId);

    // flush the buffer for the next question
    answerChunks = [];

    setAsking(true);
    setAnswer("");

    try {
      await api.ask(question);
    } catch (error) {
      toast.error("OPS! Something went wrong. Please try again.");
      console.error("Error submitting question:", error);
    } finally {
      setAsking(false);
      setThinking(true);
    }
  };

  return (
    <>
      <Toaster />

      <div className="page-header">
        <h1>Ask Sahil's Book</h1>

        <Menu></Menu>
      </div>

      <div className="page-content">
        <div className="ask-zone">
          <label>
            Ask me anything about The Minimalist Entrepreneur by Sahil Lavingia
          </label>
          <textarea
            className="question-input"
            disabled={asking || thinking}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") ask();
            }}
            value={question}
          ></textarea>
          <button
            className="ask-btn"
            disabled={asking || thinking}
            onClick={ask}
          >
            {asking ? "Asking..." : "Ask"}
          </button>

          <div className="current-answer-zone">
            {answer && answer.length > 0 && <label>Answer ✨</label>}

            {thinking ? (
              <div className="thinking">
                Let me take a quick read 🔎
                <div className="thinking-animation-container">
                  <img
                    src="/book-cover.jpg"
                    alt="Sahil's Book Cover"
                    className="book-cover "
                  />

                  <div className="page-roller">
                    {[...Array(30).keys()].map((page) => (
                      <div key={page} className="page">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            <p className="answer">{answer}</p>
          </div>
        </div>

        <div className="history-zone">
          <label>Last 10 questions from the users 🌍</label>

          {history.length === 0 && (
            <p>No questions yet. Don't be shy, ask me anything!</p>
          )}

          <div className="history">
            {history.map((question) => (
              <div className="question" key={question.id}>
                <div className="question-title">{question.question}</div>
                <div className="question-answer">{question.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-container">
        <About></About>
        <HireMe></HireMe>
      </div>
    </>
  );
};
