import React from "react";
import "./Style.css"

const ListRender = () => {
  let list = [
    {
      name: "Paulo",
      age: 31,
    },
    {
      name: "Marcos",
      age: 45,
    },
    {
      name: "Lucas",
      age: 18,
    },
    {
      name: "Junior",
      age: 64,
    },
    {
      name: "Jose",
      age: 28,
    }
  ];
  return (
    <>
      <hr />
      <div className="cont-format input">
        <h2>Exibição de lista</h2>
        <ul className="list-ex1">
          {list.map((item, key) => (
            <li className="list-item1" key={key}>{`${item.name} - ${item.age} anos`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ListRender;
