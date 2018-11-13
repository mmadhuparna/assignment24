import React from "react";
import "./App.css";
import Users from "./Users";

//UserList component containing a child functional component Users
class UserList extends React.Component {
  constructor() {
    super();
    this.userlist = [
      { Name: "Sachin", Age: "10" },
      { Name: "Som", Age: "20" },
      { Name: "Suraj", Age: "30 " },
      { Name: "Saurav", Age: "25" },
      { Name: "Rohan", Age: "28" }
    ];
  }
  //render UserList by callin Users
  render() {
    return (
      <div>
        <ul style = {{listStyle : 'none'}}>
          {this.userlist.map(item => <Users name={item.Name} age={item.Age} />)}
        </ul>
        <br />
      </div>
    );
  }
}

export default UserList;