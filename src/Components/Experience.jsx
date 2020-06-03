import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Experience extends Component {
  render() {
    return (
      <Grid>
        {/* <Cell col={6}>
          <h4 style={{ fontFamily: 'Courier New', paddingBottom: '5em' }}>{this.props.start}  {this.props.end}</h4>

        </Cell> */}
        <Cell col={6}>
          <h3 style={{ marginTop: '0px', fontFamily: 'Courier New' }}>{this.props.jobName}</h3>
          <p>{this.props.jobDesc}</p>

        </Cell>
      </Grid>
    );
  }
}

export default Experience;