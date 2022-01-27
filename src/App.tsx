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
const App = () => {
  const [state, dispatch] = Reducer();
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
    );

    </>
    

  );
  }
export default App;