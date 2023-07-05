import axios from 'axios';
import {useEffect,useState} from 'react'


function Home() {
    const [characters, setCharcters] = useState([]);
    const [matchingCharacters, setMatchingCharacters] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:5000/characters')
        .then((res) => {
          setCharcters(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log('Error from ShowBookList');
        });
    }, []);


    // const renderCharacters = (characters) => {
    //     const divs = characters.map(character => {
    //       const el = document.createElement('div');
    //       el.addEventListener('click', () => goToCharacterPage(character.id));
    //       el.textContent = character.name;
    //       return el;
    //     })
    //     charactersList.replaceChildren(...divs) 
    //     // const divs = characters.map(character => {
    //     //   const el = document.createElement('div');
    //     //   el.addEventListener('click', () => goToCharacterPage(character.id));
    //     //   el.textContent = character.name;
    //     //   return el;
    //     // })
    //     // charactersList.replaceChildren(...divs)
    //   }

    const filterCharactersOnChange = (e) => {
        const searchString = e.value;
        const re = new RegExp(searchString, "i");
        setMatchingCharacters(characters.filter(character => re.test(character.name))) 
        // renderCharacters(matchingCharacters);
      }



return(<body>
    <link rel="stylesheet" href="site.css"></link>
    <div>
      <h1>Star Wars Universe Lookup</h1>
      <label for="searchString">Who you looking for? <span class="small">(Regular expressions are cool
          here)</span></label>
          <input id="searchString"  onChange={e => filterCharactersOnChange(e) } autocomplete="off" />
      {/* <input id="searchString" oninput="filterCharacters()" autocomplete="off" /> */}
    </div>
    
    <section id="charactersList">
        {characters.map(function(character){
                return <li key={character.id}>{character.name}</li>
        })
    }
            
    </section>
  </body>);

      }
    
    export default Home;

//   return(<>
//     {characters.map(function(character) {
     
//        return(
      
//           <div key={character.id} >
//         {character.id}</div>
//        )
//     })}
//     </>
//   );
// };
     
  