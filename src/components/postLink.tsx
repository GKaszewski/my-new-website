import React from 'react';
import { Link } from '@material-ui/core';
import { Post } from '../redux/types';

interface Props {
    data: Post
}

export default function PostLink(props: Props) {
    return <Link href={`/blog/${encodeURIComponent(props.data.slug)}`} color="textPrimary" variant="body2" underline="hover">
        {props.data.title}
    </Link>
}
