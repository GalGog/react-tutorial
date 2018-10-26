import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <Table />
                <TableHeader />
                <TableBody />
            </div>
        );
    }
}

export default App;

