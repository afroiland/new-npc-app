import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ViewContent from "./viewContent";
import Combat from "./combat";

class NavTabs extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div style={{height: '100%'}}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="NPCs" />
            <Tab label="PCs" />
            <Tab label="Combat" />
          </Tabs>
        </AppBar>
          {value === 0 && <ViewContent source='NPCs' />}
          {value === 1 && <ViewContent source='PCs' />}
          {value === 2 && <Combat />}
      </div>
    );
  }
}

export default NavTabs;
