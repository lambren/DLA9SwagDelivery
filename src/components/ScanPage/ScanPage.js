import React from 'react'
import { Container, Paper, Typography } from '@material-ui/core';
import useStyles from './../../Styles'
import WelcomeMessage from './WelcomeMessage';
import ScanInput from './ScanInput';

const ScanPage = (props) => {
    const classes = useStyles();

    return (      
    <Container>
        <Paper classes={{root: classes.paperRoot}}>
            <Typography 
              variant='h4'
              color='primary'
              classes={{
                root: classes.headerRoot,
              }}>
              DLA9 $WAG Store Last Mile
            </Typography>
            <WelcomeMessage/>
            <ScanInput/>
          </Paper>
    </Container>)
}

export default ScanPage;