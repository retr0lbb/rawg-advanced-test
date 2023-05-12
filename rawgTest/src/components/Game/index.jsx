import React, { useState, useEffect } from 'react';
import Games from '../Games';
import './index.css'


export default (props) =>{

  function searchManager(page, pageCount){
    if(!page>=pageCount){

    }
  }



    const [jogos, setJogos] = useState([]);
    const pesquisa = ''
    const [pageCount ,setPageCount] = useState([]);


    const API_KEY = "9fe9df9f628245ccbef2da5be661f072"
    const URL_ENDPOINT = "https://api.rawg.io/api/games"

    const queryParams = {
        key: API_KEY,
        page: props.page,
        page_size:'-rating',
        platforms: '18,1,7',
        search: `${pesquisa}`
    };

    const url = `${URL_ENDPOINT}?${new URLSearchParams(queryParams)}`

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setJogos(data.results);
            setPageCount(Math.floor(data.count /20))
          })
          .catch(e => {
            console.log(e);
          });
      }, [url]);

      console.log(pageCount);

      return(
        <div className='jogos'>
        {jogos.map((jogo, index) => (
            <Games key={index} src={jogo.background_image} title={jogo.name}/>
      ))}
        </div>
      )
    

    
}