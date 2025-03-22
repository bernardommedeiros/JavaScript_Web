import { useState } from "react";

// Primeiro Componente

function App() {
 
  //     estado | altera o estado  valor inicial da mensagemn
  const [message, setMessage] = useState("hello, World!")
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={() => { setMessage("Olá, fui clicado")}}> 
        Mudar mensagem 
        </button>

    </div>
  );
}

export default App;
