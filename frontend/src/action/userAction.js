import axios from "axios";

export const registerUser = (user) => async dispatch => {
    dispatch({type:'USER_REGISTER_REQUEST'})
    try{
        const res = await axios.post('api/users/register', user)
        dispatch({type:'USER_REGISTER_SUCCESS'})
        window.location.href="/login"
    }
    catch (err) {
        console.log(err.response.data)
        dispatch({type:'USER_REGISTER_FAILURE', payload:err})
    }
};

export const loginUser = (user) => async (dispatch) => {
    dispatch({type:'USER_LOGIN_REQUEST'});
    try{
        const response = await axios.post('/api/users/login', user);
        dispatch({type:'USER_LOGIN_SUCCESS', payload:response.data});
        localStorage.setItem('currentUser',JSON.stringify(response.data));
        window.location.href="/";
    }
    catch (err) {
        dispatch({type: "USER_LOGIN_FAILURE", payload:err})
    }
} 

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    window.location.href="/login"
};