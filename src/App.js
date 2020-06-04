import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation'



// Create separate education and experience sections

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className='header-color' title={
          <Typing>
            <Link style={{ textDecoration: 'none', color: '#00FF00', fontFamily: 'Courier New' }} to='/'>Keir Betts</Link>
          </Typing>
        } scroll>
          <Navigation className='nav'>
            <Link to='/' style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Home</Link>
            <Link to="/projects" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Projects</Link>
            <Link to="/techstack" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Techstack</Link>
            <Link to="/contact" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Contact</Link>
            <Link to="/education" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Education</Link>
            <Link to="/volunteer" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Volunteering</Link>
          </Navigation>
        </Header>
        <Drawer title="Keir Betts" style={{ backgroundColor: 'black', color: '#00FF00', fontFamily: 'Courier New', border: 'black' }}>
          <Navigation style={{ backgroundColor: 'black' }}>
            <Link to='/' style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Home</Link>
            <Link to="/projects" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Projects</Link>
            <Link to="/techstack" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Techstack</Link>
            <Link to="/contact" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Contact</Link>
            <Link to="/education" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Education</Link>
            <Link to="/volunteer" style={{ color: '#00FF00', fontFamily: 'Courier New', fontSize: '15px' }}>Volunteering</Link>
            <div className='social-links'>
              <a href='https://www.linkedin.com/in/keir-betts-201b55189/' target='_blank' rel='noopener noreferrer'>
                <i className='fa fa-linkedin-square' aria-hidden='true' />
              </a>
              <a href='https://github.com/keirbetts' target='_blank' rel='noopener noreferrer'>
                <i className='fa fa-github-square' aria-hidden='true' />
              </a>
            </div>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div >
  );
}

export default App;
