import React from "react";
import {Box, Button, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

type ImageCardProps = {
    src: string;
    caption: string;
    onClick?: () => void;
};

const useStyles = makeStyles({
    header: {
      display: "flex",
      justifyContent: "space-between",
      padding: 10,
      height: 55,
      backgroundColor: "#000078",
    },
    caption: {
        padding: 10,
        color: "white",
    },
    button: {
        maxHeight: 35,
        marginTop: 5,
    },
  });

  export default function ImageCard({src, caption, onClick}:ImageCardProps) {
    const classes = useStyles();
    return <>
                <Box    bgcolor="#414141"
                        height={350}
                        width={400}
                        >
                    <header className={classes.header}>
                        <Typography variant="h6" 
                                    align="left"
                                    color="error"
                                    className={classes.caption}>
                            {caption}
                        </Typography>
                        {onClick && <Button className={classes.button}
                                variant="contained"
                                onClick={onClick}>
                            Refresh
                        </Button>}
                    </header>
                    <img    src={src}
                            height={275}
                            width={400}
                    />
                </Box>
           </>
}