import { useEffect, useState } from "react";
import './StyleMovie.css';
const MovieRequest = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        loadMovies();
    }, []);
    // const loadMovies = () => {
    //     fetch('https://api.b7web.com.br/cinema/').then((response) => {
    //         return response.json();
    //     })
    //     .then((json) => {
    //         setMovies(json);
    //     })
    //      .catch((e) => {
    //     setLoading(false);
    //     setMovies([]);
    //     console.error(e);
    //      })
    // }
    const loadMovies = async () => {
        try{
            setLoading(true);
            let response = await fetch('https://api.b7web.com.br/cinema/');
            let json = await response.json();
            setLoading(false);
            setMovies(json);
        }catch(e){
            setLoading(false);
            setMovies([]);
            console.error(e);

        }
    }
    
    return(
        <div  className="p-5" style={{backgroundColor: '#4F4F4F'}}>
            {loading &&
                <div>
                    Carregando...
                </div>
            }
            <div>
                {!loading && movies.length > 0 &&
                    <div className="flex justify-center" style={{color: '#FFFFFF', fontFamily: 'Source Code Pro'}}> 
                        <h1> Total de Filmes em cartaz: {movies.length} </h1>
                    </div>
                }
            </div>
            <div className="grid grid-cols-6 gap-3 ">
                {movies.map((item, index) =>(
                    <div className="movie-frame movie-title flex flex-col text-center" key={index}>
                        <img src={item.avatar} alt=""/>
                        <h2>{item.titulo}</h2>
                    </div>
                ))}
            </div>
            {!loading && movies.length === 0 &&
                <div>
                    <h1>Algo deu errado, tente novamente mais tarde.</h1>
                </div>
            }
        </div>
    );

}
export default MovieRequest;