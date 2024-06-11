import React, { useState, useEffect } from "react";

export default (props) => {
  const [onHome, setOnHome] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setOnHome(true);
    }
  }, []);

  return (
    <nav className="menu">
      <a
        href="#about"
        className={onHome ? "active" : ""}
        onClick={(e) => {
          if (onHome) {
            e.preventDefault();
            const aboutSection = document.querySelector("#about");
            aboutSection.scrollIntoView({ behavior: "smooth" });
          } else {
            e.preventDefault();
            window.location.href = "/";
          }
        }}
      >
        About this project
      </a>

      <a href="/product" className={onHome ? "" : "active"}>
        Font Tester demo
      </a>
    </nav>
  );
};
