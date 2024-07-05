import React from "react";
import News from "../assets/News.png";
export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-stretch">
      <div className="card bg-dark text-light" style={{ width: "100%" }}>
        <img
          src={src ? src : News}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title.slice(0, 50)}...</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : "Check out Read More.."}..
          </p>
          <a href={url} className="btn btn-primary mt-auto">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
