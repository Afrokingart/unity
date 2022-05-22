import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from ".";
import "./blog.css";

export default function Blog() {
  return (
    <div className="unity__blog section__padding" id="blog">
      <div className="unity__blog__heading">
        <h1 className="gradient__text">
          Ex voluptate aliqua, <br /> Aliquip enim sit dolor ipsum.
        </h1>
      </div>
      <div className="unity__blog__container">
        <div className="unity__blog__container__groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="Exercitation magna reprehenderit mollit ullamco incididunt sunt enim officia sit ipsum labore officia occaecat amet?"
          />
        </div>
        <div className="unity__blog__container__groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            text="Sit culpa esse commodo pariatur consectetur minim voluptate eiusmod aliquip consequat dolore ullamco?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            text="Minim reprehenderit ad ut enim ipsum id excepteur ut eiusmod nulla occaecat et ullamco reprehenderit.?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="Est officia tempor aliqua quis proident qui sunt cupidatat incididunt pariatur aute eiusmod irure?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            text="Pariatur elit dolore esse elit ullamco velit eu elit occaecat laboris officia occaecat?"
          />
        </div>
      </div>
    </div>
  );
}
