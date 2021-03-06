import React, { Component } from "react";

export default class ComingSoon extends Component {
  render() {
    let data = this.props.data;
    return (
      <>
        <h3>{this.props.title}</h3>
        <ul>
          {data.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </>
    );
  }
}
