import { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
      break;
    case "DEL":
        return { ...state, count: state.count - 1 };
      break;
    case "RESET":
      return initialState;
      break;
  }
  return state;
};

const useReducerCounter = () => {
  return (
    useReducer(reducerFunction, initialState)
  );
};
const ReducerCounter = () => {
    const [state, dispatch] = useReducerCounter();
    return (
        <div className="flex justify-center flex-col items-center">
            <h1>Contagem: {state.count}</h1>
            <button onClick={() => dispatch({ type: "ADD" })}>Adicionar</button>
            <button onClick={() => dispatch({ type: "DEL" })}>Remover</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Resetar</button>
        </div>
    );  
}
export default ReducerCounter;

