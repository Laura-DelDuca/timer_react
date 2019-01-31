import React from "react";
import Toggle from "./Toggle";
import Increment from "./Increment";
import Decrement from "./Decrement";
import ReactLogo from "./Logo";
import Modal from "./Modal"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 1200,
            isToggleOn: true,
            showModal: false,
        }

        //Il faut binder chaque fonction quand on a un constructor
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.timeParser = this.timeParser.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    //Les fonctions: 

    //Définir le temps initial du timer
    timeParser() {
        let min = Math.floor(this.state.time / 60);
        let sec = this.state.time % 60;
        // If: sert à faire apparaître un 0 devant un chiffre des secondes il est inférieur à 10, c'est plus joli
        if (sec < 10) return `${min}:0${sec}`;
        return `${min} : ${sec}`;
    }

    //Définir le comportement du bouton Toggle
    //Quand on appuie sur start
    //Quand il a fini le décompte
    //Quand on appuie sur reset
    //L'inversion Start-Reset se fait dans le composant lui-même
    handleToggleClick() {
        this.setState(state => ({
            isToggleOn: !this.state.isToggleOn
        }));
        //Si isToggleOn est vrai (start), on commence un interval, on décrément de 1 toutes les secondes
        //La fonction se déclenche au clic sur le Toggle car la fonction est définie ici, 
        //envoyée dans le render ci-dessous dans la balise du bon composant avec onClick et 
        //récupérée dans le composant Toggle en indiquant props.onClick
        if (this.state.isToggleOn === true) {
            this.timer = setInterval(() => {
                //If: on stop l'interval quand on arrive à 0, sinon il va dans les négatifs
                if (this.state.time === 0) {
                    clearInterval(this.timer)
                    this.setState({
                        //On inverse la valeur de showModal: cela permet d'afficher le modal quand le décompte est fini
                        showModal: !this.state.showModal,
                    });
                    return;
                }
                this.setState({
                    time: this.state.time - 1
                })
            }, 1000)
            console.log("start")
        }
        // Else: si isToggleOn est faux, c'est à dire quand on reset, on stoppe l'interval en cours
        // et on revient à l'état d'origine du timer, 20 minutes. Cela se passe au clic sur le button du Toggle
        else {
            clearInterval(this.timer);
            this.setState({ time: 1200 })
            console.log("reset")
        }
    }

    // Composant Increment
    handleIncrementClick() {
        this.setState({
            //On ajoute 60 secondes pour faire 2 minutes (voir calcul du temps initial)
            time: this.state.time + 60
        });
    }

    //Composant Decrement
    handleDecrementClick() {
        this.setState({
            time: this.state.time - 60
        });
    }

    //Bouton close dans le Modal
    handleCloseModal() {
        this.setState({ showModal: false });
    }

    //Bouton restart dans le Modal
    handleRestart() {
        //On remet le compteur à 20 minutes
        this.setState({
            time: 1200,
        })
        //Ensuite, on réenclenche l'interval, et on remet le bouton Toggle au statut de reset
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time - 1,
                isToggleOn: false
            })
        }, 1000)
    }

    //Ici, on va rechercher tous les petits composants pour les intégrer dans ce composant principal App
    render() {
        return (
            <div id="container_all">
                <ReactLogo />
                {/* Faire apparaître le Modal:*/}
                {/* On envoie ici les deux fonctions que l'on a pour les deux boutons du Modal: close et restart */}
                {!this.state.time && (<Modal displayed={this.state.showModal} onClick={this.handleCloseModal} onClick2={this.handleRestart} />)}
                {/* Quand le status = isToggleOn (il décompte), le bouton Increment n'apparaît plus */}
                {this.state.isToggleOn && (<Increment onClick={this.handleIncrementClick} />)}
                {/* Dans le cas du timeParser, le faut ajouter les (), car ici, on appelle directement la fonction, 
                    elle doit s'éxecuter ici. Dans les autres cas, on doit les envoyer aux composants enfants et elles sont
                    exécutées par ces composants, au clic sur le bouton.*/}
                <h3 id="numbers">{this.timeParser()}</h3>
                {/* on lui dit la méthode qu'il doit aller chercher au clic : handleToggleClick et on lui demande d'afficher son status start ou reset */}
                {/* Quand le status = isToggleOn (il décompte), le bouton Decrement n'apparaît plus */}
                {this.state.isToggleOn && (<Decrement onClick={this.handleDecrementClick} />)}
                {/* En plus de lui envoyer une fonction, on demande au Toggle d'afficher son état: start par défaut */}
                <Toggle onClick={this.handleToggleClick} isToggleOn={this.state.isToggleOn} />
            </div>
        );
    }
}

export default App;