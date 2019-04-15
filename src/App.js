import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import { Provider } from 'react-redux';
import store from './store';

// conponents
import TempComponent from './components/temp/TempComponent';
import NotFound from './components/static/NotFound';

import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
              <Switch>
                <Route exact path="/" component={TempComponent} />
                {/* <ProtectedRoute exact path="/temp" component={TempComponent} /> */}
                <Route component={NotFound} />
              </Switch>
        </Router>
        <NotificationContainer/>
      </Provider>
    );
  }
}

export default App;
