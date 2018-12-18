import React, { Component } from "react";
import Column from "./column";
import { Col, Grid, Row } from "react-bootstrap";

class Columns extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={4}>
              <Column />
            </Col>
            <Col md={4}>
              <Column />
            </Col>
            <Col md={4}>
              <Column />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Columns;
