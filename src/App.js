import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TopTable from "./TopTable";


class App extends Component {
    render() {
        return (
            <div className="conteiner">
                <h1 className="site-heading">Hello, React!</h1>
                <TableHeader />
                <TableBody />
                <hr/>
                <TopTable />
            </div>
        );
    }
}

export default App;

