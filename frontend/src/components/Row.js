import React from 'react';
import TableCell from './TableCell';

const Row = ({ rowNum, rowData, onCellUpdate, isRowSelected, onRowSelect, selectedCol }) => {
  const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  
  return (
    <tr className={isRowSelected ? 'highlighted-row' : ''}>
      <td 
        className="row-header" 
        onClick={() => onRowSelect(isRowSelected ? null : rowNum)}
        style={{ cursor: 'pointer' }}
      >
        {rowNum}
      </td>
      {columns.map(col => (
        <TableCell
          key={col}
          cellData={rowData[col] || ''}
          onChange={(newValue) => onCellUpdate(rowNum, col, newValue)}
          isHighlighted={selectedCol === col}
        />
      ))}
    </tr>
  );
};

export default Row;