import { useEffect, useState } from "react";

const MovieRequest = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        loadMovies();
    }, []);
    const loadMovies = () => {
        fetch('https://api.b7web.com.br/cinema/').then((response) => {
            return response.json();
        })
        .then((json) => {
            setMovies(json);
        })
    }
    return(
        <div>
            <div>
                total de Filmes: {movies.length} 
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