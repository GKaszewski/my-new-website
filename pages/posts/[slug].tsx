import React, { useEffect } from 'react';
import { GetServerSideProps, GetStaticPaths } from 'next';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import { BaseLayout } from '../../src/components/baselayout';
import { Post } from '../../src/redux/types';
import { BASE_URL } from '../../src/utils/ApiData';
import PostComponent from '../../src/components/post';

interface Props {
    data: Post
}

export default function PostPage(props: Props) {
    return <BaseLayout title={`Gabriel Kaszewski - ${props.data.title}`}>
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