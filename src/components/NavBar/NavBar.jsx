// // src/components/TopBar.jsx
// import React, { useState } from 'react';
// import './NavBar.css'; // CSS file for styling the TopBar

// const TopBar = ({ onGroupChange, onSortChange }) => {
//   const [group, setGroup] = useState('status');
//   const [sort, setSort] = useState('priority');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleGroupChange = (e) => {
//     setGroup(e.target.value);
//     onGroupChange(e.target.value);
//   };

//   const handleSortChange = (e) => {
//     setSort(e.target.value);
//     onSortChange(e.target.value);
//   };

//   return (
//     <div className="topbar">
//       <div className="display-btn">
//         <button onClick={toggleDropdown}>Display</button>
//         { isDropdownOpen && <div className="dropdown">
//           <label>
//             Grouping:
//             <select value={group} onChange={handleGroupChange}>
//               <option value="status">Status</option>
//               <option value="user">User</option>     
//               {/* value="userId" insted of "user" */}
//               <option value="priority">Priority</option>
//             </select>
//           </label>
//           <label>
//             Ordering:
//             <select value={sort} onChange={handleSortChange}>
//               <option value="priority">Priority</option>
//               <option value="title">Title</option>
//             </select>
//           </label>
//           </div>
//         }
//       </div>
//     </div>
//   );
// };

// export default TopBar;

import React, { useState } from 'react';
import './NavBar.css';

export default function NavBar({ groupBy, sortBy, onGroupChange, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="display-menu">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <img src="/images/Display.svg" alt="Display" className="display-icon" />
        Display
        <img src="/images/down.svg" alt="Expand" className="expand-icon" />
      </button>
      {isOpen && (
        <div className="menu-dropdown">
          <div className="menu-option">
            <label htmlFor="groupBy">Group By</label>
            <select id="groupBy" value={groupBy} onChange={(e) => onGroupChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="menu-option">
            <label htmlFor="sortBy">Order By</label>
            <select id="sortBy" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
