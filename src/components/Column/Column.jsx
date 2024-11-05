import React from 'react';
import Card from '../Card/Card';
import './Column.css';

function Column({ title, tickets, users, grouping }) {
  const getIcon = () => {
    switch (grouping) {
      case 'status':
        return '○';
      case 'user':
        return '👤';
      case 'priority':
        return '🎯';
      default:
        return '○';
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          <span className="column-icon">{getIcon()}</span>
          <span>{title}</span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-actions">
          <button className="icon-button">+</button>
          <button className="icon-button">⋮</button>
        </div>
      </div>
      <div className="column-content">
        {tickets.map(ticket => (
          <Card 
            key={ticket.id} 
            ticket={ticket}
            user={users.find(u => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;