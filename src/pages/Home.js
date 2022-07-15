import React, { useEffect, useState } from "react";
import { getItems } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { llueve } from "../utils";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const [pageActual, setPageActual] = useState(1);
  const itemsPorPage = 10;
  const numerosDePagina = [];

  for (let i = 1; i < Math.ceil(items.results?.length / itemsPorPage); i++) {
    numerosDePagina.push(i);
  }

  var ultIdx = pageActual * itemsPorPage;
  var primerIdx = ultIdx - itemsPorPage;
  var itemsActual = items.results?.slice(primerIdx, ultIdx);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleSetPage = (num) => {
    setPageActual(num);
  };

  return (
    <div className="table-container">
      <table border="1">
        <tr className="table-header">
          <th>_id</th>
          <th>city id</th>
          <th>name</th>
          <th>state</th>
          <th>propability of Precip</th>
          <th>relative humidity</th>
          <th>Last report time</th>
          <th>LLueve</th>
        </tr>
        <tbody>
          {itemsActual &&
            itemsActual.map((item) => (
              <tr key={item._id}>
                <td>
                  <Link to={`/details/${item._id}`}>{item._id}</Link>
                </td>
                <td>{item.cityid}</td>
                <td>{item.name}</td>
                <td>{item.state}</td>
                <td>{item.probabilityofprecip}</td>
                <td>{item.relativehumidity}</td>
                <td>{item["date-insert"].split("T")[0]}</td>
                <td>
                  {llueve(item.probabilityofprecip, item.relativehumidity)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="page-numbers-container">
        {numerosDePagina.map((num) => (
          <button onClick={() => handleSetPage(num)}>{num}</button>
        ))}
      </div>
    </div>
  );
};

export default Home;
