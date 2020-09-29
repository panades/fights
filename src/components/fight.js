import React, { Component } from 'react';
import Players from './players';
import Battle from './battle';
import '../styles/fight.css';

class Fight extends Component {

    state = {
        player01: { name: '', code: '' },
        player02: { name: '', code: '' }
    }
    
    updatePlayer = (id, updatedPlayerValue) => {
        let newState = {...this.state};
        if (id === "player01") {
            newState.player01 = updatedPlayerValue;
        } else {
            newState.player02 = updatedPlayerValue;
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className="fight">
                <div className="p-grid p-col-align-center">
                    <Players name="Player 01" id="player01" data={this.state.player01} onUpdatePlayer={this.updatePlayer} />
                    <Players name="Player 02" id="player02" data={this.state.player02} onUpdatePlayer={this.updatePlayer} />                    
                </div>
                <Battle data={this.state} />
            </div>
        );
    }
}

export default Fight;