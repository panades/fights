import React, { Component } from 'react';
import Players from './players';
import Battle from './battle';

class Fight extends Component {

    state = {
        player1: { name: '', code: '' },
        player2: { name: '', code: '' }
    }
    
    updatePlayer = (id, updatedPlayerValue) => {
        let newState = {...this.state};
        if (id === 'player1') {
            newState.player1 = updatedPlayerValue;
        } else {
            newState.player2 = updatedPlayerValue;
        }
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <div className='p-grid p-col-align-center'>
                    <Players name='Player 1' id='player1' data={this.state.player01} onUpdatePlayer={this.updatePlayer} />
                    <Players name='Player 2' id='player2' data={this.state.player02} onUpdatePlayer={this.updatePlayer} />                    
                </div>
                <Battle data={this.state} />
            </div>
        );
    }
}

export default Fight;