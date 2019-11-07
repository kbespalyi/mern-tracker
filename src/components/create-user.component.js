import { Component } from 'react';
import { create } from '../templates/users';

export default class UserCreate extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
    }

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    
    const user = {
      username: this.state.username,
    }

    console.log(user)

    this.setState({
      username: ''
    });
  }

  render() {
    return create.call(this); 
  };
}
