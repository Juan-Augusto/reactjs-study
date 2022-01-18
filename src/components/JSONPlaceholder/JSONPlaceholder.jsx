import { useEffect, useState } from "react";

const JSONPlaceholder = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');
    useEffect(() =>{
        loadPosts();
    }, []);
    const loadPosts = async () => {
        setLoading(true);
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        setLoading(false);
        setPosts(json);
    };
    const handleAddTitleChange = ( e ) => {
        setAddTitleText(e.target.value);
    };
    const handleAddBodyChange = ( e ) => {
        setAddBodyText(e.target.value);
    };
    const handleAddClick = async () => {
        if(addBodyText && addTitleText){
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: addTitleText,
                body: addBodyText,
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let json = await response.json();

            if(json.id){
                alert('Post adicionado com sucesso!')
            }else{
                alert('Ocorreu algum erro :(')
            }
        } else{
            alert("Preencha os dados!")
        }
    }
    return(
        <div>
            {loading &&
                <div>
                    Carregando...
                </div>
            }
            <fieldset className="border-2 mb-3 p-3">
                <legend>
                    <h2>Adicionar um novo post</h2>
                </legend>

                    <input 
                        type="text" 
                        onChange={handleAddTitleChange}
                        placeholder="Digite um título" 
                        className="block" 
                        value={addTitleText}
                        />
                    <textarea
                        onChange={handleAddBodyChange}
                        className="block border">
                        {addBodyText}
                    </textarea>
                    <button className="block" onClick={handleAddClick}>
                        Adicionar
                    </button>
            </fieldset>
            <div>
                {!loading && posts.length > 0 &&
                    <div className="my-10"> 
                        <h1>Total de Posts: {posts.length}</h1>
                    </div>
                }
            </div>
            <div>
                {posts.map((item, index) =>(
                    <div key={index} 
                        style={{
                            border: '1px solid black', 
                            borderRadius: '10px' , 
                            marginBottom: '10px', 
                            padding: '10px'}}>

                        <h4 className="font-bold">
                            {item.title}
                        </h4>
                        <small>#{item.id} - Usuário: {item.userId}</small>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
            {!loading && posts.length === 0 &&
                <div>
                    <h1>Não há posts para serem exibidos.</h1>
                </div>
            }
        </div>
    );

}
export default JSONPlaceholder;