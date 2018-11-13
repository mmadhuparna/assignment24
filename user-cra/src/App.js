import React, { Component } from 'react';
import './App.css';
import UserList from "./UserList";
//Main App Component containing the child non-functional UserList Component
class App extends Component {
  render() {
    return (
      <div style= {{textAlign:'center'}}>
        <h1 style = {{borderBottom: '1px solid black'}}>User List</h1>
        <UserList />
      </div>
    );
  }
}

export default App;