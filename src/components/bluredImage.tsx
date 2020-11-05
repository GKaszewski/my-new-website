import { Box, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

interface Props {
    imgPath: string;
    text: string;
}

const useStyles = makeStyles((props: Props) => createStyles({
    container: {
        position: 'relative',
        textAlign: 'center',
        width: '100%',
        height: '100%',
    },
    bgImage: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        WebkitFilter: 'blur(4px)',
        filter: 'blur(4px)',
        width: '100%',
        height: '100%',
    },
    centerText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        textShadow: '5px 5px 5px #000000'
    }
}))


export default function BlurredImage(props: Props) {
    const classes = useStyles(props);
    return <Box className={classes.container}>
        <img src={`/${props.imgPath}`} className={classes.bgImage} />
        <Typography className={classes.centerText} variant="h2">{props.text}</Typography>
    </Box>
}