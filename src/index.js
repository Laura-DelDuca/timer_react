//Importer ici tous les composants qui seront créés; ce sont des fichiers .js
import './scss/app.css';
import React from "react";
import ReactDOM from "react-dom";
// import Header from './components/Header';
// import HelloMessage from './components/HelloMessage';
// import Toggle from './components/Toggle';
// import Increment from './components/Increment';
// import Decrement from './components/Decrement';
import Timer from './components/Timer'

const App = document.getElementById("app");

ReactDOM.render(<Timer />, App);