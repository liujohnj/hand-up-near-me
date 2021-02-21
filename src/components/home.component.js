import React, { Component } from 'react';
import { Input } from "mdbreact";

const providersList = [
  {"username" : "alpha"},
  {"username" : "bravo"},
  {"username" : "charlie"}
]

export default class Home extends Component {
  
  state = {
    search : ""
  }

  renderProvider = provider => {
    const {search} = this.state;
    var username = provider.username.toLowerCase()
  
    return (provider.username);

  };

  onchange = e =>{
    this.setState({ search : e.target.value });
  };

  render() {
    const {search} = this.state;
    const filteredProviders = providersList.filter(provider => {
      <p>Nope</p>;
      return provider.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
 
 
    return (
    <div>
      <h3>Welcome.</h3>
      <br></br>
      <h4>Search for Providers</h4>
      <Input label="Enter Provider username" icon="search" onChange={this.onchange}/>
      <br></br>
      <div>
        {filteredProviders.map(provider => {
          <p>Yep</p>;
          return this.renderProvider(provider);
        })}
      </div>
    </div>
    )
  }
}