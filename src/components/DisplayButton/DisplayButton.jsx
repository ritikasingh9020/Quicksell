import React, { useState } from 'react';
import { useKanban } from '../../hooks/useKanban';
import './DisplayButton.css';

function DisplayButton() {
  const { grouping, sorting, setGrouping, setSorting } = useKanban();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="display-button-container">
      <button 
        className="display-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="icon">☰</span>
        <span>Display</span>
        <span className="icon">▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select 
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-item">
            <span>Ordering</span>
            <select 
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayButton;
