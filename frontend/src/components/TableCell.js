import React, { useState, useEffect } from 'react';

const TableCell = ({ cellData, onChange, isHighlighted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(cellData);

  useEffect(() => {
    setContent(cellData);
  }, [cellData]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChange(content);
  };

  return (
    <td 
      onClick={handleClick}
      className={isHighlighted ? 'highlighted-col' : ''}
    >
      {isEditing ? (
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleBlur();
            }
          }}
          autoFocus
        />
      ) : (
        content
      )}
    </td>
  );
};

export default TableCell;