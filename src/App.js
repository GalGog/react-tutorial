import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';


class App extends Component {
    state = {
        characters: [
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
        ]
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState ({
            characters:characters.filter((character, i) => {
                return i !== index;
            })
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <Table
                    characterData={characters}
                removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default App;

