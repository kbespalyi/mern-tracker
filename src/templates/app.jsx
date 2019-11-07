import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "../components/navbar.component"
import ExerciseList from "../components/exercises-list.component"
import EditExercise from "../components/edit-exercise.component"
import CreateExercise from "../components/create-exercise.component"
import CreateUser from "../components/create-user.component"

const template = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  )
};
export default template;