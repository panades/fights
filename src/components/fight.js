import React, { Component } from 'react';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import '../styles/fight.css';

class BattleType extends Component {

	state = {
			player: this.props.data
    };
    
    handleChange = e => {
        let newState = {...this.state};
        newState.player = e.value;
        this.setState(newState);
        this.props.onUpdatePlayer(this.props.id, newState.player)
    };
    
    render() {        
        const battletypes = [
            {name: 'Air', code: 'air'},
            {name: 'Earth', code: 'ear'},
            {name: 'Fire', code: 'fir'},
            {name: 'Water', code: 'wat'}
        ];
        return (
            <div className="p-col">
                <h3>{this.props.name}</h3>
                <ListBox
                    id={this.props.id}
                    value={this.state.player}
					options={battletypes}
                    onChange={this.handleChange}
                    optionLabel='name'
                    className='p-shadow-5'       
				/>
            </div>
        );
    }
}

class Fight extends Component {

    newPlayer = { name: '', code: '' };

    state = {
        player01: this.newPlayer,
        player02: this.newPlayer
    }

    battle = event => {
		this.messages.show({
			severity: 'success',
			summary: 'You win!'
		});
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
                <h2>Fight selection</h2>
                <div className="p-grid p-col-align-center">
                    <BattleType name="Player 01" id="player01" data={this.state.player01} onUpdatePlayer={this.updatePlayer} />
                    <BattleType name="Player 02" id="player02" data={this.state.player02} onUpdatePlayer={this.updatePlayer} />                    
                </div>
                <div className="p-col">
                    <Button onClick={this.battle} label='Fight' className='p-button-danger' />
                    <Messages ref={el => (this.messages = el)} />
                </div>
            </div>
        );
    }
}

export default Fight;