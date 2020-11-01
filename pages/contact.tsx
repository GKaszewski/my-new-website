import React, { useState } from 'react';
import { Button, createStyles, Divider, Grid, Link, makeStyles, Snackbar, TextField, Theme, Typography } from '@material-ui/core';
import { BaseLayout } from '../src/components/baselayout';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Head from 'next/head';
import sendMail from '../src/utils/sendMail';

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

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        await sendMail({ email, subject, content });
        setEmail("");
        setSubject("");
        setContent("");
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
                        <TextField value={email} className={classes.formElement} onChange={(e) => setEmail(e.target.value)}
                            required type="email" variant="outlined" color="secondary" id="email" label="Your email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={subject} className={classes.formElement} onChange={(e) => setSubject(e.target.value)}
                            required variant="outlined" color="secondary" id="subject" label="Subject" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={content} className={classes.formElement} onChange={(e) => setContent(e.target.value)}
                            required variant="outlined" color="secondary" id="content" label="Content" multiline rows={12} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.sendButton} type="submit" color="secondary" variant="contained">Send <MailOutlineIcon /></Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </BaseLayout>
}