import { Container, Paper, Typography } from '@material-ui/core';
import useStyles from './../../Styles'
import React from 'react'
import OrdersList from './OrdersList';
import BadgeScan from './BadgeScan';

const ConfirmPage = (props) => {
    const classes = useStyles();
    return (<Container>
        <Paper classes={{
            root: classes.paperRoot
            }}>
            <Typography 
              variant='h4'
              color='primary'
              classes={{
                root: classes.headerRoot,
              }}>
              Confirm Orders
            </Typography>
            <OrdersList/>
            <BadgeScan/>

        </Paper>
    </Container>)
}

export default ConfirmPage;