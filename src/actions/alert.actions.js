import { alertConstants } from '../constants';
// import { toast } from 'react-toastify';

function success(message) {
    // toast.success(message);
  
    return dispatch => {
        dispatch({ type: alertConstants.SUCCESS, message });
        setTimeout(() => {
            dispatch(clear());
        }, 5000); // 5000 milisegundos = 5 segundos
    };
}

function error(message) {
    // toast.error(message);
    return dispatch => {
        dispatch({ type: alertConstants.ERROR, message });
        setTimeout(() => {
            dispatch(clear());
        }, 5000); // 5000 milisegundos = 5 segundos
    };
}

function clear() {
    return { type: alertConstants.CLEAR };
}

export const alertActions = {
    success,
    error,
    clear
};