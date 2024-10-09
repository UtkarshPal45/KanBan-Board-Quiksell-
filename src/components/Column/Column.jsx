import React from 'react';
import Card from '../Card/Card';
import './Column.css';

const Column = ({ title, tickets, users, userId, level, groupBy, sortBy }) => {

  const getUserInfo = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? { name: user.name, available: user.available } : { name: 'Unassigned', available: false };
  };

  const getIcon = () => {
    const iconMap = {
      'backlog': 'Backlog',
      'to do': 'To-do',
      'in progress': 'in-progress',
      'done': 'Done',
      'cancelled': 'Cancelled',
      'no priority': 'No-priority',
      'urgent': 'SVG - Urgent Priority colour',
      'high': 'Img - High Priority',
      'medium': 'Img - Medium Priority',
      'low': 'Img - Low Priority'
    };

    return iconMap[title] ? `/images/${iconMap[title]}.svg` : null;
  };

  let filteredTickets = [];
  if (groupBy === 'status')
    filteredTickets = tickets.filter(ticket => ticket.status.toLowerCase() === title.toLowerCase());
  else if (groupBy === 'priority')
    filteredTickets = tickets.filter(ticket => ticket.priority === 4-level);
  else{
    console.log("loda");
    filteredTickets = tickets.filter(ticket => ticket.userId === userId); 
  }

  if (sortBy === 'priority')
    filteredTickets = filteredTickets.slice().sort((a, b) => b.priority - a.priority);
  else
    filteredTickets = filteredTickets.slice().sort((a, b) => a.title.localeCompare(b.title));
  
  
  return (
    <div className="column">
      <div className="column-header">
        {getIcon() && <img src={getIcon()} alt="" className="column-icon" />}
        <h2>{title}</h2>
        <span className="ticket-count">{filteredTickets.length}</span>
        <img src="/images/add.svg" alt="Add" className="add-icon" />
      </div>
      <div className="task-list">
        {filteredTickets.map((ticket) => {
          const userInfo = getUserInfo(ticket.userId)
          return (<Card 
            key={ticket.id} 
            ticket={ticket} 
            users={users} 
            groupBy={groupBy}
            userName={userInfo.name} 
            userAvailability={userInfo.available}
          />)
          })  
        }
      </div>
    </div>
  );
};

export default Column;
