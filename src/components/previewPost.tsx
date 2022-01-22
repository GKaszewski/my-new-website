import React from "react";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";

interface Props {
  data: string;
}

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};

export default function PreviewPost(props: Props) {
  return (
    <div className="w-full h-full rounded-lg bg-gray-900 prose lg:prose-lg xl:prose-xl mx-auto overflow-y-scroll overscroll-y-auto">
      <ReactMarkdown
        className="whitespace-pre-wrap flex flex-col justify-center items-center"
        plugins={[gfm]}
        renderers={renderers}
      >
        {props.data}
      </ReactMarkdown>
    </div>
  );
}
