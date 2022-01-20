import { useState } from "react";

export const PostForm = ({ onAdd }) => {
  const [addTitleText, setAddTitleText] = useState("");
  const [addBodyText, setAddBodyText] = useState("");

  const handleAddTitleChange = (e) => {
    setAddTitleText(e.target.value);
  };
  const handleAddBodyChange = (e) => {
    setAddBodyText(e.target.value);
  };
  const handleAddClick = () => {
    if(addBodyText && addTitleText){
        onAdd(addTitleText, addBodyText);
    }else{
        alert("Preencha os dados");
    }
  }
  return (
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
      <textarea onChange={handleAddBodyChange} className="block border">
        {addBodyText}
      </textarea>
      <button className="block" onClick={handleAddClick}>
        Adicionar
      </button>
    </fieldset>
  );
};
