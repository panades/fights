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
    
    elementTemplate(option) {
        return (
            <div className="element-item">
                <img src={require(`../assets/img/${option.code}.png`)}/>
                <div>{option.name}</div>
            </div>
        );
    }
    render() {        
        const playertypes = data.elements;
        return (
            <div className="p-col">
                <h2>{this.props.name}</h2>
                <ListBox
                    id={this.props.id}
                    value={this.state.player}
					options={playertypes}
                    onChange={this.handleChange}
                    optionLabel='name'
                    className='p-shadow-5'       
                    itemTemplate={this.elementTemplate}
				/>
            </div>
        );
    }
}

export default Players;