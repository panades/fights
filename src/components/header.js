import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className='App-header p-d-flex p-jc-center'>           
                <div className='p-mr-4'>                    
                    <img src={require(`../assets/img/logo.png`)} alt='Fight' />     
                </div>
                <div className='p-mr-4'>
                    <h1>Fight</h1>
                </div>
                <div className='p-mr-4'>
                    <img src={require(`../assets/img/logo.png`)} alt='Fight' />     
                </div>
            </header> 
        );
    }
}

export default Header;