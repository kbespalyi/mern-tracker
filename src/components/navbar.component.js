import { Component } from 'react';
import template from '../templates/navbar';

export default class NavBar extends Component {
  render() {
    return template.call(this);
  };
}
