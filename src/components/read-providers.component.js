import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Functional component as opposed to class componet; could be its own file
const Provider = props => (
  <tr>
    <td>{props.provider.username}</td>
    <td>{props.provider.orgName}</td>
    <td>{props.provider.website}</td>
    <td>{props.provider.url}</td>
    <td>{props.provider.zipCode}</td>
    <td>
      <Link to={"/providers/update/"+props.provider._id}>update</Link> | <a href="#" onClick={() => { props.deleteProvider(props.provider._id) }}>delete</a>
    </td>
  </tr>
)


export default class ProvidersList extends Component {
  constructor(props) {
    super(props);

    this.deleteProvider = this.deleteProvider.bind(this);

    this.state = {providers: []}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/providers/list')
      .then(response => {
        this.setState({ providers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  deleteProvider(id) {
    //delete document
    axios.delete('http://localhost:5000/providers/'+id)
      .then(response => console.log(response.data));
      
    //update page view with new deleted state
    this.setState({
      providers: this.state.providers.filter(el => el._id !== id)
    })
  }
  
  providerList() {
    return this.state.providers.map(currentprovider => {
      return <Provider provider={currentprovider} deleteProvider={this.deleteProvider} key={currentprovider._id}/>;
    })
  }
  
  render() {
    return (
      <div>
        <h3>Providers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Organization Name</th>
              <th>Website?</th>
              <th>URL</th>
              <th>ZIP code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.providerList() }
          </tbody>
        </table>
      </div>
    )
  }
}