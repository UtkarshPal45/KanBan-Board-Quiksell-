import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Board from './components/Board/Board';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  // Fetch data from API
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <div className='app-header'>
        <NavBar onGroupChange={setGroupBy} onSortChange={setSortBy} />
      </div>
      <div className="app-content">
        <Board tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
      </div> 
    </div>
  );
}

export default App;
