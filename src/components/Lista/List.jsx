import { useSearchParams } from "react-router-dom";
import listItems from "./ListItems";
import "./Style.css"

const ListRender = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setFilter = (filter) => {
    searchParams.set('filter', filter);
    setSearchParams(searchParams);
  }
  const setOrder = (order) => {
    searchParams.set('order', order);
    setSearchParams(searchParams);
  }
  return (
    <>
      <hr />
      <div className="cont-format input">
        <h2>List exhibition</h2>
        <h3>Click(check the URL): {searchParams.get('filter')}</h3>
        <h3>Order(check the URL): {searchParams.get('order')}</h3>
        <button onClick={()=> setOrder('asc')}>A-Z</button>
        <button onClick={()=> setOrder('desc')}>Z-A</button>
        <ul className="list-ex1">
          {listItems.map((item, key) => (
            <li className="list-item1" key={key} onClick={()=> setFilter(`${item.name}`)} style={{cursor: 'pointer'}}> {`${item.name} - ${item.age} anos`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ListRender;
