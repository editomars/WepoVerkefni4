import { GET_ALL_PIZZA_INFO } from '../constants/pizzaConstants';
import fetch from 'isomorphic-fetch';

export const getAllPizzaInfo = () => {
    return dispatch => fetch(`http://localhost:3500/api/pizzas/${pizzaId}`).then(json => json.json()).then(data => dispatch(getAllPizzaInfoSuccess(data)));
};

const getAllPizzaInfoSuccess =(pizzaInfos) => {
    return {
        type: GET_ALL_PIZZA_INFO,
        payload: pizzas
    };
};
