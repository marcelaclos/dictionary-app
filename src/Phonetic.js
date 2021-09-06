import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (

<div className="Phonetic">
      <div className="row">
        <div className="col">
          <p>{props.phonetic.text}</p>
        </div>
       
          <audio controls src={props.phonetic.audio}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
       
      </div>
    </div>
  );
}