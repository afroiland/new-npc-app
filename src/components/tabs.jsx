import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import SearchBar from "./searchbar";
import Columns from "./columns";
import ViewContent from "./viewContent";
import GenerateContent from "./generateContent";

class NavTabs extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="View">
            <ViewContent />
          </Tab>
          <Tab eventKey={2} title="Generate">
            <GenerateContent />
          </Tab>
          <Tab eventKey={3} title="Fight">
            <SearchBar />
            <Columns />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default NavTabs;
