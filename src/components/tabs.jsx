import React, { Component } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import SearchBar from "./searchbar";
import Columns from "./columns";
import ViewContent from "./viewContent";
// import GenerateContent from "./generateContent";

class NavTabs extends Component {
  render() {
    return (
      <div>
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>NPCs</Tab>
            {/* <Tab>Generate</Tab> */}
            <Tab>Combat</Tab>
          </TabList>
          <TabPanel>
            <ViewContent />
          </TabPanel>
          {/* <TabPanel>
            <GenerateContent />
          </TabPanel> */}
          <TabPanel>
            <div>
              <SearchBar />
              <Columns />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default NavTabs;
