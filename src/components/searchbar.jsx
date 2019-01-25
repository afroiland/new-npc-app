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
            <Button>Add to Group A</Button>
            <Button>Add to Group B</Button>
            <Button>Fight</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SearchBar;
