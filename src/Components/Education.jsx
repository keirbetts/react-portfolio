import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <h6 style={{ marginTop: '8px', fontFamily: 'Courier New' }}>{this.props.start} - {this.props.end}</h6>

        </Cell>
        <Cell col={8}>
          <h3 style={{ marginTop: '0px', fontFamily: 'Courier New' }}>{this.props.companyName}</h3>
          <p>{this.props.companyDesc}</p>

        </Cell>
      </Grid>
    );
  }
}

export default Education;