import { useReducer } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = [];
const reducerList = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (action.payload?.name) {
        const newState = [...state];
        state.push({
          id: uuidv4(),
          name: action.payload?.name,
        });
        return newState;
      }
      break;
    case "DEL":
      if (action.payload?.id) {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== action.payload?.id);
        return newState;
      }
      break;
    case "ORDER":
      let newState = [...state];
      state = state.sort((a, b) => (a.name > b.name ? 1 : -1));
      return newState;
      break;
  }
  return state;
};
const usePeopleList = () => {
  return useReducer(reducerList, initialState);
};

const PeopleList = () => {
  const [list, dispatchList] = usePeopleList();
  const [nameInput, setNameInput] = useState("");
  const handleAddButton = () => {
    if (nameInput) {
      dispatchList({
        type: "ADD",
        payload: {
          name: nameInput,
        },
      });
    }
  };
  const handleInputChange = (e) => {
    setNameInput(e.target.value);
  };
  const deletePerson = (id) => {
    dispatchList({
      type: "DEL",
      payload: { id },
    });
  };
  const handleOrderButton = () => {
    dispatchList({
      type: "ORDER",
    });
  };
  return (
    <div>
      <div className="flex justify-center">
        <h1>Lista de pessoas</h1>
      </div>
      <div className="flex justify-center">
        <input className="p-4" type="text" value={nameInput} onChange={handleInputChange} />
        <button onClick={handleAddButton}>Adicionar</button>
        <button onClick={handleOrderButton}>Ordenar</button>
      </div>
      <div className="flex justify-center">
        <ul className="flex items-center flex-col">
          {list.map((item, index) => (
            <li key={index}>
              {item.name}
              <button onClick={() => deletePerson(item.id)}>DELETAR</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PeopleList;
