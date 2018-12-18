import React, { Component } from "react";
import { FormGroup, FormControl, Button, Navbar } from "react-bootstrap";

class SearchBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{" "}
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SearchBar;
