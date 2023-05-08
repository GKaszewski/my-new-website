import React from "react";
import {GetServerSideProps} from "next";
import axios from "axios";
import {BaseLayout} from "../../src/components/baselayout";
import {Post} from "../../src/redux/types";
import {BASE_URL} from "../../src/utils/ApiData";
import PostComponent from "../../src/components/post";
import {NextSeo} from "next-seo";

interface Props{
    data: Post;
}

export default function PostPage(props: Props) {
    const post = props.pageProps.data;

    return (
        <BaseLayout title={`Gabriel Kaszewski - ${post.title}`}>
            <NextSeo title={`Gabriel Kaszewski - ${post.title}`}
                     description={`${post.content.slice(0, 100)}...`} openGraph={{
                title: post.title,
                url: `https://gabrielkaszewski.dev/blog/${post.slug}`,
                description: `${post.content.slice(0, 100)}...`,
            }} twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image'
            }}/>
            <span className="m-12 md:m-8"/>
            <div className="m-4 w-full md:w-2/3">
                <PostComponent data={post}/>
            </div>
        </BaseLayout>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
    context
) => {
    const slug = context.params.slug;
    const post = (await axios.get<Post>(`${BASE_URL}/blog/posts/${slug}`)).data;
    return {
        props: {
            data: post,
        },
    };
};
