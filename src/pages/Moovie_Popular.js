import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function Moovie_Popular() {
  const [list, setList] = useState([]);
  const [filterList, setfilterList] = useState([]);

  async function getData() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=85f25a9951a9b561a28bb8b4903b3260`
    );

    console.log(response.data.results);
    setList(response.data.results);
    setfilterList(response.data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App-header">
      {filterList.map((moovie, index) => {
        return (
          <div key={moovie.title}>
            <div className="size-img">
              <div className="card">
                <a href={`/moovie/${index}`} target="_bank">
                  <img
                    className="size-moovie-popular-page"
                    src={`https://image.tmdb.org/t/p/original/${moovie.backdrop_path}`}
                  ></img>
                </a>
                <div className="content">
                  <p>{moovie.overview}</p>
                </div>
              </div>
            </div>
            <button>Titre du Film : {moovie.title}</button>
            <div style={{ padding: "10px" }}></div>
            {/* <Link className="pos-url" to={`/moovie/${index + 1}`}> {moovie.title}</Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default Moovie_Popular;
