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
              <Column name="Group A" />
            </Col>
            <Col md={4}>
              <Column name="Group B" />
            </Col>
            <Col md={4}>
              <Column name="Combat Log" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Columns;
