import Link from "next/link";
import React from "react";
import { Post } from "../redux/types";

interface Props {
  data: Post;
}

export default function PostLink(props: Props) {
  return (
    <Link className="hover:underline" href={`/blog/${encodeURIComponent(props.data.slug)}`}>
        {props.data.title}
    </Link>
  );
}
