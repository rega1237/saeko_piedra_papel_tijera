import './style.css';
import choiceSelector from './src/modules/game.js';
import { score } from './src/modules/data.js';

document.querySelector('#app').innerHTML = `
  <h1 class="title">Piedra, Papel o Tijera</h1>

  <div class="score-board">
    <div class="points">
      <span id="user-score">${score[0]}</span>
      <span> - </span>
      <span id="computer-score">${score[1]}</span>
    </div>
    <p>marcador</p>
  </div>

  <div class="game-container">
    <div class="select">
      <div class="title-select">
        <p class="title-user">Tu</p>
        <p>Selecciona una opcion</p>
      </div>
      <div class="options">
        <img class="user-choice" src="./src/img/papel.png" alt="papel">
        <img class="user-choice" src="./src/img/piedra.png" alt="piedra">
        <img class="user-choice" src="./src/img/tijera.png" alt="tijera">
      </div>
    </div>
    <div class="pick">
      <div class="user-papel hiden">
        <img class="selected" src="./src/img/papel.png" alt="papel">
        <p>Papel</p>
      </div>

      <div class="user-piedra hiden">
        <img class="selected" src="./src/img/piedra.png" alt="piedra">
        <p>Piedra</p>
      </div>

      <div class="user-tijera hiden">
        <img class="selected" src="./src/img/tijera.png" alt="tijera">
        <p>Tijera</p>
      </div>
    </div>
    <div class="vertical-line"></div>
    <div class="result center-result hiden"></div>
    <div class="pick">
      <div class="comp-papel hiden">
        <img class="selected" src="./src/img/papel.png" alt="papel">
        <p>Papel</p>
      </div>

      <div class="comp-piedra hiden">
        <img class="selected" src="./src/img/piedra.png" alt="piedra">
        <p>Piedra</p>
      </div>

      <div class="comp-tijera hiden">
        <img class="selected" src="./src/img/tijera.png" alt="tijera">
        <p>Tijera</p>
      </div>
    </div>
    <div class="select">
      <div class="title-select">
        <p class="title-user">Computadora</p>
      </div>
      <div class="options">
        <img class="computer-choice" src="./src/img/papel.png" alt="papel">
        <img class="computer-choice" src="./src/img/piedra.png" alt="piedra">
        <img class="computer-choice" src="./src/img/tijera.png" alt="tijera">
      </div>
    </div>
  </div>

`;

choiceSelector();
