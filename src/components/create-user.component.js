import { Component } from 'react'
import axios from 'axios'
import { create } from '../templates/users'

export default class UserCreate extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      isError: false,
      errorMessage: ''
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
      username: e.target.value,
      isError: false
    })
  }

  onSubmit(e) {
    e.preventDefault()

    this.setState({
      isError: false,
      errorMessage: ''
    })
    
    const user = {
      username: this.state.username,
    }

    axios.post('http://localhost:5000/users/add', user)
      .then((res) => {
        if (res.data && res.data._id) {
          this.setState({
            username: '',
            isError: false,
            errorMessage: ''
          })
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
    return create.call(this)
  };
}
