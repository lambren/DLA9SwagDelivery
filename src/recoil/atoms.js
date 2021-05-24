import { atom } from 'recoil'

const routeState = atom({
    key: 'routeState',
    default: 'SCAN_PAGE',
});

const orderState = atom({
    key: 'orderState',
    default: [],
});


export { routeState, orderState } 