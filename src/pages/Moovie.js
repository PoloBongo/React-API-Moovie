import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Moovie = () => {
  const { id } = useParams();
  const [moovie, setMoovie] = useState("null");

  async function getData() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=85f25a9951a9b561a28bb8b4903b3260`
    );
    console.log("newres", response.data.results);
    console.log(response.data.results);
    setMoovie(response.data.results);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>Mon nom est {moovie[id]?.original_title}</p>
      <p>Date de Sortie : {moovie[id]?.release_date}</p>
      <Link to="/popular_moovie">Revenir à la Page des Films Populaire</Link>
    </div>
  );
};

export default Moovie;
