import { Component } from 'react';
import axios from 'axios'
import { edit } from '../templates/exercises';

export default class ExerciseEdit extends Component {

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

  async componentDidMount() {

    await axios.get('http://localhost:5000/exercises/' + this.props.match.params.id)
      .then((response) => {
        const item = response.data
        if (item) {
          this.setState({
            username: item.username,
            description: item.description,
            duration: item.duration,
            date: new Date(item.date),
            isError: false
          })
        } else {
          throw new Error('No record found')
        }
      })
      .catch((err) => {
        this.setState({
          isError: true,
          errorMessage: err.message || 'No response'
        })
        window.location = '/';
      })

    await axios.get('http://localhost:5000/users/')
      .then((response) => {
        this.setState({
          users: response.data.map((item) => item.username),
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

    axios.put('http://localhost:5000/exercises/' + this.props.match.params.id, exercise)
      .then((res) => {
        if (res.data && res.data._id) {
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
    return edit.call(this); 
  }
}
