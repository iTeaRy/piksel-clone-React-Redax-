import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Tools from '../Tools';
import Frames from '../Frames'
import FrameTools from '../FrameTools';
import AnimationPlayer from '../AnimationPlayer';

const useStyles = makeStyles(() => ({
    root: {

    },
    paperCanvas: {
        paddingTop: 5,
        height: 600,
        width: 600,
        margin: 20,
    },
    paper: {
        margin: 20,
        height: 600,
        width: 300,
        background: '#FFFAFA'
    },
    frames: {
        overflow: 'auto',
        height: 600,
    },

}));

const PixelClone = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid key='tools_container' item>
                        <Paper className={classes.paper}>
                            <Grid container justify="center" >
                                <Grid key='column_tools' item>
                                    <Tools />
                                </Grid>
                                <div className={classes.frames}>
                                    <div >
                                        <Grid key='column_frames' item>
                                            <FrameTools />
                                        </Grid>
                                    </div>
                                </div>


                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid key='canvas_container' item>
                        <Paper className={classes.paperCanvas}>
                            <Grid justify="center" container>
                                <Frames />
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid key='view_container' item>
                        <Paper className={classes.paper}>
                            <AnimationPlayer/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PixelClone;
