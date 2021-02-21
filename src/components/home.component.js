import React, { Component } from 'react';
import axios from 'axios';    //connect front & back ends

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      firstName: '',
      lastName: ''
    }
  }

  onChangeUsername(e) {
    this.setState({         //method to update username element
      username: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const user = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }

    //print to console for testing purposes
    console.log(user);

    //send provider data to back end
    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    //navigate to Users List window
    window.location = '/users/list';
  }

  render() {
    return (
    <div>
      <h3>Welcome.</h3>
    </div>
    )
  }
}