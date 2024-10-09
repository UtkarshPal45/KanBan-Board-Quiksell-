// src/components/Board.jsx
import React from 'react';
import Column from '../Column/Column';
import './Board.css';

const Board = ({ tickets, users, groupBy, sortBy }) => {
  
  const priority=["urgent","high","medium","low","no priority"];
  const status=["backlog","to do","in progress","done","cancelled"];
  
  return (
    <div className='board-container'>
      <div className="board">
        { 
          groupBy==='status' && status.map((opt,id)=>{
            return <Column title={opt} users={users} key={id} tickets={tickets} groupBy={groupBy} sortBy={sortBy}/>
          })
        }
        { 
          groupBy==='priority' && priority.map((opt,id)=>{
            return <Column title={opt} level={id} key={id}users={users} tickets={tickets} groupBy={groupBy} sortBy={sortBy}/>
          })
        }
        { 
          groupBy==='user' && users.map((opt)=>{
            return <Column  title={opt.name} userId={opt.id} key={opt.id} users={users} tickets={tickets} groupBy={groupBy} sortBy={sortBy}/>
          })
        }
      </div>
      
    </div>
  );
};


export default Board;
