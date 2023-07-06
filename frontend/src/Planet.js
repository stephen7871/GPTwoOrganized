import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

function Planets(){
    let[planet, setPlanet] = useState([]);

    let navigate = useNavigate();
    let params = useParams();
    async function getPlanet() {
        let fetchedPlanet = await fetch(`http://localhost:5000/planets/${params.id}`);
        fetchedPlanet.films = await fetchFilms();
        fetchedPlanet.characters = await fetchCharacters();
        console.log(fetchedPlanet);
        setFilm(fetchedPlanet);
    }
    

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