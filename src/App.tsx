import Contador from "./components/Contador/ContadorFunction";
import Input from "./components/InputFunction/Input";
import ListRender from "./components/Lista/List";
import ExhibitionCondition from "./components/Condicional/Condition";
import StyledCondition from "./components/EstilizacaoCondicional/StyleWithCondition";
import { Container, Botao } from "./components/StyledComponents/StyledComponent";
import EffectUsed from "./components/Effect/Effect";
import MovieRequest from "./components/Request/MoviesRequest";
import JSONPlaceholder from "./components/JSONPlaceholder/JSONPlaceholder";
const App = () => {
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
      <MovieRequest/>
      <JSONPlaceholder/>

    </>
    

  );
  }
export default App;