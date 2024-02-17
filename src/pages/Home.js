import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function Home() {
  const [list, setListMoovieCategoryAction] = useState([]);
  const [filterListMoovieCategoryAction, setfilterListMoovieCategoryAction] =
    useState([]);
  const [listcategory2, setListMoovieCategoryAventure] = useState([]);
  const [
    filterListMoovieCategoryAventure,
    setfilterListMoovieCategoryAventure,
  ] = useState([]);
  const [listcategory3, setListMoovieCategoryAnimation] = useState([]);
  const [
    filterListMoovieCategoryAnimation,
    setfilterListMoovieCategoryAnimation,
  ] = useState([]);

  async function getData() {
    const response = await axios.get(
      `https://api.themoviedb.org/4/list/3?page=2&api_key=85f25a9951a9b561a28bb8b4903b3260`
    );

    console.log(response.data.results);
    setListMoovieCategoryAction(response.data.results);
    setfilterListMoovieCategoryAction(response.data.results);
  }

  async function getData_action() {
    const res = await axios.get(
      `https://api.themoviedb.org/4/list/10?page=1&api_key=85f25a9951a9b561a28bb8b4903b3260`
    );

    console.log(res.data.results);
    setListMoovieCategoryAventure(res.data.results);
    setfilterListMoovieCategoryAventure(res.data.results);
  }

  async function getData_animation() {
    const res = await axios.get(
      `https://api.themoviedb.org/4/list/10?page=2&api_key=85f25a9951a9b561a28bb8b4903b3260`
    );

    console.log(res.data.results);
    setListMoovieCategoryAnimation(res.data.results);
    setfilterListMoovieCategoryAnimation(res.data.results);
  }

  useEffect(() => {
    getData();
    getData_action();
    getData_animation();
  }, []);

  return (
    <div className="App-header" style={{ overflow: "hidden" }}>
      <div className="category-container">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        ></link>
        <div className="category-action">
          <h1>Catégorie : Action</h1>
          {filterListMoovieCategoryAction.map((moovie_home, index) => {
            if (
              moovie_home.genre_ids[1] === 28 ||
              moovie_home.genre_ids[2] === 28
            ) {
              return (
                <div key={moovie_home.id}>
                  <div className="size-img-category">
                    <div className="card">
                      <a
                        href={`/moovie_catergory_action/${index}`}
                        target="_bank"
                      >
                        <img
                          alt=""
                          src={`https://image.tmdb.org/t/p/original/${moovie_home.poster_path}`}
                        ></img>
                      </a>
                      <div className="content">
                        <i className="fa-solid">
                          <pre style={{ color: "yellow" }}>
                            Date de Sortie : {moovie_home.release_date}{" "}
                          </pre>{" "}
                        </i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <span> 4/5</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "10px" }}></div>
                </div>
              );
            } else if (moovie_home.genre_ids[0] === 28) {
              return (
                <div key={moovie_home.id}>
                  <div className="size-img-category">
                    <div className="card">
                      <a
                        href={`/moovie_catergory_action/${index}`}
                        target="_bank"
                      >
                        <img
                          alt=""
                          src={`https://image.tmdb.org/t/p/original/${moovie_home.poster_path}`}
                        ></img>
                      </a>
                      <div className="content">
                        <i className="fa-solid">
                          <pre style={{ color: "yellow" }}>
                            Date de Sortie : {moovie_home.release_date}{" "}
                          </pre>{" "}
                        </i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <span> 3/5</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "10px" }}></div>
                </div>
              );
            }
          })}
        </div>
        <div className="category-aventure">
          <h1>Film Pouplaire</h1>
          <a href="./popular_moovie">
            <button className="size-img-category">
              Voir les films populaire
            </button>
          </a>
        </div>
        <div className="category-animation">
          <h1>Catégorie : Animation</h1>
          {filterListMoovieCategoryAnimation.map(
            (moovie_category_animation, index) => {
              if (
                moovie_category_animation.genre_ids[0] === 16 ||
                moovie_category_animation.genre_ids[2] === 16
              ) {
                return (
                  <div key={moovie_category_animation.id}>
                    <div className="size-img-category">
                      <div className="card">
                        <a
                          href={`/moovie_category_animation/${index}`}
                          target="_bank"
                        >
                          <img
                            alt=""
                            src={`https://image.tmdb.org/t/p/original/${moovie_category_animation.poster_path}`}
                          ></img>
                        </a>
                        <div className="content">
                          <i className="fa-solid">
                            <pre style={{ color: "yellow" }}>
                              Date de Sortie :{" "}
                              {moovie_category_animation.release_date}{" "}
                            </pre>{" "}
                          </i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <span> 4/5</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}></div>
                  </div>
                );
              }
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
