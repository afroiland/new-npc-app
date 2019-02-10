import React, { Component } from "react";
// import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ViewContent from "./viewContent";
import Combat from "./combat";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
//   dir: PropTypes.string.isRequired,
// };

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

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
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {/* <Tab label="NPCs" component={Link} to="/npcs" />
              <Tab label="Combat" component={Link} to="/combat" /> */}
            <Tab label="NPCs" />
            <Tab label="Combat" />
          </Tabs>
        </AppBar>
        {/* <Route path="/npcs" component={PageShell(ItemOne)} />
          <Route path="/combat" component={PageShell(ItemTwo)} /> */}
        {/* <Route path="/npcs" component={ViewContent} />
            <Route path="/combat" component={Combat} /> */}
          {value === 0 && <TabContainer><ViewContent /></TabContainer>}
          {value === 1 && <TabContainer><Combat /></TabContainer>}
      </div>
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

export default withStyles(styles, { withTheme: true })(NavTabs);
