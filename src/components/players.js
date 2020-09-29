import React, { Component } from 'react';
import { ListBox } from 'primereact/listbox';
import data from "../assets/data/elements.json";

class Players extends Component {

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
        const playertypes = data.elements;
        return (
            <div className="p-col">
                <h3>{this.props.name}</h3>
                <ListBox
                    id={this.props.id}
                    value={this.state.player}
					options={playertypes}
                    onChange={this.handleChange}
                    optionLabel='name'
                    className='p-shadow-5'       
				/>
            </div>
        );
    }
}

export default Players;