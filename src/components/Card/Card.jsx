// Card.jsx
import React from 'react';
import './Card.css';

function Card({ ticket, user }) {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return '🔴'; // Urgent
      case 3: return '🔶'; // High
      case 2: return '🔷'; // Medium
      case 1: return '⚪'; // Low
      default: return '⭕'; // No priority
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            <div className="avatar-circle">{user.name[0]}</div>
            <div className={`status-dot ${user.available ? 'available' : ''}`}></div>
          </div>
        )}
      </div>
      
      <div className="card-title">
        <span className="title-text">{ticket.title}</span>
      </div>
      
      <div className="card-tags">
        <div className="priority-tag">
          {getPriorityIcon(ticket.priority)}
        </div>
        {ticket.tag && (
          <div className="feature-tag">
            <span className="tag-dot">●</span>
            <span className="tag-text">{ticket.tag}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
