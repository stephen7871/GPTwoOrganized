import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

function Film(){
    let[film, setFilm] = useState([]);

    let navigate = useNavigate();
    let params = useParams();

    useEffect(async () =>  {
        let fetchedFilm = await fetch(`http://localhost:5000/films/${params.id}`);
        fetchedFilm.planets = await fetch(`http://localhost:5000/films/${params.id}/planets`);
        fetchedFilm.characters = await fetch (`http://localhost:5000/films/${params.id}/characters`)
        console.log(fetchedFilm);
        setFilm(fetchedFilm);
    },  []);

    function goToPlanet(id){
        navigate(`/planets/${id}`);
    }

    function goToCharacter(id){
        navigate(`/characters/${id}`);
    }


    return(
          <h1>film page</h1>);
    
          }
          export default Film;