import React, { Component, Fragment } from 'react';
import Header from './header';
import { Button } from 'primereact/button';


class Error404 extends Component {
goBack = e => {
    e.preventDefault();
    this.props.history.push('/');
}

    render() {
        return (
            <Fragment>
                <Header />
                <div className='p-grid p-dir-col p-align-center'>          
                    
                    <div className='p-col fight'>
                        <img src={require(`../assets/img/error-404.png`)} alt='Error 404' />
                    </div>
                    <div className='p-col'>
                        <h2>Page not found!</h2>
                    </div>
                    <div className='p-col'>
                        <Button onClick={this.goBack} label='Back' className='p-button-secondary' />
                    </div>                
                </div>
            </Fragment>
        );
    }
}

export default Error404;