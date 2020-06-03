import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button } from 'react-mdl'

class Proj extends Component {
  state = { activeTab: 0 }

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <div className='proj-grid'>
          <Card shadow={5} style={{
            minWidth: '450', margin: 'auto', borderRadius: '50px 50px 50px 50px'
          }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover', fontFamily: 'Courier New' }}>
            </CardTitle>
            <CardTitle style={{ color: '#00FF00', fontFamily: 'Courier New', background: '#0F2027', paddingLeft: '2em' }}>NC News React Project</CardTitle>
            <div style={{
              background: '#0F2027'
              , textAlign: 'center'
            }}>
              <CardActions>
                <Button href={"https://github.com/keirbetts/keir-betts-nc-news-fe"} target='_blank' rel='noopener noreferrer' style={{
                  color: '#00FF00',
                  fontFamily: 'Courier New',
                  fontSize: '20px',
                  background: 'black',
                  borderRadius: '20px 20px 20px 20px',
                  marginRight: '5px'
                }}>
                  Github
        </Button>
                <Button href={"https://keir-betts-nc-news.netlify.app/"} target='_blank' rel='noopener noreferrer'
                  style={{
                    color: '#00FF00',
                    fontFamily: 'Courier New',
                    fontSize: '20px',
                    background: 'black',
                    borderRadius: '20px 20px 20px 20px',
                    marginLeft: '5px'
                  }} >
                  Hosted
        </Button>
              </CardActions>
            </div>
          </Card >
          <Card shadow={5} style={{
            minWidth: '450', margin: 'auto', borderRadius: '50px 50px 50px 50px'
          }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover', fontFamily: 'Courier New' }}>
            </CardTitle>
            <CardTitle style={{ color: '#00FF00', fontFamily: 'Courier New', background: '#0F2027', paddingLeft: '3em' }}>Student Tracker React</CardTitle>
            <div style={{
              background: '#0F2027'
              , textAlign: 'center'
            }}>
              <CardActions border>
                <Button href={"https://github.com/keirbetts/student-tracker"} target='_blank' rel='noopener noreferrer' style={{
                  color: '#00FF00',
                  fontFamily: 'Courier New',
                  fontSize: '20px',
                  background: 'black',
                  borderRadius: '20px 20px 20px 20px',
                }}>
                  Github
        </Button>
              </CardActions>
            </div>
          </Card >
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className='proj-grid'>
          <Card shadow={5} style={{
            minWidth: '450', margin: 'auto', borderRadius: '50px 50px 50px 50px'
          }}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://codeandunicorns.com/wp-content/uploads/2017/11/node-express.png) center / cover', fontFamily: 'Courier New' }}>
            </CardTitle>
            <CardTitle style={{ color: '#00FF00', fontFamily: 'Courier New', background: '#0F2027', paddingLeft: '2em' }}>NC News Express Server</CardTitle>
            <div style={{
              background: '#0F2027'
              , textAlign: 'center'
            }}>
              <CardActions border>
                <Button href={"https://github.com/keirbetts/keir-betts-nc-news-be"} target='_blank' rel='noopener noreferrer' style={{
                  color: '#00FF00',
                  fontFamily: 'Courier New',
                  fontSize: '20px',
                  background: 'black',
                  borderRadius: '20px 20px 20px 20px',
                }}>
                  Github
        </Button>
              </CardActions>
            </div>
          </Card >

        </div>

      )
    } else if (this.state.activeTab === 2) {
      return <div className='proj-grid'>
        <Card shadow={5} style={{
          minWidth: '450', margin: 'auto', borderRadius: '50px 50px 50px 50px'
        }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.sketchappsources.com/resources/source-image/python-logo.png) center / cover', fontFamily: 'Courier New' }}>
          </CardTitle>
          <CardTitle style={{ color: '#00FF00', fontFamily: 'Courier New', background: '#0F2027', paddingLeft: '3em' }}>Python Space Invaders</CardTitle>
          <div style={{
            background: '#0F2027'
            , textAlign: 'center'
          }}>
            <CardActions>
              <Button href={"https://github.com/keirbetts/python-coronavirus-space-invaders"} target='_blank' rel='noopener noreferrer' style={{
                color: '#00FF00',
                fontFamily: 'Courier New',
                fontSize: '20px',
                background: 'black',
                borderRadius: '20px 20px 20px 20px',
              }}>
                Github
        </Button>
            </CardActions>
          </div>
        </Card >
        <Card shadow={5} style={{
          minWidth: '450', margin: 'auto', borderRadius: '50px 50px 50px 50px'
        }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.sketchappsources.com/resources/source-image/python-logo.png) center / cover', fontFamily: 'Courier New' }}>
          </CardTitle>
          <CardTitle style={{ color: '#00FF00', fontFamily: 'Courier New', background: '#0F2027', paddingLeft: '4em' }}>Python Pong Game</CardTitle>
          <div style={{
            background: '#0F2027'
            , textAlign: 'center'
          }}>
            <CardActions>
              <Button href={"https://github.com/keirbetts/python-pong-game"} target='_blank' rel='noopener noreferrer' style={{
                color: '#00FF00',
                fontFamily: 'Courier New',
                fontSize: '20px',
                background: 'black',
                borderRadius: '20px 20px 20px 20px',
              }}>
                Github
        </Button>
            </CardActions>
          </div>
        </Card >
        <Card shadow={5} style={{
          minWidth: '450', margin: 'auto', borderRadius: '50px 50px 50px 50px'
        }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.sketchappsources.com/resources/source-image/python-logo.png) center / cover', fontFamily: 'Courier New' }}>
          </CardTitle>
          <CardTitle style={{ color: '#00FF00', fontFamily: 'Courier New', background: '#0F2027', paddingLeft: '2em' }}>Automated Web Search</CardTitle>
          <div style={{
            background: '#0F2027'
            , textAlign: 'center'
          }}>
            <CardActions>
              <Button href={"https://github.com/keirbetts/python-web-search"} target='_blank' rel='noopener noreferrer' style={{
                color: '#00FF00',
                fontFamily: 'Courier New',
                fontSize: '20px',
                background: 'black',
                borderRadius: '20px 20px 20px 20px',
              }}>
                Github
        </Button>
            </CardActions>
          </div>
        </Card >
      </div>
    }
    else if (this.state.activeTab === 3) {
      return <div>
        <Card shadow={5} style={{
          minWidth: '450', margin: 'auto', borderRadius: '50px 50px 50px 50px'
        }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/4/4d/Moments2.jpg) center / cover', fontFamily: 'Courier New' }}>
          </CardTitle>
          <CardTitle style={{ color: '#00FF00', fontFamily: 'Courier New', background: '#0F2027', paddingLeft: '3em' }}>Moments Team Project</CardTitle>
          <div style={{
            background: '#0F2027'
            , textAlign: 'center'
          }}>
            <CardActions>
              <Button href={"https://github.com/smegbot1/Project-Moments"} target='_blank' rel='noopener noreferrer' style={{
                color: '#00FF00',
                fontFamily: 'Courier New',
                fontSize: '20px',
                background: 'black',
                borderRadius: '20px 20px 20px 20px',
              }}>
                Github
        </Button>
            </CardActions>
          </div>
        </Card >
      </div>
    } else if (this.state.activeTab === 4) {
      return <div>
        <Card shadow={5} style={{
          minWidth: '450', margin: 'auto', borderRadius: '50px 50px 50px 50px'
        }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://opencollective-production.s3.us-west-1.amazonaws.com/723c9030-a96a-11e9-95d0-bfaeed3347b0.png) center / cover', fontFamily: 'Courier New' }}>
          </CardTitle>
          <CardTitle style={{ color: '#00FF00', fontFamily: 'Courier New', background: '#0F2027', paddingLeft: '3em' }}>MEVN Full Stack RPG</CardTitle>
          <div style={{
            background: '#0F2027'
            , textAlign: 'center'
          }}>
            <CardActions>
              <Button href={"https://github.com/keirbetts/MEVN-project-one"} target='_blank' rel='noopener noreferrer' style={{
                color: '#00FF00',
                fontFamily: 'Courier New',
                fontSize: '20px',
                background: 'black',
                borderRadius: '20px 20px 20px 20px',
              }}>
                Github
        </Button>
            </CardActions>
          </div>
        </Card >
      </div>
    } else if (this.state.activeTab === 5) {
      return <div>
        <Card shadow={5} style={{
          minWidth: '450', margin: 'auto', borderRadius: '50px 50px 50px 50px'
        }}>
          <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://sujanbyanjankar.com.np/wp-content/uploads/2019/02/react-redux.png) center / cover', fontFamily: 'Courier New' }}>
          </CardTitle>
          <CardTitle style={{ color: '#00FF00', fontFamily: 'Courier New', background: '#0F2027', paddingLeft: '3em' }}>First Redux Project</CardTitle>
          <div style={{
            background: '#0F2027'
            , textAlign: 'center'
          }}>
            <CardActions>
              <Button href={"https://github.com/keirbetts/Redux-first-steps"} target='_blank' rel='noopener noreferrer' style={{
                color: '#00FF00',
                fontFamily: 'Courier New',
                fontSize: '20px',
                background: 'black',
                borderRadius: '20px 20px 20px 20px',
              }}>
                Github
        </Button>
            </CardActions>
          </div>
        </Card >
      </div>
    }
  }



  render() {
    return (
      <div className='category-tabs'>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
          <Tab style={{ color: '#00FF00', fontFamily: 'Courier New' }}>React</Tab>
          <Tab style={{ color: '#00FF00', fontFamily: 'Courier New' }}>Express</Tab>
          <Tab style={{ color: '#00FF00', fontFamily: 'Courier New' }}>Python</Tab>
          <Tab style={{ color: '#00FF00', fontFamily: 'Courier New' }}>Team Project</Tab>
          <Tab style={{ color: '#00FF00', fontFamily: 'Courier New' }}>MEVN</Tab>
          <Tab style={{ color: '#00FF00', fontFamily: 'Courier New' }}>Redux</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Proj;