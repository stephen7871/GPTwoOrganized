import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

function Films(){
    let[film, setFilm] = useState([]);

    let navigate = useNavigate();
    let params = useParams();
    let url = "/api";
    async function getFilm() {
        let fetchedFilm = await fetchFilm([params.id]);
        fetchedFilm.planets = await fetchPlanets();
        fetchedFilm.characters = await fetchCharacters();
        console.log(fetchedFilm);
        setFilm(fetchedFilm);
    }
    
    async function fetchFilm() {
        let result = await fetch(`${url}/films/${params.id}`);
        return result.json();
    }

    const fetchCharacters = async () => {
        let ret = await fetch (`${url}/films/${params.id}/characters`)
        .then((res) => res.json());
        return ret;
    };

    const fetchPlanets = async () => {
        let ret = await fetch(`${url}/films/${params.id}/planets`).then((res) => res.json());
        return ret;
    };

    useEffect(() => getFilm, []);

    function handlePlanetClick(id){
        navigate(`/planets/${id}`);
    }

    function handleCharacterClick(id){
        navigate(`/characters/${id}`);
    }

}