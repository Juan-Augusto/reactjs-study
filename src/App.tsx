import { Routes, Route } from "react-router-dom";
import Contador from "./components/Contador/ContadorFunction";
import Input from "./components/InputFunction/Input";
import ListRender from "./components/Lista/List";
import ExhibitionCondition from "./components/Condicional/Condition";
import StyledCondition from "./components/EstilizacaoCondicional/StyleWithCondition";
import EffectUsed from "./components/Effect/Effect";
import MovieRequest from "./components/Request/MoviesRequest";
import JSONPlaceholder from "./components/JSONPlaceholder/JSONPlaceholder";
import ReducerCounter from "./Reducer/ReducerUse";
import PeopleList from "./Reducer/peopleList";
import TailwindComponent from "./components/ExTailwind/TailwindEx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Contador /> } />
        <Route path='/exercicio-input' element={ <Input /> }/>
        <Route path='/exercicio-lista' element={ <ListRender /> }/>
        <Route path="/exercicio-lista-reducer" element={ <PeopleList />}/>
        <Route path="/extailwind" element={ <TailwindComponent /> }/>
        <Route path="/exibicao-condicional" element={ <ExhibitionCondition /> }/>
        <Route path="/estilizacao-condicional" element={ <StyledCondition /> }/>
        <Route path="/exercicio-use-effect" element={ <EffectUsed /> }/>
        <Route path="/movie-request" element={ <MovieRequest /> }/>
        <Route path="/jsonplaceholder" element={ <JSONPlaceholder /> }/>
        <Route path="/contador-reducer" element={ <ReducerCounter /> }/>
      </Routes>
    </>
  );
};
export default App;
