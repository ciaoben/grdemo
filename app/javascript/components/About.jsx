import React from "react";

export default (props) => {
  return (
    <div className="about-letter" id="about">
      <h1>About this project & me</h1>
      <p>
        Hi Gumroad! <br />I am Nicolò from Italy 🇮🇹, a software developer who
        spends his time building things on the web. <br />
        <br />I stumbled upon your job posting and decided to give it a shot. I
        love the idea of Flexile and have always admired what you have built
        with Gumroad.
        <br />
        <br />I remember seeing in the past that the technical test involved
        implementing Sahil's Ask My Book demo. Even though it is not requested
        anymore, I thought it would be a fun exercise. <br />
        <br />I finally had the chance to play around with the OpenAI API for a
        "real" use case. I tried various embedding strategies, which you can
        find in the codebase in the
        <span className="code-filename">/app/lib/embeddings.rb</span> file.
        However, a few months are light years in AI development, and I found the
        best solution for the final implementation was to simply pass the whole
        extracted text from the book into the prompt. The new context sizes are
        amazing! <br />
        <br />
        Given that the product is not a full chat experience but a single
        one-shot question, I am confident that no information is lost. <br />
        <br />I have used the Rails WebSocket implementation to build the
        streaming effect on the chat. 🤖 <br />I generate the response (or the
        embeddings query if you prefer the old way) in an ActiveJob queue to
        avoid keeping the connection open for a long time and to improve the UX.{" "}
        <br />I have themed the product with Gumroad's theme. 💅 <br />
        <br />I used the technologies that you use in your stack: Rails +
        React.js.
        <br />
        <br />I have a lot of experience with them since I have used them in my
        job every day for the last 9 years. I started working with React when it
        was 0.14 and with Rails from 4.0.
        <br />
        <br />
        For your information: It took me 7.5 hours to build this project. Then I
        wrestled another 2 hours with Docker to deploy it to my server 😇. You
        can find the code here:
        <a href="https://github.com/ciaoben/grdemo">
          https://github.com/ciaoben/grdemo
        </a>
      </p>
      <h2>My "CV"</h2>
      <p>
        I am 32 years old, I was born in Cremona (northern Italy), and I am a
        software developer.
        <br />
        I love building things for the web.
        <br />
        The highlights of my developer experience that could be interesting to
        you are:
        <div className="p-title">9 years (and counting...) at Qboxmail.com</div>
        <div>
          <a
            href="https://www.qboxmail.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Qboxmail.com
          </a>
          <span className="p-asterisk">
            * this is the commercial site with the overview of the products, if
            you want to take a look at the two web apps I can create you burner
            accounts.
          </span>
        </div>
        I have worked as a remote full-stack developer for Qboxmail.com for the
        last 9 years. Last year, I transitioned to a part-time position to find
        new opportunities.
        <br />
        In my 9 years at Qboxmail, I have built and maintained 2 big web apps in
        a small team of 2 software developers and 1 designer: <br /> <br />- The
        provisioning panel: Rails backend and React.js frontend single-page
        application.
        <br />- The webmail (with contacts & calendar): Node.js backend and
        React.js frontend single-page application.
        <div className="p-title">Side projects - FontsVibes.com</div>
        <div>
          <a
            href="https://fontsvibes.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play around with FontsVibes
          </a>
        </div>
        My latest side project is a simple tool to quickly find the perfect font
        for web products. <br /> It is a SvelteKit app with a Node.js backend.
        It started as a "soloware" project, something for myself, but since I
        use it a lot, I decided to polish it and make it a free tool for
        everyone.
        <br />
        Right now is a "beta". I am slowly improving it in my free time and
        listening to feedback.
        <div className="p-title">Side projects - Blooza</div>
        <div>
          <a
            href="https://blooza.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Blooza's landing page
          </a>
        </div>
        Blooza is a mobile app for Italian football lovers. They can trade the
        cards of their favorite teams and play against each other using the
        real-time data from Serie A matches.
        <br />I am the only developer and I have built the backend, the iOS, and
        the Android versions. The app is built entirely in Vue.js on top of
        Cordova. The backend is a Node.js app.
      </p>
      <h2>Why I am a good fit for the role</h2>
      <p>
        I am a developer, but I became one because I love building things, and
        coding proved to be the most powerful and accessible tool to do so.
        <br />
        For this reason, even though I am a technical figure, I never lose sight
        of what matters: shipping to the customer. <br />I try to avoid
        tech-only problems stopping me from doing this. <br />I like to ship
        extra pleasing details. I love when products surprise me in an
        unexpected way.
        <br />
        <br />
        I know what it means to build from a blank page and to maintain large
        projects for years, adding new features while removing technical debt.
        Both of the main products I work on at Qboxmail are multi-year, never
        re-written applications that have updated dependencies while adding new
        features every week.
        <br />
        <br />I have strong remote experience. I have worked remotely for 9
        years now, and I know the pros and cons of it. I know the importance of
        good writing, and I am always trying to improve my skills.
        <br />
        <br />
        Regarding your tech stack, I am confident I can be effective from day
        one since I know well how to work with Rails & React.
        <br />I know JavaScript and CSS deeply since I care a lot about UX/UI,
        and it is necessary to know how the browser works with these
        technologies to achive good user experiences.
        <br />
        The "weak point" is TypeScript since I know it, but I have only started
        using it in production in the last 16 months (beginning of 2023). It is
        a technology I like, and every day I am getting better at it.
        <br />
        <br />
        Bonus point: I saw from one of Gumroad quarterly streaming that the most
        requested feature from your user is a nice font-tester for their
        products pages. I built a whole project around it: FontsVibes. Is the
        universe telling us something? ¯\_(ツ)_/¯
      </p>
    </div>
  );
};
