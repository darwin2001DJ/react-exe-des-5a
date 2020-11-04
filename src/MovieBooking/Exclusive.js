import React, { Component } from "react";

export default class Exclusive extends Component {
  render() {
    let data = this.props.data;
    return (
      <div id="exclusive">
        <h3>{this.props.title}</h3>
        <ul>
          {data.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    );
  }
}
