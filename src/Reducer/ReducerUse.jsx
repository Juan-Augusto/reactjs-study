import { useReducer } from "react";

const initialState = { 
    count: 0 
};
const reducerFunction = (state, action) => {
    switch(action.type){
        case 'ADD':
            return {...state, count: state.count + 1};
        break;
        case 'DEL':
            if(state.count > 0){
                return {...state, count: state.count - 1};
            }
        break;
        case 'RESET':
            return initialState;
        break;
    }
    return state;
}

const Reducer = () => {
    return useReducer(reducerFunction, initialState);
        
};

export default Reducer; 