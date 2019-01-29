import React from "react";
import Toggle from "./Toggle";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Header from "./Header";
import ReactLogo from "./Logo"


class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 100,
            isToggleOn: true
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        //si isToggleOn est vrai, c'est à dire sur start, on commence d'interval, on ajoute au temps
        //indiqué +1 toutes les secondes, la fonction se déclanche au clic dans Toggle component
        if (this.state.isToggleOn === true) {
            this.timer = setInterval(() => this.setState({
                time: this.state.time - 1
            }), 1000)
            console.log("start")
        }
        // si isToggleOn est faux, quand on appuie sur stop, on arrête l'inteval en cours et on revien
        // à l'état d'origine, ça se passe au clic dans le composant Toggle
        else {
            clearInterval(this.timer);
            this.setState({ time: 100 })
            console.log("reset")
        }
    }

    handleIncrementClick() {
        this.setState({
          time: this.state.time +1
        });
      }
    
    handleDecrementClick() {
        this.setState({
          time: this.state.time -1
        });
      }

    render() {
        return (
            <div id="main">
                <div id="header">
                    <Header />
                </div>

                <div id="container_all">
                    <div id="ReactLogo">
                        <ReactLogo />
                    </div>

                    <div id="timer">
                        <div id="clock">
                            <h3 id="numbers">{this.state.time}</h3>
                            {/* on importe toggle= start ou reset et son fonctionnenemtn est juste au dessus, ici */}
                            {/* on lui dit la méthode qu'il doit aller chercher au clic : handleToggleClick et on lui demande d'afficher son status start ou reset */}
                        </div>

                        <div id="buttons">
                            <div id="toggle">
                                <Toggle onClick={this.handleToggleClick} isToggleOn={this.state.isToggleOn} />
                            </div>

                            <div id="increment">
                                <Increment onClick={this.handleIncrementClick} />
                            </div>

                            <div id="decrement">
                                <Decrement onClick={this.handleDecrementClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;