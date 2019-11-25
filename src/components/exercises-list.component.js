import React, { Component } from 'react';
import axios from 'axios'
import { list, Exercise } from '../templates/exercises';

export default class ExercisesList extends Component {

  constructor(props) {
    super(props)

    this.deleteExercise = this.deleteExercise.bind(this)
    this.exerciseList = this.exerciseList.bind(this)

    this.state = {
      exercises: [],
      isError: false,
      errorMessage: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then((response) => {
        this.setState({
          exercises: response.data.map(
            (item) => ({
              id: item._id,
              username: item.username,
              description: item.description,
              duration: item.duration,
              date: item.date
            })
          ),
          isError: false
        })
      })
      .catch((err) => {
        this.setState({
          isError: true,
          errorMessage: err.message || 'No response'
        })
      })
  }

  exerciseList() {
    return this.state.exercises.map((currentExercise) => {
      return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise.id} />
    })
  }

  deleteExercise(id) {
    
    this.setState({
      isError: false,
      errorMessage: ''
    })
    
    if (id) {
      axios.delete('http://localhost:5000/exercises/' + id)
        .then((res) => {
          if (res.data === 'OK') {
            this.setState({
              exercises: this.state.exercises.filter((item) => item.id !== id),
              isError: false,
              errorMessage: ''
            })
          } else {
            throw new Error('Not delete due to error')
          }
        })
        .catch((err) => {
          this.setState({
            isError: true,
            errorMessage: err.message || 'No response'
          })
        })
    }
  }

  render() {
    return list.call(this); 
  };
}
