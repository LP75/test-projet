import React, { useState, useEffect } from 'react';
import Row from './Row';
import Header from './Header';

const Table = () => {
    const [tableData, setTableData] = useState({});
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedCol, setSelectedCol] = useState(null);
    const headers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/table');
            const data = await response.json();
            // Initialiser une grille vide 10x10
            let formatted = {};
            for (let i = 1; i <= 10; i++) {
                formatted[i] = {};
                headers.forEach(col => {
                    formatted[i][col] = 'Cell ' + col + i;
                });
            }
            // Remplir avec les données existantes
            data.forEach(cell => {
                if (formatted[cell.row]) {
                    formatted[cell.row][cell.col] = cell.value;
                }
            });
            setTableData(formatted);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updateCell = async (row, col, value) => {
        await fetch('http://localhost:5000/api/table', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ row, col, value })
        });
        await fetchData();
    };

    return (
        <table>
            <Header 
                headers={headers}
                selectedCol={selectedCol}
                onColumnSelect={setSelectedCol}
                onReset={fetchData}
             />
            <tbody>
                {Array.from({length: 10}, (_, i) => i + 1).map(row => (
                    <Row 
                        key={row}
                        rowNum={row}
                        rowData={tableData[row] || {}}
                        onCellUpdate={updateCell}
                        isRowSelected={selectedRow === row}
                        onRowSelect={setSelectedRow}
                        selectedCol={selectedCol}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Table;