import React, { createRef, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import useStyles from './../../Styles';
import { HOSTNAME } from './../../Constants';
import { useSetRecoilState } from 'recoil';
import { routeState, orderState } from './../../recoil/atoms'
import { useSnackbar} from 'notistack'  

const ScanInput = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const [qrcode, setqrcode] = useState('');
    const [loading, setLoading] = useState(false);
    const setRoute = useSetRecoilState(routeState);
    const setOrders = useSetRecoilState(orderState);

    const inputRef = createRef();

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    })

    const classes = useStyles();
    
    const onSubmit = async (e) => {
        const resetState = () => {
            setqrcode('');
            setLoading(false);
        }

        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(HOSTNAME + 'get-carts-by-qr/', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    qrcode
                })
            });
            const data = await res.json();
            if (data.status === 'SUCCESS') {
                setOrders(data.data);
                setRoute('CONFIRM_PAGE');
            }
            else {
                enqueueSnackbar('No orders found', {
                    variant: 'error'
                })
                resetState();
            }
        } catch (e) {
            enqueueSnackbar('Network Error. Please Sign-in to amzn-internet Wifi', {
                variant: 'error'
            })
            resetState();
        }   
    }

    const chooseDisplay = () => {
        if (!loading) 
            return(
                <form onSubmit={onSubmit}>
                    <input
                        ref={inputRef}
                        value={qrcode}
                        onChange={e => setqrcode(e.target.value)}
                        placeholder='Scan Order To Begin'
                        className={classes.textInputRoot}>
                    </input>
                </form>
            ); 
        else return (<CircularProgress/>)
    }

    return(   
        <div>
            {chooseDisplay()} 
        </div>        
    )
}

export default ScanInput;