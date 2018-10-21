import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery'

export default class Container extends Component {

    render() {
        const c = "Day-img", c2= "Day-desc";

        return (
            <div className="App">
                <Gallery className={c}/>
                <Gallery className={c2}/>
            </div>

        )
    }
}

/*
            <div>                
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                </header>
            </div>
*/
