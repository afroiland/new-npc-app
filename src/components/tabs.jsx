import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import SearchBar from "./searchbar";

class NavTabs extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="View">
            Tab 1 content
          </Tab>
          <Tab eventKey={2} title="Generate">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Fight">
            <SearchBar />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default NavTabs;
