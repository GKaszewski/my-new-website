import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { Skill } from '../redux/types';
import Footbar from './footbar';
import NavigationBar from './navigationbar';
import SkillComponent from './skillcomponent';

interface Props {
    title: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        minHeight: '100vh',
        width: '100%',
        margin: '0',
        padding: 0,
        display: 'flex',
    },
    navbar: {
        padding: 0,
    },
    content: {
        textAlign: 'justify',
        marginLeft: '1rem',
        marginRight: '1rem',
    },
    textWrap: {
        whiteSpace: 'pre-line',
        hyphens: 'auto',
        wordWrap: 'normal',
    },
    filler: {
        flex: 1,
    },
    footer: {
        marginTop: "auto",
    },
}));

export const BaseLayout: FunctionComponent<Props> = ({ title, children }) => {
    const classes = useStyles();
    return <Grid className={classes.root} container direction="column" wrap="wrap" justify="flex-start" spacing={2}>
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Grid item style={{ padding: 0 }}>
            <NavigationBar />
        </Grid>
        <Grid style={{ height: '100%' }} container item justify="center">
            {children}
        </Grid>
        <Grid item className={classes.filler}>
        </Grid>
        <Grid className={classes.footer} >
            <Footbar />
        </Grid>
    </Grid>
}