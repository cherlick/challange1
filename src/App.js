import React, { Component } from 'react';
import Data from './users.json'
import './App.css';

function searchingFor(search){
  return function(x){
    return x.name.toLowerCase().includes(search.toLowerCase())||!search;
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      data: Data,
      search: ""
    };
  }
  searchField = (e) =>{
    this.setState({search: e.target.value});

  }
  render() {

    return (
      <div className ="App">
        <h1>List of Users</h1>
        <span>Search users: </span>
        <input onChange={this.searchField} ></input>
        <ul className ="App-ul">
          {this.state.data.filter(searchingFor(this.state.search)).map(dataInfo =>
             <li className ="App-li" key={dataInfo}>{dataInfo.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
