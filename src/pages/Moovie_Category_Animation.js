import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Moovie_Category_Animation = () => {
  const { id } = useParams();
  const [moovie, setMoovie] = useState("null");

  async function getData() {
    const response = await axios.get(
      `https://api.themoviedb.org/4/list/10?page=2&api_key=85f25a9951a9b561a28bb8b4903b3260`
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
      <p>Mon nom est {moovie[id]?.title}</p>
      <p>{moovie[id]?.overview}</p>
      <p>Date de Sortie : {moovie[id]?.release_date}</p>
      <Link to="/">Back Home</Link> #Moovie
    </div>
  );
};

export default Moovie_Category_Animation;
