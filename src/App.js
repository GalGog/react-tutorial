import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table";
import TableTwo from  "./TableTwo";


class App extends Component {
    render() {
        return (
            <div className="conteiner">
                <h1 className="site-heading">Hello, React!</h1>
                <Table />
                <hr/>
                <TableTwo />
            </div>
        );
    }
}

export default App;

