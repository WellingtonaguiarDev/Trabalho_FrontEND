import { useState } from 'react';
import './App.css';
import Contato from './Contato';

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <button 
            className="title-button"
            onClick={() => setShowContact(!showContact)}
          >
            Wellington Lacerda de Aguiar
          </button>
        </h1>
        {showContact ? (
          <div className="contact-content">
            <Contato />
          </div>
        ) : (
          <div className="contact-content">
            <p>
              Minha rotina se inicia às 08h da manhã, que é quando chego no meu trabalho. <b>Sou contador</b> de algumas empresas, então meu dia se divide entre <b>fazer registros contábeis e estudar tecnologia</b> da informação. Quando saio do trabalho, vou direto para a faculdade. Após a aula, vou para casa descansar e me preparar para o dia seguinte.
            </p>
            <p><i>“Se você conhece o inimigo e conhece a si mesmo, não precisa temer o resultado de cem batalhas. Se você se conhece mas não conhece o inimigo, para cada vitória ganha sofrerá também uma derrota. Se você não conhece nem o inimigo nem a si mesmo, perderá todas as batalhas...”</i> Sun Tzu
            </p>

            <img src="https://christianosantos.com/files/cs1/avatar-homem.jpg" alt="Foto" width="200" />
            <br></br>
            <video width="320" height="240" controls>
              <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            <br></br>
            <audio controls loop autoPlay>
              <source src="https://christianosantos.com/files/cs1/musica01.mp3" type="audio/mpeg" />
              Seu navegador não suporta a tag de áudio.
            </audio>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
