import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  urls: string[];
}

export default function ProjectImageCarousel(props: Props) {
  return (
    <div className="shadow-lg">
      <Carousel
        autoPlay={true}
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        swipeable
      >
        {props.urls.map((url, i) => {
          return <img key={`${url}-${i}`} src={url} />;
        })}
      </Carousel>
    </div>
  );
}
