import React, { Component } from 'react';
import Layout from './components/layout/layout';
import './App.css';
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom';
import mainbuilder from './containers/mainBuilder/mainBuilder';

import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class App extends Component {

  render() {
    let layout = null;
    layout = (
      <Layout topbar={this.props.topbar}>
        <Switch>
          <Route path="/" component={mainbuilder} />
        </Switch>
      </Layout>
      );

    return (
      <Router>
          {layout}
      </Router>
    );
  }
}
