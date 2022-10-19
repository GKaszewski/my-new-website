import React from "react";

interface Props {
  text?: string;
  source: string;
}

export default function BackgroundVideoComponent(props: Props) {
  return (
    <div className={"min-w-full w-full relative inline-block"}>
      <video
        className="max-h-full w-full object-cover pointer-events-none"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src={props.source} type="video/webm" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-9xl text-white tracking-wide uppercase shadow">
          {props.text}
        </h1>
      </div>
    </div>
  );
}
