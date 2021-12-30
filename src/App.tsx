import Contador from "./components/Contador/ContadorFunction";
import Input from "./components/InputFunction/Input";
import ListRender from "./components/Lista/List";
import ExhibitionCondition from "./components/Condicional/Condition";
import StyledCondition from "./components/EstilizacaoCondicional/StyleWithCondition";
const App = () => {
  return (
    <>
      <Contador/>
      <Input/>
      <ListRender/>
      <ExhibitionCondition/>
      <StyledCondition/>
    </>
    

  );
  }
export default App;