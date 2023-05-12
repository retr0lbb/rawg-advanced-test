import Game from "./components/Game"
import './App.css'
import { useState } from 'react';


function App() {
  const [page, setPage] = useState(1);
  const mudarPagina = (novaPagina) => {
    if(novaPagina >= 1){
      setPage(novaPagina);
    }
    
  };

  return (
    <>
      <Game page={page}/>

      <div className="test">
      <button onClick={() => mudarPagina(page+1)}>Passa pra proxima</button>
      <p>pagina atual, {page}</p>
      <button onClick={() => mudarPagina(page-1)}>Voltar</button>
      </div>
    </>
  )
}

export default App
