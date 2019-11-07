import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
//import { Link } from 'react-router-dom';

export function list() {
  return (
    <div>
      <p>You are on the Exercise List component!</p>
    </div>
  );
};

export function create() {
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select ref="userInput"
            required
            className="form-control"
            value={this.state.username}>
            {
              this.state.users.map((user) => {
                return <option key={user} value={user}>{user}</option>
              })
            }
            </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
            required
            className="form-control"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input type="number"
            className="form-control"
            value={this.state.duration}
            onChange={this.onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker
            selected={this.state.date}
            onChange={this.onChangeDate}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn" />
        </div>
      </form>
    </div>
  );
};

export function edit() {
  return (
    <div>
      <p>You are on the Exercise Edit component!</p>
    </div>
  );
};
