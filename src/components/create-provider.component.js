import React, { Component } from 'react';
import axios from 'axios';    //connect front & back ends

export default class CreateProvider extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeOrgName = this.onChangeOrgName.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeZipCode = this.onChangeZipCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //states are how you create variables in React
    this.state = {
      username: '',
      orgName: '',
      website: '',
      url: '',
      zipCode: '',
    }
  }

  onChangeUsername(e) {
    this.setState({         //method to update username element
      username: e.target.value
    });
  }

  onChangeOrgName(e) {
    this.setState({
      orgName: e.target.value
    });
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value
    });
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    });
  }

  onChangeZipCode(e) {
    this.setState({
      zipCode: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const provider = {
      username: this.state.username,
      orgName: this.state.orgName,
      website: this.state.website,
      url: this.state.url,
      zipCode: this.state.zipCode
    }

    //print to console for testing purposes
    console.log(provider);

    //send provider data to back end
    axios.post('http://localhost:5000/providers/add', provider)
      .then(res => console.log(res.data));


    //navigate to Provider List window
    window.location = '/providers/list';

  }

  render() {
    return (
    <div>
      <h3>Create New Provider</h3>
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
          <label>Organization name: </label>
          <input 
            type="text"
            //required
            className="form-control"
            value={this.state.orgName}
            onChange={this.onChangeOrgName}
            />
        </div>
        <div className="form-group">
          <label>Website?: </label>
          <input 
            type="text"
            //required
            className="form-control"
            value={this.state.website}
            onChange={this.onChangeWebsite}
            />
        </div>
        <div className="form-group">
          <label>Website URL: </label>
          <input 
            type="text"
            //required
            className="form-control"
            value={this.state.url}
            onChange={this.onChangeUrl}
            />
        </div>
        <div className="form-group">
          <label>ZIP code: </label>
          <input 
            type="text"
            required
            className="form-control"
            value={this.state.zipCode}
            onChange={this.onChangeZipCode}
            />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Provider" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}