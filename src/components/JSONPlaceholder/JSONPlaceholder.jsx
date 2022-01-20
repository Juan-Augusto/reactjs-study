import { useEffect, useState } from "react";
import { PostForm } from "./PostForm";
import { PostItem } from "./PostItem";
import { api } from "../../api";
const JSONPlaceholder = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPosts(json);
  };
  const handleAddPost = async (title, body) => {
    let json = await api.addNewPost(title, body, 1);
    if (json.id) {
      alert("Post adicionado com sucesso!");
    } else {
      alert("Ocorreu algum erro :(");
    }
  };
  return (
    <div>
      {loading && <div>Carregando...</div>}
      <PostForm onAdd={handleAddPost} />
      <div>
        {!loading && posts.length > 0 && (
          <div className="my-10">
            <h1>Total de Posts: {posts.length}</h1>
          </div>
        )}
      </div>
      <div>
        {posts.map((item, index) => (
          <PostItem data={item} />
        ))}
      </div>
      {!loading && posts.length === 0 && (
        <div>
          <h1>Não há posts para serem exibidos.</h1>
        </div>
      )}
    </div>
  );
};
export default JSONPlaceholder;
