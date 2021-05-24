import { Paper, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './../../Styles';

const FinalMessage = (props) => {
    const classes = useStyles();
    const { success } = props;
    return (<div> {
            (success) ? 
            <div>
                <Paper className={classes.successBackground}>
                    <Typography variant='h5' color='inherit'>Successfully Delivered Orders!</Typography>
                </Paper>
            </div> 
            :
            <div>
                <Paper className={classes.errorBackground}>
                    <Typography variant='h5' color='inherit'>Failed To Deliver Orders. Please check the Associates' Order and Login!</Typography>
                </Paper>
            </div>
        }
        </div>)
}

export default FinalMessage;