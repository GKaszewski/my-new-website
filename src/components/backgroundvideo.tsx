import React from "react";
import styles from "./BackgroundVideo.module.css";

interface Props {
  text?: string;
  source: string;
}

export default function BackgroundVideoComponent(props: Props) {
  return (
    <div className={"min-w-full w-full"}>
      <video
        className="relative max-h-full w-full object-cover pointer-events-none"
        autoPlay
        muted
        playsInline
        poster="/poster.webp"
        loop
      >
        <source src={props.source} type="video/webm" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-5xl text-white">{props.text}</h1>
      </div>
    </div>
  );
}
