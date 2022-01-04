import Contador from "./components/Contador/ContadorFunction";
import Input from "./components/InputFunction/Input";
import ListRender from "./components/Lista/List";
import ExhibitionCondition from "./components/Condicional/Condition";
import StyledCondition from "./components/EstilizacaoCondicional/StyleWithCondition";
import { Container, Botao } from "./components/StyledComponents/StyledComponent";
const App = () => {
  return (
    <>
      <Contador/>
      <Input/>
      <ListRender/>
      <ExhibitionCondition/>
      <StyledCondition/>
      <Container>
        <h1>Utilização de Styled Components</h1>
        <Botao>
          Texto do botao
        </Botao>
      </Container>

    </>
    

  );
  }
export default App;