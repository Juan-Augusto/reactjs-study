import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialState = [];
const reducerList = (state, action) => {
    switch(action.type){
        case 'ADD':
            if(action.payload?.name){
                const newState = [...state]
                state.push({
                    id: uuidv4(),
                    name: action.payload?.name
                });
                return newState;
            }
        break;
        case 'DEL':
            if(action.payload?.id){
                let newState = [...state];
                newState = newState.filter(item => item.id !==action.payload?.id);
                return newState;
            }
        break;
        case 'ORDER':
            let newState = [...state];
            state = state.sort((a, b) => (a.name > b.name) ? 1 : -1);
            return newState;
        break;
    }
    return state;
}

const usePeopleList = () => {

    return (useReducer(reducerList, initialState));

}
export default usePeopleList;