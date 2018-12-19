import React, { Component } from "react";

class Column extends Component {
  render(props) {
    return <p>{this.props.name}</p>;
  }
}

export default Column;
