import React from 'react'
import {  Grid, Typography } from '@material-ui/core';
import useStyles from './../../Styles'


const WelcomeMessage = (props) => {
    const classes = useStyles();
    return(
        <Grid container 
        justify='flex-start' 
        align='flex-start' 
        classes={{root: classes.leftTextAlign}}
        direction='column'>
        <Typography variant='body1'
          color='textSecondary'>
            Welcome to DLA9 $WAG Store Last Mile App
        </Typography>

        <Typography variant='body1'
          color='textSecondary'>
            This App is used for confirming and marking orders as 'DELIVERED'
        </Typography>

        <Typography variant='body1'
          color='textSecondary'>
            It will also put a timestamp as a proof of delivery
        </Typography>

        <Typography variant='body1'
          color='textSecondary'>
            If you are getting network issues, please open a new tab
        </Typography>

        <Typography variant='body1'
          color='textSecondary'>
            Type '1.1.1.1' into the address bar, and hit enter 
        </Typography>

        <Typography variant='body1'
          color='textSecondary'>
            You will be taken to the Amazon network sign-in page
        </Typography>

        <Typography variant='body1'
          color='textSecondary'>
            Once you have signed-in to the network, come back to this page
        </Typography>
      </Grid>
    )
}

export default WelcomeMessage;