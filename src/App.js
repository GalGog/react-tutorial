import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Untable from './Untable';


class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <Table />
                <Untable />
            </div>
        );
    }
}

export default App;

