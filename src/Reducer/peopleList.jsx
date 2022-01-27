import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialState = [];
const reducerList = (state, action) => {
    switch(action.type){
        case 'ADD':
            state.push({
                id: uuidv4(),
                name: action.payload?.name
            });
        break;
        case 'DEL':
            if(action.payload?.id){
                state = state.filter(item => item.id !==action.payload?.id);
            }
        break;
        case 'ORDER':
            state = state.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;
    }
    return state;
}
export const usePeopleList = () => {


}