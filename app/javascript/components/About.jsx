import React, { useState, useEffect } from "react";

export default (props) => {
  return (
    <div className="about-letter" id="about">
      <h1>About this project & me</h1>

      <p>
        Hi Gumroad! <br />I am Nicolò from Italy 🇮🇹, I am a software developer
        who spend its time building things on the web.
        <br />
        <br />
        I stumbled upon your job posting and decided to give it a shot. I love
        the idea of Flexile and I always admired what you have built with
        Gumroad.
        <br />
        <br />I remember of having see in the past that the technical test was
        make to implement the Sahil's Ask My Book demo, and even if it is not
        requested anymore I thought it would be a fun excercise.
        <br />
        <br />I finally had the chance to play around with OpenAI api for a
        "real" use case. I tried various embeddings strategies, you can find
        them in the codebase in the
        <span className="code-filename">/app/lib/embeddings.rb</span> file. But
        few months are light years in AI development and I found the best
        solution for the final implementation to simply pass the whole extracted
        text from the book in the prompt. The new context sizes are amazing!
        <br />
        <br />
        Given that the product is not a full chat experience but a single one
        shot question I am confident that no information is lost.
        <br />
        <br />
        I have used the Rails web socket implementation to build the streaming
        effect on the chat. 🤖
        <br />
        I generate the response (or the embeddings query if prefer the old way)
        in an activejob queue to avoid keeping the connection open for a long
        time and improve the UX.
        <br />
        I have themed the product with the Gumroad's theme 💅.
        <br />
        <br />
        I used the technologies that you use in your stack: Rails + Reactjs.
        <br />
        <br />
        I have a lot of experience with them since I have used them in my job
        every day for the last 9 years. I started working with React when it was
        0.14 and with Rails from 4.0.
        <br />
        <br />
        For info: It took me 6.5 hours to build this project.
      </p>

      <h2>More info about me</h2>

      <p>
        I am 32 years old, I was born in Cremona (nothern Italy) and I am a
        software developer.
        <br />
        I love building things for the web.
        <br />
        The highlights of my developer experience are:
        <div className="p-title">9 year (and counting...) at Qboxmail.com</div>
        I have worked as a remote full-stack developer for Qboxmail.com for the
        last 9 years. Last year I transitioned to a part-time position to find
        new cool opportuinities.
        <br />
        In my 9 years at Qboxmail I have built and maintained 2 web apps in a
        small team of 2 software developers and 1 designer:
        <br /> <br />
        - the provisioning panel: Rails backend and Reactjs frontend single page
        application.
        <br />- the webmail(with contacts & calendar): Nodejs backend and
        Reactjs frontend single page application.
        <div className="p-title">Side projects - Blooza</div>
        Blooza is a mobile app for italian football lovers. They can trade the
        card of their favorite teams and play against each other.
        <br />I am the only developer and I have built the backend, the iOS and
        the Android version. The app is built entirely in Vue.js on top of
        Cordova. The backend is a nodejs app.
        <div className="p-title">Side projects - FontsVibes.com</div>
        My last side project is a simple tool to quikly find the perfect font
        for web products. It is a SvelteKit app.
      </p>

      <h2>Why I am a good fit for the role</h2>

      <p>
        I am a developer but I became it because I love building things and this
        is the most powerful tool to do this.
        <br />
        For this reason, even if I am a technical figure I never lose the
        priority on what matter: shipping to the customer. I always try to avoid
        tech stuff stopping me from this. I always try to ship little extra
        pleasing details. I love when products surprise me in an unexpected way.
        <br />
        <br />I have strong remote experience. I worked remotely for 9 years
        now, and I know the pros and cons of it. I know the importance of good
        writing and I am always try to improve my skills.
        <br />
        About your tech stack, I am confident to be effective from day 0 since I
        know well how to work with Rails & React (or anything that runs in the
        browser).
        <br />
        I know deeply javascript and CSS, since I care a lot about UX/UI.
        <br />
        The "weak point" is Typescript since I learned it 3 years ago but we
        only started using it in production recently (beginning of 2023). It is
        a technology I like and everyday I am getting better at it.
        <br />
        <br />
      </p>
    </div>
  );
};
