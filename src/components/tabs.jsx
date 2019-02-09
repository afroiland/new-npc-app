import React, { Component } from "react";
// import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import ViewContent from "./viewContent";
import Combat from "./combat";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class NavTabs extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <AppBar>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="NPCs" component={Link} to="/npcs" />
              <Tab label="Combat" component={Link} to="/combat" />
            </Tabs>
          </AppBar>
          <Switch>
            {/* <Route path="/npcs" component={PageShell(ItemOne)} />
          <Route path="/combat" component={PageShell(ItemTwo)} /> */}
            <Route path="/npcs" component={ViewContent} />
            <Route path="/combat" component={Combat} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// const PageShell = (Page, previous) => {
//   return props => (
//     <div className="page">
//       <ReactCSSTransitionGroup
//         transitionAppear={true}
//         transitionAppearTimeout={600}
//         transitionEnterTimeout={600}
//         transitionLeaveTimeout={600}
//         transitionName={props.match.path === "/one" ? "SlideIn" : "SlideOut"}
//       >
//         {console.log(props)}
//         <Page {...props} />
//       </ReactCSSTransitionGroup>
//     </div>
//   );
// };

export default NavTabs;
