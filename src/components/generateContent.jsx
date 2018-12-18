import React, { Component } from "react";
import Column from "./column";
import { Button, Col, Grid, Row } from "react-bootstrap";

class GenerateContent extends Component {
  render() {
    return (
      <div>
        <Button>Generate</Button>
        <Button>Save</Button>
        <Grid>
          <Row>
            <Col md={12}>
              <Column name="New NPC" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GenerateContent;
