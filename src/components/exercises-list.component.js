import { Component } from 'react';
import { list } from '../templates/exercises';

export default class ExercisesList extends Component {
  render() {
    return list.call(this); 
  };
}
