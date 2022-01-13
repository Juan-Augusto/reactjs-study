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
    // }
    const loadMovies = async () => {
        setLoading(true);
        let response = await fetch('https://api.b7web.com.br/cinema/');
        let json = await response.json();
        setLoading(false);
        setMovies(json);
    }
    
    return(
        <div>

            {loading &&
                <div>
                    Carregando...
                </div>
            }
            <div>
                {!loading &&
                    <div> 
                        total de Filmes: {movies.length} 
                    </div>
                }
            </div>
            <div className="grid grid-cols-6 gap-3">
                {movies.map((item, index) =>(
                    <div key={index}>
                        <img src={item.avatar} className="w-32"/>
                        {item.titulo}
                    </div>
                ))}
            </div>
        </div>
    );

}
export default MovieRequest;