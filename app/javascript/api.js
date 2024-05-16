const REQUEST_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default class API {
  constructor(sessionId) {
    this.sessionId = sessionId;
  }

  ask = async (question) => {
    const response = await fetch("/questions", {
      method: "POST",
      headers: REQUEST_HEADERS,
      body: JSON.stringify({
        question: question,
        session_id: this.sessionId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  getSession = async () => {
    const response = await fetch("/session", {
      method: "GET",
      headers: {
        ...REQUEST_HEADERS,
        "X-Session-Id": this.sessionId,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  };
}
