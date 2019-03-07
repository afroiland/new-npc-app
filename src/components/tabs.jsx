import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ViewContent from "./viewContent";
import Combat from "./combat";

class NavTabs extends Component {
  state = {
    value: 1
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="NPCs" />
            <Tab label="Combat" />
          </Tabs>
        </AppBar>
          {value === 0 && <ViewContent />}
          {value === 1 && <Combat />}
      </div>
    );
  }
}

export default NavTabs;
