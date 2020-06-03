import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, } from 'react-mdl'
import '../App.css'
import Keir from '../keirBetts.png'
import Typing from 'react-typing-animation'

//Create a form so I can be emailed directly

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}><h2>Keir Betts</h2>
            <img
              src={Keir}
              alt='avatar'
              style={{ height: '250px', borderRadius: '25px 25px 25px 25px' }}
            />
            <Typing speed={5}>
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>I am a versatile graduate with a track record of working with diverse teams to deliver complex projects on time. I wish to make a significant contribution to helping drive the success of a technology business. </p>
            </Typing>
          </Cell>
          <Cell col={6}>
            <Typing>
              <div>
                <Typing.Delay ms={7000} />
                <h2>Contact Me</h2>
              </div>
            </Typing>
            <div className='contact-list'>
              <List>
                <ListItem>
                  <Typing>
                    <div>
                      <Typing.Delay ms={7800} />
                      <ListItemContent style={{ fontSize: '30px', fontFamily: 'Courier New', color: '#00FF00' }}>
                        <i className='fa fa-phone-square' aria-hidden='true' style={{ marginRight: '10px' }} />
                        07393185075
                  </ListItemContent>
                    </div>
                  </Typing>
                </ListItem>
                <br></br>
                <br></br>
                <ListItem>
                  <Typing>
                    <div>
                      <Typing.Delay ms={8800} />
                      <ListItemContent style={{ fontSize: '30px', fontFamily: 'Courier New', color: '#00FF00' }}>
                        <i className='fa fa-envelope' aria-hidden='true' style={{ marginRight: '10px' }} />
                        keirjbetts@gmail.com
                  </ListItemContent>
                    </div>
                  </Typing>
                </ListItem>
                <br></br>
                <br></br>
                <ListItem>
                  <Typing>
                    <div>
                      <Typing.Delay ms={10500} />
                      <ListItemContent style={{ fontSize: '30px', fontFamily: 'Courier New', color: '#00FF00' }}>
                        <i className='fa fa-linkedin-square' aria-hidden='true' style={{ marginRight: '10px' }} />
                        @keirbetts
                  </ListItemContent>
                    </div>
                  </Typing>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;