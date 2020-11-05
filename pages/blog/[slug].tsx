import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { BaseLayout } from '../../src/components/baselayout';
import { Post } from '../../src/redux/types';
import { BASE_URL } from '../../src/utils/ApiData';
import PostComponent from '../../src/components/post';
import { BlogJsonLd } from 'next-seo';

interface Props {
    data: Post
}

export default function PostPage(props: Props) {
    return <BaseLayout title={`Gabriel Kaszewski - ${props.data.title}`}>
        <BlogJsonLd
            url={`https://gkaszewski.github.io/blog/${props.data.slug}`}
            title={props.data.title}
            datePublished={new Date(props.data.created_on).toISOString()}
            dateModified={new Date(props.data.created_on).toISOString()}
            authorName={props.data.author.username}
            description={`${props.data.content.slice(0, 100)}...`}
            images={[]}
        />
        <Grid item xs={12}>
            <PostComponent data={props.data} />
        </Grid>
    </BaseLayout>
}


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const slug = context.params.slug;

    let post = (await axios.get<Post>(`${BASE_URL}/blog/posts/${slug}`)).data;
    return {
        props: {
            data: post
        }
    }
}