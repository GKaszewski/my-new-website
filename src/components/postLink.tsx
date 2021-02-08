import Link from "next/link";
import React from "react";
import { Post } from "../redux/types";

interface Props {
  data: Post;
}

export default function PostLink(props: Props) {
  return (
    <Link href={`/blog/${encodeURIComponent(props.data.slug)}`}>
      <a className="hover:underline">{props.data.title}</a>
    </Link>
  );
}
