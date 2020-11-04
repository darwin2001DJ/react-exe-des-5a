import React, { Component } from "react";

export default class NavHeader extends Component {
  render() {
    let data = this.props.data;
    return (
      <>
        <div id="header">
          <nav>
            {data.map((e) => (
              <a>{e}</a>
            ))}
          </nav>
        </div>
      </>
    );
  }
}
