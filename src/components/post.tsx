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
      <h3 className="text-3xl font-bold">{props.data.title}</h3>
      <h6 className="text-lg font-light">
        {new Date(props.data.created_on).toDateString()}
      </h6>
      <div className="w-full">
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
