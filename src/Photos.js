import React from "react";
import "./Photos.css";
import monkey from "./orangutan.png";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <h2 className="text-center">Images about your search ...</h2>
        <img src={monkey} className="App-logo img-fluid" alt="logo monkey" />
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.src.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}