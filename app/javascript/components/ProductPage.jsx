import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import FontTester from "./FontTester";
import Menu from "./Menu";

const ProductPrice = () => {
  return (
    <div className="product-card-price-option">
      <div className="product-card-price-option-amount">$ 24</div>
      <div className="product-card-price-option-description">
        <div className="product-card-price-option-description-title">
          Buy Lemon
        </div>
        <div className="product-card-price-option-description-subtitle">
          Get all the good stuff!
        </div>
      </div>
    </div>
  );
};

export default (props) => {
  return (
    <>
      <Toaster />

      <div className="page-header">
        <h1>Ask Sahil's Book</h1>

        <Menu></Menu>
      </div>

      <div className="product-container">
        <div className="product-card">
          <img src="products/font01.jpg"></img>

          <div className="product-card-body">
            <div className="product-card-info">
              <div className="product-card-title">Lemon Typeface</div>

              <div className="product-card-meta">
                <div className="product-card-author">
                  <div className="product-card-author-avatar"></div>
                  Rajesh Rajput
                </div>

                <div className="product-card-rating">
                  <div className="rating">
                    <div className="icon-star"></div>
                    <div className="icon-star"></div>
                    <div className="icon-star"></div>
                    <div className="icon-star"></div>
                    <div className="icon-star"></div>
                  </div>

                  <div>123 ratings</div>
                </div>
              </div>

              <div className="product-card-description">
                Say Hello to "Lemon" Font Family – The Super Heavy Condensed
                Typeface. From sleek modernism to timeless Art Deco, and even a
                touch of abstract intrigue, it's all wrapped up in one versatile
                font family. With nine weights, eighteen styles, OpenType
                features, multi-language support, and variable type options,
                "Lemon" is a must-have for any designer. Plus, the Regular
                weight is free for both personal and commercial projects.
              </div>

              <div className="product-card-price-mobile">
                <ProductPrice />
              </div>

              <div className="ft-widget-container">
                <h1>Vibe check</h1>

                <FontTester />
              </div>
            </div>

            <div className="product-card-price-desktop">
              <ProductPrice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
