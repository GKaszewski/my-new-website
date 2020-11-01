import React, { useState } from 'react';
import { Button, createStyles, Divider, Grid, Link, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import { BaseLayout } from '../src/components/baselayout';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Head from 'next/head';

const useStyles = makeStyles((theme: Theme) => createStyles({
    formContainer: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    formElement: {
        width: '100%',
    },
    sendButton: {
        float: 'right'
    }
}));

export default function Contact() {
    const classes = useStyles();

    const [data, setData] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        //submit
        alert('success!');
    }

    return <BaseLayout title="Gabriel Kaszewski - Contact">
        <Head>
            <script src="https://kit.fontawesome.com/6f974350df.js"></script>
        </Head>
        <Grid item>
            <Typography variant="h2">Contact</Typography>
        </Grid>
        <Grid item container direction="column" alignContent="center" spacing={1}>
            <Grid item>
                <Link color="textPrimary" variant="h5" href="http://github.com/GKaszewski"><i className="fab fa-github"></i> Github</Link>
            </Grid>
            <Grid item>
                <Link color="textPrimary" variant="h5" href="https://www.linkedin.com/in/gabriel-kaszewski-5344b3183/"><i className="fab fa-linkedin-in"></i> Linkedin</Link>
            </Grid>
        </Grid>
        <Grid item>
            <Typography variant="h2">Send me an email!</Typography>
        </Grid>
        <Grid item container justify="center">
            <form className={classes.formContainer} onSubmit={handleSubmit}>
                <Grid container direction="column" justify="center" spacing={1}>
                    <Grid item xs={12} md={12}>
                        <TextField className={classes.formElement} variant="outlined" color="secondary" id="email" label="Your email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className={classes.formElement} variant="outlined" color="secondary" id="topic" label="Topic" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField className={classes.formElement} variant="outlined" color="secondary" id="content" label="Content" multiline rows={12} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.sendButton} type="submit" color="secondary" variant="contained">Send <MailOutlineIcon /></Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </BaseLayout>
}