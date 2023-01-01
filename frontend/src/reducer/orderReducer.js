export const placeOrderReducer = (state={},action) => {
    switch(action.type) {
        case "PLACE_ORDER_REQUEST":
            return {
                loading: true,
            };
        case "PLACE_ORDER_SUCCESS":
            return {
                loading: false,
                success: true,
            };
        case "PLACE_ORDER_FAIL":
            return {
                loading: false,
                error:action.payload,
            };
        default:
            return state;
    }
};

export const getOrderReducer = (state={orders:[]},action) => {
    switch(action.type) {
        case "GET_ORDERS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "GET_ORDERS_SUCCESS":
            return {
                orders: action.payload,
                loading: false,
                

            };
        case "GET_ORDERS_FAIL":
            return {
                error:action.payload,
                loading: false,
                
            };
        default:
            return state;
    }
};
export const getUserOrderReducer = (state={user_orders:[]},action) => {
    switch(action.type) {
        case "GET_USER_ORDERS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "GET_USER_ORDERS_SUCCESS":
            return {
                user_orders: action.payload,
                loading: false,
                

            };
        case "GET_USER_ORDERS_FAIL":
            return {
                error:action.payload,
                loading: false,
                
            };
        default:
            return state;
    }
};

export const orderStatusReducer = (state={}, action) => {
    switch(action.type) {
        case "STATUS_CHANGE_REQUEST":
            return {
                loading: true,
            };
        case "STATUS_CHANGE_SUCCESS":
            return {
                loading: false,
                success: true,
            };
        case "STATUS_CHANGE_FAIL":
            return {
                loading: false,
                error:action.payload,
            };
        default:
            return state;
    }
}