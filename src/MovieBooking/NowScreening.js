import React, { Component } from "react";

export default class NowScreening extends Component {
  render() {
    let data = this.props.data;
    return (
      <div id="now-screening">
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
