import React from "react";
import Toggle from "./Toggle"


class Timer extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            time: 100,
            isToggleOn: true
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);

        // this.startTimer = this.startTimer.bind(this)
        // this.stopTimer = this.stopTimer.bind(this)
        // this.resetTimer = this.resetTimer.bind(this)
    }


    handleToggleClick() {
        

        //handleClick() {
            this.setState(state => ({
              isToggleOn: !state.isToggleOn
            }));
            //si isToggleOn est vrai, c'est à dire sur start, on commence d'interval, on ajoute au temps
            //indiqué +1 toutes les secondes
            if (this.state.isToggleOn === true) {
              this.timer = setInterval(() => this.setState({
                time: this.state.time - 1
              }), 1000)
              console.log("start")
            }
            // si isToggleOn est faux, quand on appuie sur stop, on arrête l'inteval en cours et on revien
            // à l'état d'origine
            else {
                clearInterval(this.timer);
                
              this.setState({ time: 100 })
              console.log("reset")
            }
          //}
    }


    render() {
        return (
            <div>
                <h3>timer: {this.state.time}</h3>
                <Toggle onClick={this.handleToggleClick} isToggleOn={this.state.isToggleOn}/>
                <button onClick={this.resetTimer}>reset</button>
            </div>
        );
    }
}


export default Timer;