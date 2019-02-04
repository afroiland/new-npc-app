import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";

class SearchBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Button onClick={() => this.props.handleClick("A")}>Add to Group A</Button>
            <Button onClick={() => this.props.handleClick("B")}>Add to Group B</Button>
            <Button onClick={() => this.props.handleClick("remove")}>Remove Selected</Button>
            <Button onClick={() => this.props.handleClick("clear")}>Clear All</Button>
            <Button onClick={() => this.props.doAFight()}>Fight</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SearchBar;
