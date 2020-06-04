import React from 'react';
import HomePage from './HomePage';
import { Switch, Route } from 'react-router-dom'
import TechStack from './TechStack';
import Contact from './Contact';
import Proj from './Proj';
import Cv from './Cv';
import ExperiencePage from './ExperiencePage';


const Main = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/techstack' component={TechStack} />
    <Route path='/contact' component={Contact} />
    <Route path='/projects' component={Proj} />
    <Route path='/education' component={Cv} />
    <Route path='/volunteer' component={ExperiencePage} />
  </Switch>
)

export default Main;