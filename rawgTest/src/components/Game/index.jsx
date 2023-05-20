//importa as classes e metodos de use state e use ref que são primordiais neste projeto
import React, { useState, useEffect } from 'react';

//importa outro elemento react onde ficaram os jogos
import Games from '../Games';

// importa elementos css para a pagina
import './index.css';

//importa pacotes de bibliotecas 

export default (props) =>{

  //função para lidar com a mudança de pagina
  const chageGamePages=(gamePage)=>{
    if(gamePage > 1 && gamePage <= pageCount){
      setPage(gamePage)
    }
  }
  //função para lidar com a pesquisa de jogos
  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }
  //função para previnir o reload da pagina causado pelo form
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  //função para caucular quantas paginas de jogos temos (ela funciona pegando o valor retornado dos parametros de pesquisa e divide pela quantidade de jogos que cabem na tela)
  const checkPageBundle =(pages) =>{
    if(pages >0){
      setPageCount(Math.floor(pages /20))
    }
  }
  //variaveis usando o useStade (react)
    const [jogos, setJogos] = useState([]);
    const [search, setSearch] = useState('');
    const [pageCount ,setPageCount] = useState([]);
    const [page, setPage] = useState(1);
    /*
    chave da api de testes * no projeto final nós não usaremos essa api, so estamos ultilizando ela neste primeiro momento para compreender quais campos devemos
    ter em nosso banco de dados e quais valores especificos precisamos para o retorno, como por exemplo o numero de registros para cada pesquisa de jogos
    */
    const API_KEY = `${import.meta.env.VITE_TOKEN}`
    const URL_ENDPOINT = "https://api.rawg.io/api/games"

    //passa um parametro para a api ultilizando o token que é irrelevante, pagina atual, rating dos jogos, as plataformas que são elas PC, Xbox live, PSN e a pesquisa na barra
    const queryParams = {
        key: API_KEY,
        page: page,
        page_size:'-rating',
        platforms: '18,1,7',
        search: `${search}`
    };

    //juta tudo em uma variavel só para depois aplicar o fetch
    const url = `${URL_ENDPOINT}?${new URLSearchParams(queryParams)}`

    //o use efect serve para que o componente seja executado em tempo real no html, caso não tivesse isso ele iria deixar de existir quando o codigo estivesse pronto
    useEffect(() => {
      //faz o fetch na url
        fetch(url)
        //transforma a resposta do fetch em JSON
          .then(response => response.json())
          //usamos uma variavel para gardar a array retornada juntamente com o numero de paginas que a pesquisa tem
          .then(data => {
            setJogos(data.results);
            checkPageBundle(data.count)
          })
          // qualquer errro que possa ocorrer ele vai parar no terminal
          .catch(e => {
            console.log(e);
          });
      }, [url], [page]);


      /*retorna uma div que o conteudo de alguns elementos presentes sera um map para cada jogo que temos, isso só funciona graças a 
      versatilidade do react em usar javascript para alterar elementos html*/
      return(
        <>
        <div className='jogos'>
        {jogos.map((jogo, index) => (
            <Games key={index} src={jogo.background_image} title={jogo.name}/>
      ))}
        </div>
        {/* retorna alguns botões para testar se a função pesquisa e a função checkar pacote de paginas estava funcionando */}
        <div className='pages'>
          <button onClick={()=>chageGamePages(page +1)}>Proxima</button>
          <p>{page}</p>
          <button onClick={()=>chageGamePages(page -1)}>Voltar</button>
        </div>
        {/* Barra de busca para a pesquisa dos jogos, futuramente adicionarei uma fução para buscar os jogos de forma mais dinamica podendo buscar por tags ou outros por exemplo */}
        <div>
          <form action="GET" onSubmit={handleSubmit}>
          <input type="text"  onChange={handleSearch}/> game name</form>
          <button>Pesquisar</button>
        </div>
        </>
      )
    

    
}