import React, { Component } from 'react';
import Experience from './Experience'
import { Grid } from 'react-mdl'

// Change this and create a unique volunteering section.

class ExperiencePage extends Component {
  render() {
    return (
      <div className='exp-body'>
        <Grid className='exp-grid'>
          <h2 style={{ fontFamily: 'Courier New' }}>Volunteering</h2>
          <Experience
            // start={'February 2016'}
            // end={'May 2016'}
            jobName={'Volunteer'}
            jobDesc={'I am experienced as an international volunteer working for Voluntary Service Overseas. Working in an isolated and deprived commmunity in rural Cambodia, I strived to improve facilities and the standard of education in the area. Part of a diverse team of both British and Cambodian nationals I lived with a local family. I developed organisational and leadership skills, alongside data collection, analysis and report writing, all whilst working alongside local stakeholders.'}
          // jobDesc={'In this period I volunteered in a remote overseas location, helping to deliver a project to support a deprived community. Part of a multicultural team, I developed organisational and leadership skills, as we aimed to address the poor education infrastructure in the area.'}
          />
          {/* <Experience
            start={'2015'}
            end={'2019'}
            jobName={'Retail and Service'}
            jobDesc={'I worked in a busy urban food hall, delivering customer excellence in an often pressurised environment, which included dealing with customer enquires and managing stock and inventory processing, as part of a large team. '}
          /> */}
        </Grid>
      </div>
    );
  }
}

export default ExperiencePage;