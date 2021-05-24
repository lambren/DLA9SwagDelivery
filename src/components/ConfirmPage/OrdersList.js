import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { orderState } from  './../../recoil/atoms'
import {useRecoilValue} from 'recoil'
import Order from './Order';
import useStyles from './../../Styles'

const OrdersList = (props) => {
    const classes = useStyles();
    const orders = useRecoilValue(orderState);

    return (
        <Grid container spacing={2}
            className={classes.leftTextAlign}>
            <Grid item container alignItems='center'>
                <Grid item xs={8}>
                    <Typography variant='h6'>
                        Item
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography variant='h6'>
                        Qty
                    </Typography>
                </Grid>
            </Grid>
        {
            orders.map(item => 
                <Order key={item.cart_id}
                    order={item}>
                </Order>)    
        }
        </Grid>
    )

}

export default OrdersList;