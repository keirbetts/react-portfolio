import React, { Component } from 'react';
import Experience from './Experience'
import { Grid } from 'react-mdl'
import vso from '../vsoLogo.png'
import camboSchool from '../camboSchool.jpg'
import camboTeam from '../camboTeam.jpg'
import cambo from '../cambo.jpg'
import dance from '../dance.jpg'

// Change this and create a unique volunteering section.

class ExperiencePage extends Component {
  render() {
    return (
      <div className='exp-body'>
        <Grid className='exp-grid'>
          <a href={'https://www.vsointernational.org/volunteering/youth'} target='_blank' rel='noopener noreferrer'>
            <img style={{ position: 'relative', bottom: '-620px', left: '54em', height: '100px' }}
              src={vso}
              alt='avatar'
            />
          </a>
          <h2 style={{ fontFamily: 'Courier New', marginRight: '0px', position: 'relative', top: '-60px', left: '-130px' }}>Volunteering</h2>
          <Experience
            img={<img style={{ height: '225px', borderRadius: '50px 0px 0px 0px', marginRight: '10em', marginLeft: '0em', top: '-80px', position: 'relative' }}
              src={camboSchool}
              alt='avatar' />}
            img2={<img style={{ height: '225px', borderRadius: '0px 50px 0px 0px', marginRight: '0em', marginLeft: '12.5em', top: '-329px', position: 'relative' }}
              src={camboTeam}
              alt='avatar' />}
            img3={<img style={{ height: '225px', borderRadius: '0px 0px 0px 50px', marginRight: '0em', marginLeft: '0em', top: '-353px', position: 'relative' }}
              src={cambo}
              alt='avatar' />}
            img4={<img style={{ height: '225px', borderRadius: '0px 0px 50px 0px', marginLeft: '12.5em', top: '-602px', position: 'relative', width: '48.5%' }}
              src={dance}
              alt='avatar' />}
            li1={'I am experienced as an international volunteer working for Voluntary Service Overseas.'}
            li2={'I have lived and worked in an isolated commmunity in rural Cambodia.'}
            li3={'Strove to improve facilities and address the poor standard of education in the area.'}
            li4={'Part of a diverse team of both British and Cambodian nationals, I lived with a local family.'}
            li5={'Developed organisational and leadership skills, running workshops in the community.'}
            li6={'Collected and analysed, issuing findings by authoring reports.'}
            li7={'Worked with local and national stakeholders to identify major issues.'}
            li8={'Created a grounding for further progress in the area over the next two years.'}
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