import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={6}>
          <h4>{this.props.img}</h4>
          <h4>{this.props.img2}</h4>
          <h4>{this.props.img3}</h4>
          <h4>{this.props.img4}</h4>
          {/* Add images or more two more pictures?? */}
        </Cell>
        <Cell col={5}>
          <ul>
            <li style={{ marginRight: '2em', position: 'relative', marginTop: '-70px' }}>{this.props.li1}</li>
            <br></br>
            <li>{this.props.li2}</li>
            <br></br>
            <li>{this.props.li3}</li>
            <br></br>
            <li>{this.props.li4}</li>
            <br></br>
            <li>{this.props.li5}</li>
            <br></br>
            <li>{this.props.li6}</li>
            <br></br>
            <li>{this.props.li7}</li>
            <br></br>
            <li>{this.props.li8}</li>
          </ul>
        </Cell>
      </Grid >
    );
  }
}

export default Experience;