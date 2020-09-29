import React, { Component, Fragment } from 'react';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';

class Battle extends Component {

    state = {
        winTo: {
            earth: "water",
            fire: "wind",
            lightning: "earth",
            water: "fire",
            wind: "lightning"
        },
        winner: ""
    }

    battle = e => {
        let newState = {...this.state};
       
        let player01 = this.props.data.player01.code;
        let player02 = this.props.data.player02.code;

        let winTemplate = {
			severity: 'success',
			summary: 'You win!'
		};
        let loseTemplate = {
			severity: 'error',
			summary: 'You lose!'
        };
        let tiedTemplate = {
			severity: 'info',
			summary: 'Tied!'
        };
        
        if (this.state.winTo[player01] === player02) {
            newState.winner = "player01";
            this.player01Result.show(winTemplate);
            this.player02Result.show(loseTemplate);  
        } else if (this.state.winTo[player02] === player01) {
            newState.winner = "player02";
            this.player01Result.show(loseTemplate);
            this.player02Result.show(winTemplate); 
        }
        if (newState.winner === "") {
            this.player01Result.show(tiedTemplate);
            this.player02Result.show(tiedTemplate); 
        }
        newState.winner = "";
        this.setState(newState);
    }
    
    render () {
        return (
            <Fragment>
                <div className="p-col"><Button onClick={this.battle} label='Fight' className='p-button-danger' /></div>
                <div>
                    <Messages ref={el => (this.player01Result = el)} className="p-col-6 p-inline-message" />
                    <Messages ref={el => (this.player02Result = el)} className="p-col-6 p-inline-message" /> 
                </div>                
            </Fragment>
        );
    }

}

export default Battle;