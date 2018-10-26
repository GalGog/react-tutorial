import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Table from "./Table";


class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="site-heading">Hello, React!</h1>
            <Table />
            </div>
        );
    }
}

export default App;

