import React, { Component } from 'react';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import '../styles/fight.css';

class BattleType extends Component {
	constructor() {
		super();
		this.state = {
			player: { name: 'aaa', code: 'bbb' }
		};
	}
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
					value={this.state.player}
					options={battletypes}
					onChange={e => this.setState({ player: e.value })}
                    optionLabel='name'
                    className="p-shadow-5"
				/>
            </div>
        );
    }
}

class Fight extends Component {
    render() {
        return (
            <div className="fight">
                <h2>Fight selection</h2>
                <div className="p-grid p-col-align-center">
                    <BattleType name="Player 01" />
                    <BattleType name="Player 02" />
                </div>
                <div className="p-col">
                    <Button label="Fight" className="p-button-danger" />
                </div>
            </div>
        );
    }
}

export default Fight;