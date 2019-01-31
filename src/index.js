//Dans ce fichier, on importe le composant principal, App,
//qui contient tous les autres composants; tous sont des fichiers .js
import './scss/app.css';
import React from "react";
import ReactDOM from "react-dom";

import App from './components/App'

ReactDOM.render(<App />,
    document.getElementById("app")
);