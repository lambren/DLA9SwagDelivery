import { Box,  CircularProgress, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './../../Styles'

const Order = (props) => {
    const classes = useStyles();
    const { order } = props;
    return (
        <Grid item container alignItems='center'>
            <Box hidden={true} 
                className={classes.loadingOverlay}>
                <Grid item container
                    justify='center' align='center'>
                    <CircularProgress></CircularProgress>
                </Grid>
            </Box>
        
            <Grid item xs={8}>
                <Typography variant='body1'>
                    {order.swag_name}
                </Typography>
            </Grid>

            <Grid item xs={2}>
                <Typography variant='body1'>
                    x {order.quantity}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Order;