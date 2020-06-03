import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Education from './Education';
// import Skills from './Skills';
import NC from '../ncLogo.png'
import cdLogo from '../cardiffLogo.png'


class Cv extends Component {
  render() {
    return (
      <div className='cv'>
        <Grid>
          <Cell col={4}>
            <div style={{ paddingBottom: '10em', paddingLeft: '2em' }}>
              <h2 style={{ paddingTop: '0em', fontFamily: 'Courier New' }}>Keir Betts</h2>
              <h3 style={{ color: '#00FF00', fontFamily: 'Courier New', paddingTop: '0.5em' }}>Programmer</h3>
              {/* <hr style={{ borderTop: '3px solid white', width: '50%' }} /> */}
              <p>I am a confident and committed full stack developer, with an ambition to contribute, learn and flourish at a technology business. I am educated to degree level and keen to start a new challenge.</p>
              {/* <hr style={{ borderTop: '3px solid white', width: '50%' }} /> */}
              <h3 style={{ fontFamily: 'Courier New' }}>Interests</h3>
              <p>I maintain a strong interest in current affairs and politics. I enjoy cycling, running and cricket. I am a voracious reader. I play the classical guitar.</p>
              {/* <hr style={{ borderTop: '3px solid white', width: '50%' }} /> */}
              <h3 style={{ fontFamily: 'Courier New' }}>Locations</h3>
              <p>Leeds and Cambridge</p>
              <a href={'https://northcoders.com/'} target='_blank' rel='noopener noreferrer'>
                <img src={NC} alt='logo' style={{ height: '100px', marginTop: '20px', paddingLeft: '1em' }} />
              </a>
              <a href={'https://www.cardiff.ac.uk/'} target='_blank' rel='noopener noreferrer'>
                <img src={cdLogo} alt='logo' style={{ height: '100px', marginTop: '30px', paddingLeft: '2em' }} />
              </a>
            </div>
          </Cell>
          <Cell className='cv-right-col' col={8}>
            <h2 style={{ fontFamily: 'Courier New', marginLeft: '300px' }}>Education</h2>
            {/* <hr style={{ borderTop: '2px solid white', width: '75%', marginLeft: '200px' }} /> */}
            <Education
              start={'October 2019'}
              end={'March 2020'}
              companyName={'Northcoders'}
              companyDesc={'I am a recent graduate of Northcoders bootcamp, a developer pathway where I gained the skills required to be a full-stack developer. At Northcoders I utilised industry standards such as pair programming and test driven development, working in an agile environment. Developed knowledge of the MVC framework, RESTful APIs, version control and relational databases'
              }

            />
            {/* <hr style={{ borderTop: '2px solid white', width: '75%', marginLeft: '200px' }} /> */}
            <br></br>
            <Education
              start={2016}
              end={2019}
              companyName={'Cardiff University'}
              companyDesc={'At university I achieved a 2:1 History BA hons. I developed my skills, in presentation, communication and analysis, nurturing an ability to critically evaluate work. I researched and produced a dissertation which focused on the impact of technological change in eighteenth-century Europe, in the form of the printing press. My studies saw me hone a natural problem-solving ability, alongside excellent oral and written communication skills.'}
            />
            {/* <hr style={{ borderTop: '3px dotted white' }} />
            <h2 style={{ fontFamily: 'Courier New' }}>Skills</h2>
            <Skills skill='JavaScript' progress={100} />
            <Skills skill='React     ' progress={90} />
            <Skills skill='Express   ' progress={100} />
            <Skills skill='Python    ' progress={50} /> */}
          </Cell>
        </Grid>
      </div >
    );
  }
}

export default Cv;