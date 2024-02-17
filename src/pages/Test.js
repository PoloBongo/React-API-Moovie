import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "../App.css";
import { v4 as uuidv4 } from "uuid";

function Test() {
  const { id } = useParams();
  const [list, setListMoovie] = useState([]);
  const [filterListMoovie, setfilterListMoovie] = useState([]);
  const [list2, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  async function getData() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=85f25a9951a9b561a28bb8b4903b3260`
    );

    console.log(response.data.results);
    setListMoovie(response.data.results);
    setfilterListMoovie(response.data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("ici", list[0]);
    setList(list[0]);
    localStorage.setItem("list", JSON.stringify(list[0]));
  }

  return (
    <div className="App-header">
      {filterListMoovie.map((moovie, index) => {
        return (
          <div key={moovie.id}>
            <a href={`/moovie/${index}`} target="_bank">
              <img
                style={{ width: "30%" }}
                src={`https://image.tmdb.org/t/p/original/${moovie.poster_path}`}
              ></img>
            </a>

            <form onSubmit={handleSubmit}>
              <a href={`/moovie/${index}`}>
                <button style={{ cursor: "pointer" }} type="submit">
                  Ajouter à la liste
                </button>
              </a>
            </form>
          </div>
        );
      })}
      {list.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
}

export default Test;
