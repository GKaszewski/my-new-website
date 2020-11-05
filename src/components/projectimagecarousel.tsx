import { Box, createStyles, makeStyles, Paper, Theme } from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'


interface Props {
    urls: string[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imgContainer: {
            width: "100%",
            height: "100%",
            "& img": {
                display: "block",
                objectFit: "cover",
                height: "auto",
                width: "100%",
                marginTop: "1rem",
                marginBottom: "1rem",
            },
        },
    })
);

export default function ProjectImageCarousel(props: Props) {
    const classes = useStyles();
    return <>
        <Paper elevation={3}>
            <Carousel autoPlay={true} infiniteLoop showThumbs={false} showArrows={false} showStatus={false} swipeable>
                {props.urls.map((url, i) => {
                    return <Image key={`${url}-${i}`} src={url} unsized quality={100} loading="lazy" />
                })}
            </Carousel>
        </Paper>
    </>
}