import React from "react";
import styles from "./BackgroundVideo.module.css";

interface Props {
  text: string;
}

export default function BackgroundVideoComponent(props: Props) {
  return (
    <div className="video-bg">
      <video autoPlay muted loop>
        <source src="/test.webm" type="video/webm" />
      </video>
      <div className="text-overlay">
        {/* <h1 className="text-5xl text-white">{props.text}</h1> */}
      </div>
    </div>
  );
}
