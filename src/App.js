import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import HomeCoding from './CodingFiles/HomeCoding';
import HomeBlog from './BlogPosts/HomeBlog';
import Sept518 from './BlogPosts/Sept518';
import Sept1118 from './BlogPosts/Sept1118';
import Sept2418 from './BlogPosts/Sept2418';
import Oct2218 from './BlogPosts/Oct2218';
import Resume from './Resume';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/HomePage" exact component={HomePage} />
            <Route path="/AboutMe" exact component={AboutMe} />
            <Route path="/CodingExamples" exact component={HomeCoding} />
            <Route path="/BlogPosts" exact component={HomeBlog} />
            <Route path="/BlogPosts/Sept518" exact component={Sept518} />
            <Route path="/BlogPosts/Sept1118" exact component={Sept1118} />
            <Route path="/BlogPosts/Sept2418" exact component={Sept2418} />
            <Route path="/BlogPosts/Oct2218" exact component={Oct2218} />
            <Route path="/Resume" exact component={Resume} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
