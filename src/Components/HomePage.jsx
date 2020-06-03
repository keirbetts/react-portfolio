import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import '../App.css'
import Typing from 'react-typing-animation'


class HomePage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='home-grid'>
          <Cell col={12}>
            <div className='banner-text'>
              <Typing>
                <div>
                  <Typing.Delay ms={1000} />
                  <h1>Full Stack Developer</h1>
                </div>
              </Typing>
              <Typing >
                <div>
                  <Typing.Delay ms={1000} />
                  <h2 style={{ color: '#00FF00' }}>......................
              </h2>
                </div>
              </Typing>
              <Typing speed={100}>
                <div>
                  <Typing.Delay ms={2500} />
                  <Typing.Speed ms={5} />
                  <h3>React | React Native | JavaScript |  NodeJS | Express | Python | HTML/CSS</h3>
                </div>
              </Typing >
            </div>
          </Cell>
        </Grid>

      </div >
    );
  }
}

export default HomePage;