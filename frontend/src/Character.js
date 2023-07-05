import React, {useState, useEffect} from "react";
import {useParams, useNavigate } from "react-router-dom";

function Character(){
    let [character, setCharacter] = useState([]);

    let navigate = useNavigate();
    let params = useParams();
    let url = "/api";
    async function getCharacter() {
        let fetchedCharacter = await fetchCharacter([params.id]);
        fetchedCharacter.homeworld = await fetchHomeworld(fetchedCharacter);
        fetchedCharacter.films = await fetchFilms();
        console.log(fetchedCharacter);
        setCharacter(fetchedCharacter);
    }  

    async function fetchCharacter(){
        let result = await fetch(`${url}/characters/${params.id}`);
        return result.json();
    }

    const fetchHomeworld = async (fetchCharacter) => {
        const planet  = await fetch(`${url}/planets/${fetchedCharacter.homeworld}`)
        .then((res) => res.json());
        return planet;
    };

    const fetchFilms = async () => {
        let ret = await fetch(`${url}/characters/${params.id}/films`)
        .then((res) => res.json() );
        return ret;
    };

    useEffect(() => getCharacter, []);

    function handlePlanetClick(id){
        navigate(`/planets/${id}`);
    }

    function handleFilmClick(id){
        navigate(`/films/${id}`);
    }

} 