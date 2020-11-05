import React, { useEffect, useState, FormEvent } from 'react';
import { AppBar, createStyles, Grid, IconButton, InputBase, makeStyles, Theme, Toolbar, Typography, fade } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { BaseLayout } from '../src/components/baselayout';
import { useDispatch, useSelector } from "react-redux";
import fetchPosts from '../src/redux/dispatchers/blog/fetchPosts';
import { searchPosts } from '../src/redux/dispatchers/blog/searchPosts';
import Spinner from '../src/components/spinner';
import { Post } from '../src/redux/types';
import PostLink from '../src/components/postLink';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
    },
    blogBar: {
        flexGrow: 1,
    },
    drawer: {
        width: '100%',
        backgroundColor: theme.palette.background.default,
        flex: 1,
    },
    categories: {
        marginTop: theme.spacing(1),
    },
    categoryButton: {
        color: theme.palette.text.primary,
        width: '100%',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    menu: {
        color: 'white',
    }
}))

export default function Blog() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { pending, posts, searchedPosts } = useSelector(state => state.postsReducer);
    const [query, setQuery] = useState('');
    const [searched, setSearched] = useState(false);

    useEffect(() => {
        dispatch(fetchPosts());
        setSearched(false);
    }, [])

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(searchPosts(query));
        setSearched(true);
    }

    return <BaseLayout title="Gabriel Kaszewski - Blog">
        <Grid item className={classes.root}>
            <Grid container direction="column" justify="center" alignContent="center" alignItems="center" spacing={2}>
                <Grid item>
                    <AppBar className={classes.blogBar} color="transparent" elevation={0} position="relative">
                        <Toolbar>
                            {searched && <IconButton onClick={() => setSearched(false)}>
                                <ArrowBackIcon />
                            </IconButton>}
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <form onSubmit={(e) => handleSearch(e)} >
                                    <InputBase onChange={(e) => setQuery(e.target.value)} value={query} classes={{ root: classes.inputRoot, input: classes.inputInput }} placeholder="Search..." />
                                </form>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid item>
                    <Typography variant="h3">
                        Posts
                    </Typography>
                </Grid>
                {posts.length > 0 ? null : <Grid item>
                    <Typography>Posts will show up here!</Typography>
                </Grid>}
                {searched ? searchedPosts.map((post: Post) => {
                    return <Grid key={post.title} item>
                        <PostLink data={post} />
                    </Grid>
                }) : posts.map((post: Post) => {
                    return <Grid key={post.title} item>
                        <PostLink data={post} />
                    </Grid>
                })}
                <Grid item>
                    <Spinner open={pending} />
                </Grid>
            </Grid>
        </Grid>
    </BaseLayout>
}