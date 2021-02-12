import React, { Component } from 'react';
import axios from 'axios';    //connect front & back ends

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      firstName: '',
      lastName: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          firstName: response.data.firstName,
          lastName: response.data.lastName
        })
      })
      .catch(function (error) {
        console.log(error);
      })
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
      lastName: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const user = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    }

    //print to console for testing purposes
    console.log(user);

    //update user data to back end
    axios.post('http://localhost:5000/users/update/' + this.props.match.params.id, user)
      .then(res => console.log(res.data));

    //navigate to User List window
    window.location = '/users/list';

  }

  render() {
    return (
    <div>
      <h3>Update User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.username}
            onChange={this.onChangeUsername}
            />
        </div>
        <div className="form-group"> 
          <label>First name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.firstName}
            onChange={this.onChangeFirstName}
            />
        </div>
        <div className="form-group"> 
          <label>Last name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.lastName}
            onChange={this.onChangeLastName}
            />
        </div>
        <div className="form-group">
          <input type="submit" value="Update User" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}