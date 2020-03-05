import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ViewContent from "./viewContent";
import Combat from "./combat";
import Initiative from "./initiative";

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
            <Tab label="NPCs" style={{minWidth: '175px'}} />
            <Tab label="PCs" style={{minWidth: '175px'}} />
            <Tab label="Combat" style={{minWidth: '175px'}} />
            <Tab label="Initiative" style={{minWidth: '175px'}} />
          </Tabs>
        </AppBar>
          {value === 0 && <ViewContent source='NPCs' />}
          {value === 1 && <ViewContent source='PCs' />}
          {value === 2 && <Combat />}
          {value === 3 && <Initiative />}
      </div>
    );
  }
}

export default NavTabs;
