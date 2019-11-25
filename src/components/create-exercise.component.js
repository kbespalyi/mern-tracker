import { Component } from 'react';
import axios from 'axios'
import { create } from '../templates/exercises';

export default class ExerciseCreate extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
      isError: false,
      errorMessage: ''
    }

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDuration = this.onChangeDuration.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then((response) => {
        this.setState({
          users: response.data.map((item) => item.username),
          username: response.data.length > 0 ? response.data[0].username : '',
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

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
      isError: false
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
      isError: false
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: Number(e.target.value),
      isError: false
    })
  }

  onChangeDate(date) {
    this.setState({
      date,
      isError: false
    })
  }

  onSubmit(e) {
    e.preventDefault();
    
    this.setState({
      isError: false,
      errorMessage: ''
    })
    
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then((res) => {
        if (res.data && res.data._id) {
          this.setState({
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [],
            isError: false,
            errorMessage: ''
          })
          window.location = '/';
        } else {
          throw new Error('Not saved due to error')
        }
      })
      .catch((err) => {
        this.setState({
          isError: true,
          errorMessage: err.message || 'No response'
        })
      })
  }

  render() {
    return create.call(this); 
  }
}
