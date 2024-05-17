import React, { useState, useEffect } from "react";

export default (props) => {
  return (
    <article className="hire-me-card">
      <div className="hire-me-card-img"></div>
      <div className="hire-me-card-desc">
        <div className="hire-me-card-name">Nicolò Benigni</div>

        <div className="rating">
          <div className="icon-star"></div>

          <div>5.0</div>
        </div>
      </div>
      <div className="hire-me-card-price">
        <div className="price-tag">Let's work together</div>
      </div>
    </article>
  );
};
