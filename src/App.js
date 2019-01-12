import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home/Home';
import Store from './views/store/Store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


library.add(fas);
library.add(faHospital);
library.add(faCartPlus);


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/store" component={Store} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
