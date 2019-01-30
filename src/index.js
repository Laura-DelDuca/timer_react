//Importer ici tous les composants qui seront créés; ce sont des fichiers .js
import './scss/app.css';
import React from "react";
import ReactDOM from "react-dom";

import Timer from './components/Timer'

const App = document.getElementById("app");

ReactDOM.render(<Timer />, App);