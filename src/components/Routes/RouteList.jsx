import { Route, Routes, useRoutes } from "react-router-dom";
import { RequireAuth } from "../RequireAuth/RequireAuthentication";
import { Home } from "../Home/Home";
import Contador from "../Contador/ContadorFunction";
import Input from "../InputFunction/Input";
import ListRender from "../Lista/List";
import ExhibitionCondition from "../Condicional/Condition";
import StyledCondition from "../EstilizacaoCondicional/StyleWithCondition";
import EffectUsed from "../Effect/Effect";
import MovieRequest from "../Request/MoviesRequest";
import JSONPlaceholder from "../JSONPlaceholder/JSONPlaceholder";
import ReducerCounter from "../../Reducer/ReducerUse";
import PeopleList from "../../Reducer/peopleList";
import TailwindComponent from "../ExTailwind/TailwindEx";
import { NotFoundPage404 } from "../NotFound/NotFoundPage";
import { GalleryList } from "../GalleryList/ListGallery";
import { GalleryItems } from "../GalleryItems/ItemsGallery";
import { GalleryItem } from "../GalleryItem/ItemGallery";

export const RouteListUseRoutes = () => {
    return useRoutes(
        [
            {path: '/', element:<Home/>},
            {path: '/contador', 
                element: 
                    <RequireAuth>
                        <Contador />
                    </RequireAuth> 
            },
            {path: '/gallery', element:<GalleryList/>},
            {path: '/gallery/:id', element:<GalleryItems/>},
            {path: '/photo/:id', element:<GalleryItem/>},

            {path: '/input', element:<Input/>},
            {path: '/lista', element:<ListRender/>},
            {path: '/lista-reducer', element:<PeopleList/>},
            {path: '/extailwind', element:<TailwindComponent/>},
            {path: '/exibicao-condicional', element:<ExhibitionCondition/>},
            {path: '/estilização-condicional', element:<StyledCondition/>},
            {path: '/exercicio-use-effect', element:<EffectUsed/>},
            {path: '/movie-request', element:<MovieRequest/>},
            {path: '/jsonplaceholder', element:<JSONPlaceholder/>},
            {path: '/contador-reducer', element:<ReducerCounter/>},
            {path: '/*', element:<NotFoundPage404/>}
        ]
    )
}
// export const RouteListRoutes = () => {
//     return(
//         <Routes>
//             <Route path='/input' element={ <Input /> }/> 
//             <Route path='/lista' element={ <ListRender /> }/>
//             <Route path="/lista-reducer" element={ <PeopleList />}/>
//             <Route path="/extailwind" element={ <TailwindComponent /> }/>
//             <Route path="/exibicao-condicional" element={ <ExhibitionCondition /> }/>
//             <Route path="/estilizacao-condicional" element={ <StyledCondition /> }/>
//             <Route path="/exercicio-use-effect" element={ <EffectUsed /> }/>
//             <Route path="/movie-request" element={ <MovieRequest /> }/>
//             <Route path="/jsonplaceholder" element={ <JSONPlaceholder /> }/>
//             <Route path="/contador-reducer" element={ <ReducerCounter /> }/>
//         </Routes>
//     );
// }
