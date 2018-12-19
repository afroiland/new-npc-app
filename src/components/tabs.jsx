import React, { Component } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import SearchBar from "./searchbar";
import Columns from "./columns";
import ViewContent from "./viewContent";
import GenerateContent from "./generateContent";

class NavTabs extends Component {
  render() {
    console.log("tabs rendering");
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>View</Tab>
            <Tab>Generate</Tab>
            <Tab>Fight</Tab>
          </TabList>
          <TabPanel>
            <ViewContent />
          </TabPanel>
          <TabPanel>
            <GenerateContent />
          </TabPanel>
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
