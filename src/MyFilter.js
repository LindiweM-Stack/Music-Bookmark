import React, { useState } from 'react';

import './style.css';


const USERS = [
  { id: 1, name: 'Allesia Cara'},
  { id: 2, name: 'Ami Faku'},
  { id: 3, name: 'Beyonce'},
  { id: 4, name: 'Brandy'},
  { id: 5, name: 'Chris Brown'},
  { id: 6, name: 'Kabza De Small'},
  { id: 7, name: 'Makhadzi'},
  { id: 8, name: 'Nathi'},
  { id: 9, name: 'Usher'},
];

function MyFilter() {
  const [name, setName] = useState('');
  

  const [foundUsers, setFoundUsers] = useState(USERS);
  

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
       
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      
    }

    setName(keyword);
  

  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search"
      />

       

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-song">{user.song}</span>
              

            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default MyFilter;

