import React, { Component, Fragment } from 'react';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';

class Battle extends Component {

    state = {
        winTo: {
            earth: 'water',
            fire: 'wind',
            lightning: 'earth',
            water: 'fire',
            wind: 'lightning'
        },
        winner: ''
    }

    battle = e => {
        let newState = {...this.state};
       
        let player1 = this.props.data.player1.code;
        let player2 = this.props.data.player2.code;

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
        
        if (this.state.winTo[player1] === player2) {
            newState.winner = 'player1';
            this.player1Result.show(winTemplate);
            this.player2Result.show(loseTemplate);  
        } else if (this.state.winTo[player2] === player1) {
            newState.winner = 'player2';
            this.player1Result.show(loseTemplate);
            this.player2Result.show(winTemplate); 
        }
        if (newState.winner === '') {
            this.player1Result.show(tiedTemplate);
            this.player2Result.show(tiedTemplate); 
        }
        newState.winner = '';
        this.setState(newState);
    }
    
    render () {
        return (
            <Fragment>
                <div className='p-col'><Button onClick={this.battle} label={`Let's battle`} className='p-button-danger' /></div>
                <div>
                    <Messages ref={el => (this.player1Result = el)} className='p-col-6 p-inline-message' />
                    <Messages ref={el => (this.player2Result = el)} className='p-col-6 p-inline-message' /> 
                </div>                
            </Fragment>
        );
    }

}

export default Battle;