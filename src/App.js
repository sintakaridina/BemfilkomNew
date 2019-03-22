import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from './page/home'
import Single from './page/Single';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Single" component={Single}/>
        
      </Switch>
      </div>
    );
  }
}

export default App;
