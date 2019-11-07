import React from 'react';
import { Link } from 'react-router-dom';

const template = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">ExcerTracker</Link>
      <div className="collpase navbar-collpase">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Exercices</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Exercice Log</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};
export default template;