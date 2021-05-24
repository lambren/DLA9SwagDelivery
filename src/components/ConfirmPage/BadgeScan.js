import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect, createRef } from 'react'
import useStyles from './../../Styles'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { orderState, routeState } from './../../recoil/atoms'
import { cartState } from './../../recoil/selectors'
import { HOSTNAME } from './../../Constants'
import FinalMessage from './FinalMessage'

const BadgeScan = (props) => {
    const classes = useStyles();

    const inputRef = createRef();

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    })

    const [user_id, setUser_id] = useState('');
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [success, setSuccess] = useState(false);

    const resetRoute = useResetRecoilState(routeState);
    const resetOrders = useResetRecoilState(orderState);

    const carts = useRecoilValue(cartState);

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(HOSTNAME + 'deliver-orders/', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                user_id, carts
            })
        }).then(res => res.json())
        .then(data => {
            if (data.status === 'SUCCESS')
                setSuccess(true);
            else setSuccess(false);
        }).catch(e => {
            setSuccess(false);
        }).finally(() => {
            setLoading(false);
            setFinished(true);
            setTimeout(() => {
                resetRoute();
                resetOrders();
            }, 5000)
        });
    }

    const chooseDisplay = () => {
        if (loading) return (<CircularProgress/>)
        else if (finished) {
            return(<FinalMessage success={success}/>)
        } else return (
            <form onSubmit={onSubmit}>
                <input
                    ref={inputRef}
                    value = {user_id}
                    onChange={(e) => setUser_id(e.target.value)}
                    className={classes.textInputRoot}
                    placeholder='Scan Badge To Confirm Delivery'
                    >
                </input>
            </form>
        )
    }

    return (
        <div> {
            chooseDisplay()
        }
        </div>
    )
}

export default BadgeScan;