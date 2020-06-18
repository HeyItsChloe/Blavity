import React, { Component } from 'react';
import HomePage from './HomePage.jsx';

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <div className='header'>
                        <h1><b>BLAVITY NEWS</b></h1>
                    </div>
                    <HomePage/>
                </div>
            </div>
        )
    }
}

export default App;