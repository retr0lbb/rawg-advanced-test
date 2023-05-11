import React, { useState, useEffect } from 'react';


export default (props) =>{



    const [jogos, setJogos] = useState([]);


    const API_KEY = "9fe9df9f628245ccbef2da5be661f072"
    const URL_ENDPOINT = "https://api.rawg.io/api/games"

    const queryParams = {
        key: API_KEY,
        page: props.page,
        page_size:'-rating',
        platforms: '18,1,7'
    };

    const url = `${URL_ENDPOINT}?${new URLSearchParams(queryParams)}`

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setJogos(data.results);
          })
          .catch(e => {
            console.log(e);
          });
      }, [url]);

      console.log(jogos)

      return(
        <>
        {jogos.map((jogo, index) => (
        <img key={index} src={jogo.background_image
        }></img>
      ))}
        </>
      )
    

    
}