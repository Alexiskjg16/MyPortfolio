import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import NavBar from './NavBar';
import HomeCoding from './CodingFiles/HomeCoding';
import HomeBlog from './BlogPosts/HomeBlog';
import Sept518 from './BlogPosts/Sept518';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <section>
         <NavBar/>
          </section>
          <Switch>
            <Route path="/HomePage" exact component={HomePage} />
            <Route path="/AboutMe" exact component={AboutMe} />
            <Route path="/CodingExamples" exact component={HomeCoding} />
            <Route path="/BlogPosts" exact component={HomeBlog} />
            <Route path="/BlogPosts/Sept518" exact component={Sept518} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
