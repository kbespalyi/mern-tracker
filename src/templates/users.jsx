import React from 'react'
import { ErrorMessage } from './errors'
//import { Link } from 'react-router-dom'

export function list() {
  return (
    <div>
      <p>You are on the Users List component!</p>
    </div>
  )
}

export function create() {
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type="text"
            required
            className="form-control"
            value={this.state.username}
            onChange={this.onChangeUsername}
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
      <p>You are on the User Edit component!</p>
    </div>
  )
}
