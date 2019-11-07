import { Component } from 'react';
import { edit } from '../templates/exercises';

export default class ExerciseEdit extends Component {
  render() {
    return edit.call(this); 
  };
}
