import { useEffect, useState } from "react";

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
        <div>
            {loading &&
                <div>
                    Carregando...
                </div>
            }
            <div>
                {!loading && movies.length > 0 &&
                    <div> 
                        total de Filmes: {movies.length} 
                    </div>
                }
            </div>
            <div className="grid grid-cols-6 gap-3">
                {movies.map((item, index) =>(
                    <div key={index}>
                        <img src={item.avatar} className="w-32" alt=""/>
                        {item.titulo}
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