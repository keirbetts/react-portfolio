import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Typing from 'react-typing-animation'


//add logos down the sides

class TechStack extends Component {
  render() {
    return (
      <div className='tech-body'>
        <Grid className='tech-grid'>
          <Cell>
            {/* <Typing> */}
            <h2>Techstack</h2>
            {/* </Typing>
            <Typing speed={10}> */}
            <p style={{ width: '100%', margin: 'auto', paddingTop: '1em' }}>JavaScript  |  NodeJS   </p>
            {/* </Typing> */}
            <br></br>
            {/* <hr style={{ borderTop: '3px solid white', width: '100%' }} /> */}
            {/* <Typing> */}
            <div>
              <Typing.Speed ms={10} />
              <p>Express  |  Knex  |  Axios  |  npm</p>
            </div>
            {/* </Typing> */}
            <br></br>
            {/* <hr style={{ borderTop: '3px solid white', width: '100%' }} /> */}
            {/* <Typing> */}
            <div>
              <Typing.Speed ms={10} />
              <p>React JS  |  React Native  |   Reach Router  |  Redux(wk)</p>
            </div>
            {/* </Typing> */}
            <br></br>
            {/* <hr style={{ borderTop: '3px solid white', width: '100%' }} /> */}
            {/* <Typing > */}
            <Typing.Speed ms={10} />
            <p>HTML | CSS  |  PSQL</p>
            {/* </Typing> */}
            <br></br>
            {/* <hr style={{ borderTop: '3px solid white', width: '100%' }} /> */}
            {/* <Typing> */}
            <div>
              {/* <Typing.Speed ms={10} /> */}
              <p>
                Supertest  |   Mocha  |   Chai  |   Jest
               </p>
            </div>
            {/* </Typing> */}
            <br></br>
            {/* <hr style={{ borderTop: '3px solid white', width: '100%' }} /> */}
            {/* <Typing > */}
            <div>
              {/* <Typing.Speed ms={10} /> */}
              <p>
                GitHub |  Python(wk)</p>
            </div>
            {/* </Typing> */}
            <br></br>
            {/* <hr style={{ borderTop: '3px solid white', width: '100%' }} /> */}
            {/* <Typing>
              <Typing.Speed ms={10} /> */}
            <p>
              AWS(wk) Lambda | Amplify | Cognito  API Gateway</p>
            {/* </Typing> */}
          </Cell>
        </Grid>
      </div >
    );
  }
}


export default TechStack;