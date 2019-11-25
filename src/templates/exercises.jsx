import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { ErrorMessage } from './errors'
import { Link } from 'react-router-dom';

export function Exercise(props) {
  const currentExercise = props.exercise
  if (currentExercise) {
    return (
      <tr>
        <td>{currentExercise.username}</td>
        <td>{currentExercise.description}</td>
        <td>{currentExercise.duration}</td>
        <td>{currentExercise.date.substring(0,10)}</td>
        <td>
          <Link to={ "/edit/" + currentExercise.id }>Edit</Link> | <a href="#" onClick={ () => props.deleteExercise(currentExercise.id) }>Delete</a>
        </td>
      </tr>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export function list() {
  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { this.exerciseList() }
        </tbody>
      </table>
      <ErrorMessage isError={this.state.isError} errorMessage={this.state.errorMessage} />
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
            value={this.state.username}
            onChange={this.onChangeUsername}>
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
        <ErrorMessage isError={this.state.isError} errorMessage={this.state.errorMessage} />
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn" />
        </div>
      </form>
    </div>
  )
}

export function edit() {
  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select ref="userInput"
            required
            className="form-control"
            value={this.state.username}
            onChange={this.onChangeUsername}>
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
        <ErrorMessage isError={this.state.isError} errorMessage={this.state.errorMessage} />
        <div className="form-group">
          <input type="submit" value="Update Exercise Log" className="btn" />
        </div>
      </form>
    </div>
  )
}
