import React from 'react';

const Header = ({ headers, selectedCol, onColumnSelect, onReset }) => {

  // Vide la table dans la BDD
  const resetTable = async () => {
    try {
      await fetch('http://localhost:5000/api/table', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
      });
      onReset();
    } catch (error) {
      console.error('Error resetting table:', error);
    }
  };

  return (
    <thead>
      <tr>
        <th>
         <button onClick={resetTable}>
            Reset
          </button>
        </th>
        {headers.map((header, index) => (
          <th 
            key={index}
            className={selectedCol === header ? 'highlighted-col' : ''}
            onClick={() => onColumnSelect(selectedCol === header ? null : header)}
            style={{ cursor: 'pointer' }}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;