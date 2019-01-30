import React from "react";
import Toggle from "./Toggle";
import Increment from "./Increment";
import Decrement from "./Decrement";
// import Header from "./Header";
import ReactLogo from "./Logo";
import Modal from "./Modal"


class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 2,
            isToggleOn: true,
            showModal: false
        }

        //il faut binder chaque fonction quand on a un constructor,  va savoir pourquoi...
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.timeParser = this.timeParser.bind(this);
        // this.isHidden = this.isHidden.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    timeParser() {
        let min = Math.floor(this.state.time / 60);
        let sec = this.state.time % 60;
        //mettre un zéro devant le chiffre des secondes quand il est inférieur à 10:
        if (sec < 10) return `${min}:0${sec}`;
        return `${min} : ${sec}`;
    }

    handleToggleClick() {
        this.setState(state => ({
            isToggleOn: !this.state.isToggleOn
        }));
        //si isToggleOn est vrai, c'est à dire sur start, on commence d'interval, on ajoute au temps
        //indiqué +1 toutes les secondes, la fonction se déclanche au clic dans Toggle component
        if (this.state.isToggleOn === true) {
            this.timer = setInterval(() => {
                //stop l'interval quand on arrive à zéro, sinon ce con va dans les négatifs
                if (this.state.time === 0){
                    clearInterval (this.timer)
                    this.setState({
                        //inverse la valuer de showmodal
                        showModal: !this.state.showModal,
                        // isToggleOn: !this.state.isToggleOn
                    });
                    return;
                }
                this.setState({
                time: this.state.time - 1
            })}, 1000)
            console.log("start")
        }
        // si isToggleOn est faux, quand on appuie sur stop, on arrête l'inteval en cours et on revien
        // à l'état d'origine, ça se passe au clic dans le composant Toggle
        else {
            clearInterval(this.timer);
            this.setState({ time: 1200 })
            console.log("reset")
        }
    }

    handleIncrementClick() {
        this.setState({
            //+ une minute (je passe par 60 seconces à cause du calcul dans la fucntion parserYimeer)
            time: this.state.time + 60
        });
    }

    handleDecrementClick() {
        this.setState({
            time: this.state.time - 60
        });
    }

    // isHidden() {
    //     this.setState({
    //         isHidden: !this.state.isHidden
    //     });
    //     if (this.state.isToggleOn === true) {
    //         this.setState
    //     }
    // }


    handleCloseModal () {
      this.setState({ showModal: false });
    }

    handleRestart () {
        this.setState({ 
            time: 1200,
            isToggleOn: !this.state.isToggleOn 
        })
        this.handleToggleClick() 
    }

    render() {
        return (
            <div id="container_all">
                <ReactLogo />
                {!this.state.time && (<Modal  displayed={this.state.showModal} onClick={this.handleCloseModal} onClick2={this.handleRestart}/>)}
                <Increment onClick={this.handleIncrementClick} />
                            {/* il faut mettre des () car ici, on appalle la focntion, dans les cas en dessous, 
                        on l'envoie juste au composant mais elle ne s'éxecuter mais à ce moemnt là, 
                        pour le time parser, elle s'exécute ici */}
                <h3 id="numbers">{this.timeParser()}</h3>
                            {/* on importe toggle= start ou reset et son fonctionnenemtn est juste au dessus, ici */}
                            {/* on lui dit la méthode qu'il doit aller chercher au clic : handleToggleClick et on lui demande d'afficher son status start ou reset */}       
                <Decrement onClick={this.handleDecrementClick} />  
                <Toggle onClick={this.handleToggleClick} isToggleOn={this.state.isToggleOn} />   
               
            </div>
        );
    }
}

export default Timer;