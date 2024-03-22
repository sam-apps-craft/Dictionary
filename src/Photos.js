import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <container className="Photos" >
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div  key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </container>
    );
  } else {
    return null;
  }
}
