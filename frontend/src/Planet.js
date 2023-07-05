import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

function Planets(){
    let[planet, setPlanet] = useState([]);

    let navigate = useNavigate();
    let params = useParams();
    let url = "/localhost:5000";
    async function getPlanet() {
        let fetchedPlanet = await fetchPlanet([params.id]);
        fetchedPlanet.films = await fetchFilms();
        fetchedPlanet.characters = await fetchCharacters();
        console.log(fetchedPlanet);
        setFilm(fetchedPlanet);
    }
    
    async function fetchPlanet() {
        let result = await fetch(`${url}/planets/${params.id}`);
        return result.json();
    }

    const fetchCharacters = async () => {
        let ret = await fetch (`${url}/planets/${params.id}/characters`)
        .then((res) => res.json());
        return ret;
    };

    const fetchFilms = async () => {
        let ret = await fetch(`${url}/planets/${params.id}/planets`).then((res) => res.json());
        return ret;
    };

    useEffect(() => getPlanet, []);

    function handleFilmClick(id){
        navigate(`/films/${id}`);
    }

    function handleCharacterClick(id){
        navigate(`/characters/${id}`);
    }

}