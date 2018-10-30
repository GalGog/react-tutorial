import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from "./Form";


class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState ({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <Table
                    characterData={this.state.characters}
                removeCharacter={this.removeCharacter}
                />
                <Form />
            </div>
        );
    }
}

export default App;

