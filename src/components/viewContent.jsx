import React, { Component } from "react";
import Column from "./column";
import { Col, Grid, Row } from "react-bootstrap";

class ViewContent extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={6}>
              <Column name="NPCs" />
            </Col>
            <Col md={6}>
              <Column name="Details" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ViewContent;
