import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';


class App extends Component {
    render() {
        const characters = [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            },
            {
                'name': 'Dima',
                'job': 'Bakhtin'
            }
        ];

        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <Table characterData={characters} />
            </div>
        );
    }
}

export default App;

