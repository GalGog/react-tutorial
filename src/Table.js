import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableEnd from './TableEnd'

class Table extends Component {
    render() {
        const { characterData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
                <TableEnd />
            </table>

        );
    }
}

export default Table;