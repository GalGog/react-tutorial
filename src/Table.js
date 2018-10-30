import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableEnd from './TableEnd'

class Table extends Component {
    render() {
        const {characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData}
                removeCharacter={removeCharacter}
                />
                <TableEnd />
            </table>

        );
    }
}

export default Table;