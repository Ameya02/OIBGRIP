import axios from "axios";

export const getAllPizzas =  () => async (dispatch) => {
    dispatch({type:"GET_PIZZAS_REQUEST"})
    try {
        const res = await axios.get("/api/pizzas/getAllPizzas");
        dispatch({type:"GET_PIZZAS_SUCCESS", payload:res.data})

    }
    catch (err) {
        dispatch({type:"GET_PIZZAS_FAILURE", payload:err});
    }
}

export const getVegPizzas =  () => async (dispatch) => {
    dispatch({type:"GET_VEGPIZZAS_REQUEST"})
    try {
        const res = await axios.get("/api/pizzas/getAllPizzas");
        dispatch({type:"GET_VEGPIZZAS_SUCCESS", payload:res.data})

    }
    catch (err) {
        dispatch({type:"GET_PIZZAS_FAILURE", payload:err});
    }
}