import Contador from "./components/Contador/ContadorFunction";
import Input from "./components/InputFunction/Input";
import ListRender from "./components/Lista/List";
import ExhibitionCondition from "./components/Condicional/Condition";
import StyledCondition from "./components/EstilizacaoCondicional/StyleWithCondition";
import { Container, Botao } from "./components/StyledComponents/StyledComponent";
import EffectUsed from "./components/Effect/Effect";
import MovieRequest from "./components/Request/MoviesRequest";
import JSONPlaceholder from "./components/JSONPlaceholder/JSONPlaceholder";
import Reducer from "./Reducer/ReducerUse";
import usePeopleList  from "./Reducer/peopleList";
import { useState } from "react";
const App = () => {
  const [state, dispatch] = Reducer();

  const [list, dispatchList] = usePeopleList();
  const [nameInput, setNameInput] = useState('');
  const handleAddButton = () => {
      if(nameInput){
          dispatchList({
            type: 'ADD',
            payload: {
              name: nameInput
            }
          })
      }
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
      setNameInput(e.target.value);
  }
  const deletePerson = (id) => {
    dispatchList({
      type: 'DEL',
      payload: { id }
    });
  }
  const handleOrderButton = () => {
    dispatchList({
      type: 'ORDER'
    })
  }
  return (
    <>
      <Contador/>
      <Input/>
      <ListRender/>
      <ExhibitionCondition/>
      <StyledCondition/>
      <Container className="flex flex-col md:flex-row">
        <span>Utilização de Styled Components com tailwind</span>
        <Botao className="mt-10">
          Botão maior
        </Botao>
        <div className="bg-black mt-10">
          <Botao small className="font-bold">
            Botão menor
          </Botao>
        </div>
      </Container>
      <EffectUsed />
      <MovieRequest />
      <JSONPlaceholder />
      <div>
            <h1>Contagem: {state.count}</h1>
            <button onClick={() => dispatch({type: 'ADD'})}>
                Adicionar
            </button>
            <button onClick={() =>dispatch({type: 'DEL'})}>
                Remover
            </button>
            <button onClick={() => dispatch({type: 'RESET'})}>
                Resetar
            </button>
        </div>
      <div>
        <h1>Lista de pessoas</h1>
        <input type="text" value={nameInput} onChange={(handleInputChange)}/>
        <button onClick={handleAddButton}>Adicionar</button>
        <button onClick={handleOrderButton}>Ordenar</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => deletePerson(item.id)}>DELETAR</button>
          </li>
        ))}
      </ul>
    </>
    

  );
  }
export default App;