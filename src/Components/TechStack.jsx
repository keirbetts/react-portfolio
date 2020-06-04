import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'



//add logos down the sides

class TechStack extends Component {
  render() {
    return (
      <div className='tech-body'>
        <Grid className='tech-grid'>
          <Cell>
            <h2>Techstack</h2>
            <p style={{ width: '100%', margin: 'auto', paddingTop: '1em' }}>JavaScript  |  NodeJS   </p>
            <br></br>
            <div>
              <p>Express  |  Knex  |  Axios  |  npm</p>
            </div>
            <br></br>
            <div>
              <p>React JS  |  React Native  |   Reach Router  |  Redux(wk)</p>
            </div>
            <br></br>
            <p>HTML | CSS  |  PSQL</p>
            <br></br>
            <div>
              <p>
                Supertest  |   Mocha  |   Chai  |   Jest
               </p>
            </div>
            <br></br>
            <div>
              <p>
                GitHub |  Python(wk)</p>
            </div>
            <br></br>
            <p>
              AWS(wk) Lambda | Amplify | Cognito  API Gateway</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}


export default TechStack;