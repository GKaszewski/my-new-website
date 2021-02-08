import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BaseLayout } from "../src/components/baselayout";
import { Button } from "../src/components/button";
import TextField from "../src/components/textfield";
import sendMail from "../src/utils/sendMail";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await sendMail({ email, subject, content });
    if (!res) setError(true);
    else setError(false);

    setEmail("");
    setSubject("");
    setContent("");
  };

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
      <a className="hover:underline" href="https://twitter.com/GKaszewski">
        Twitter <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <p>
        <FontAwesomeIcon icon={["fas", "at"]} /> gabrielkaszewski@gmail.com
      </p>
      {/* <h2 className="text-4xl text-center font-bold">Send me an email!</h2>
      <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-4 m-4">
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <label htmlFor="email">Your email</label>
            <TextField
              value={email}
              onChange={(value) => setEmail(value)}
              type="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <label htmlFor="subject">Subject</label>
            <TextField
              value={subject}
              onChange={(value) => setSubject(value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-full overflow-y-auto">
            <label htmlFor="email">Content</label>
            <textarea
              rows={12}
              style={{ resize: "none" }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="rounded-xl w-full border-4 text-black py-1 px-2 outline-none appearance-none focus:border-yellow-400 h-full"
            />
          </div>
          <div className="flex w-1/3 items-end">
            <Button callback={handleSubmit}>
              <p>
                Send{" "}
                <span>
                  <FontAwesomeIcon icon={["fas", "envelope-open-text"]} />
                </span>
              </p>
            </Button>
          </div>
        </div>
      </form>
      {error && <p>Failed sending email.</p>} */}
    </BaseLayout>
  );
}
