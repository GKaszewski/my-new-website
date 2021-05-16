import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Post } from "../redux/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
interface Props {
  data: Post;
}

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};

export default function PostComponent(props: Props) {
  return (
    <div className="flex flex-col justify-center m-4">
      <header className="">
        <h1 className="flex flex-col items-center">
          <span className="font-extrabold tracking-tight text-3xl md:text-5xl">
            {props.data.title}
          </span>
          <span className="font-semibold tracking-wide text-lg mt-1">
            {new Date(props.data.created_on).toDateString()}
          </span>
        </h1>
        <hr className="mt-8 border-t-2 w-20 mx-auto" />
      </header>
      <div className="prose lg:prose-lg xl:prose-xl mx-auto">
        <ReactMarkdown
          className="whitespace-pre-wrap"
          plugins={[gfm]}
          renderers={renderers}
        >
          {props.data.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
