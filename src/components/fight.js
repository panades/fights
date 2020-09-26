import React, { Component, Fragment } from 'react';

class BattleType extends Component {
    types = ["fire", "grass", "ground", "water"];
    render() {
        return (
            <Fragment>
                <h3>{this.props.name}</h3>
                <ul>
                    { this.types.map(t=><li>{t}</li>) }
                </ul>
            </Fragment>
        );
    }
}

class Fight extends Component {
    render() {
        return (
            <div>
                <h1>Battle fight</h1>
                <div>
                    <BattleType name="Fight 01" />
                    <p>VS</p>
                    <BattleType name="Fight 02"/>
                </div>
                <button>Fight</button>
            </div>
        );
    }
}

export default Fight;