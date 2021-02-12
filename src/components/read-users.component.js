import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Functional component as opposed to class component; could be its own file
const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.firstName}</td>
    <td>{props.user.lastName}</td>
    <td>
      <Link to={"/users/update/"+props.user._id}>update</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
    </td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);

    this.state = {users: []}
  }

  componentDidMount() {
    console.log("Getting users from read-users.component!");
    axios.get('http://localhost:5000/users/list')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  deleteUser(id) {
    //delete document
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => console.log(response.data));
      
    //update page view with new deleted state
    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }
  
  userList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }
  
  render() {
    return (
      <div>
        <h3>Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
    )
  }
}