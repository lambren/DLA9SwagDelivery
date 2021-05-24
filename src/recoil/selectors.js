import { selector } from 'recoil'
import { orderState} from './atoms'

const cartState = selector({
    key: 'cartState',
    get: ({get}) => {
        const orders = get(orderState)

        return (orders.map(item => item.cart_id));
    }
})

export {cartState}