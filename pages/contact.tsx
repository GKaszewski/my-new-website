import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BaseLayout } from "../src/components/baselayout";

export default function Contact() {
  return (
    <BaseLayout title="Gabriel Kaszewski - Contact">
      <span className="m-8" />
      <h1 className="text-5xl text-center font-bold">Contact</h1>
      <a className="hover:underline" href="https://github.com/GKaszewski">
        Github <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a
        className="hover:underline"
        href="https://www.linkedin.com/in/gabriel-kaszewski-5344b3183"
      >
        LinkedIn <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </a>
      <p>
        <FontAwesomeIcon icon={["fas", "at"]} /> gabrielkaszewski@gmail.com
      </p>
    </BaseLayout>
  );
}
