import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableEnd from './TableEnd'

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
                <TableEnd />
            </table>

        );
    }
}

export default Table;