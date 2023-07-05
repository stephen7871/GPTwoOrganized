import axios from 'axios';
import {useEffect,useState} from 'react'


function Characters(props) {
    const [character, setCharcter] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/characters/${props.id}`,
        {
          method: 'GET',
          body: JSON.stringify({id: e.id}),
          headers:
          {"Content-Type": "application/json"}
  
        }
        )
        .then((res) => {
            setCharcter(res.data);
        })
        .catch((err) => {
          console.log('Error from ShowBookList');
        });
    }, []);



    



return(<div>character{props.id}</div>)
  

     
}
    export default Characters;

