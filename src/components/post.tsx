import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Post } from '../redux/types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Grid, Typography } from '@material-ui/core';

interface Props {
    data: Post
}

const renderers = {
    code: ({ language, value }) => {
        return <SyntaxHighlighter style={dark} language={language} children={value} />
    }
}

export default function PostComponent(props: Props) {
    return <Grid item container direction="column">
        <Grid item xs={12}>
            <Typography variant="h3">{props.data.title}</Typography>
            <Typography variant="h6">{new Date(props.data.created_on).toDateString()}</Typography>
        </Grid>
        <Grid item xs={12}>
            <ReactMarkdown plugins={[gfm]} renderers={renderers}>
                {props.data.content}
            </ReactMarkdown>
        </Grid>

    </Grid>

}