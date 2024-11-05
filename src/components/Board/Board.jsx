import React from 'react';
import { useKanban } from '../../hooks/useKanban';
import Column from '../Column/Column';
import './Board.css';

function Board() {
  const { tickets, users, grouping, loading, error } = useKanban();

  if (loading) return <div className="board-message">Loading...</div>;
  if (error) return <div className="board-message error">{error}</div>;

  return (
    <div className="board-container">
      <div className="board">
        {Object.entries(tickets).map(([group, groupTickets]) => (
          <Column 
            key={group} 
            title={group} 
            tickets={groupTickets}
            users={users}
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;