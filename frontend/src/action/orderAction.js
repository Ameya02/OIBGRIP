import axios from "axios";

export const placeOrder = (token,address,TotalPrice) => async (dispatch,getState) => {
    dispatch({type:"PLACE_ORDER_REQUEST"})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {
        const res = await axios.post('/api/orders/placeorder',{token,address,TotalPrice,currentUser,cartItems})
        dispatch({type:"PLACE_ORDER_SUCCESS"})
        window.location.href="/orders";

    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAIL",payload:error})   
    }
}

export const getOrders = () => async (dispatch) => {
    dispatch({type:"GET_ORDERS_REQUEST"})
    
    try {
        const res = await axios.get('/api/orders/getorders')
        dispatch({type:"GET_ORDERS_SUCCESS", payload:res.data})
    }
    catch (error) {
        dispatch({type:"GET_ORDERS_FAIL",payload:error})   

    }
}

export const orderStatus = (status,orderID) => async (dispatch) => {
    dispatch({type:"STATUS_CHANGE_REQUEST"})
    try {
        const res = await axios.post('/api/orders/statuschange',{status,orderID})
        dispatch({type:"STATUS_CHANGE_SUCCESS"})
        window.location.href="/admin";

    }
    catch (error) {
        dispatch({type:"STATUS_CHANGE_FAIL",payload:error})   

    }
}