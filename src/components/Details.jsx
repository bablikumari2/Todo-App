import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

export const Details = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();

  const getData = () => {
    fetch(`http://localhost:3002/todos/${id}`)
      .then((d) => d.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  };
  return (
    <div id="info">
      <p id="title">
        📌 <b> Title : </b> {data.title}
      </p>
      <p id="description">
        ✨ <b> Description : </b> {data.description}
      </p>
      <p id="status">
        ✨ <b> Status : </b> {data.status ? "Done" : "Not Done"}
      </p>
    </div>
  );
};