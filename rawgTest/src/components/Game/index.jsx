import React, { useState, useEffect } from 'react';
import Games from '../Games';
import './index.css'


export default (props) =>{

  const chageGamePages=(gamePage)=>{
    if(gamePage > 1 && gamePage <= pageCount){
      setPage(gamePage)
    }

  }
  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  const checkPageBundle =(pages) =>{
    if(pages >0){
      setPageCount(Math.floor(pages /20))
    }
  }

    const [jogos, setJogos] = useState([]);
    const [search, setSearch] = useState('');
    const [pageCount ,setPageCount] = useState([]);
    const [page, setPage] = useState(1);

    
    const API_KEY = "9fe9df9f628245ccbef2da5be661f072"
    const URL_ENDPOINT = "https://api.rawg.io/api/games"

    const queryParams = {
        key: API_KEY,
        page: page,
        page_size:'-rating',
        platforms: '18,1,7',
        search: `${search}`
    };

    const url = `${URL_ENDPOINT}?${new URLSearchParams(queryParams)}`

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setJogos(data.results);
            checkPageBundle(data.count)
          })
          .catch(e => {
            console.log(e);
          });
      }, [url], [page]);

      console.log(pageCount);

      return(
        <>
        <div className='jogos'>
        {jogos.map((jogo, index) => (
            <Games key={index} src={jogo.background_image} title={jogo.name}/>
      ))}
        </div>

        <div className='pages'>
          <button onClick={()=>chageGamePages(page +1)}>Proxima</button>
          <p>{page}</p>
          <button onClick={()=>chageGamePages(page -1)}>Voltar</button>
        </div>

        <div>
          <form action="GET" onSubmit={handleSubmit}>
          <input type="text"  onChange={handleSearch}/> game name</form>
          <button>Pesquisar</button>
        </div>
        </>
      )
    

    
}