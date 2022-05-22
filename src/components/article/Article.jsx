import React from "react";
import "./article.css";

export default function Article({ imgUrl, date, text }) {
  return (
    <div className="unity__blog__container__article">
      <div className="unity__blog__container__article__image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="unity__blog__container__article__content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}
