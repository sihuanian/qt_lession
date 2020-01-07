import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import Router from '../react-router/Router';

class BrowserRouter extends Component {
  // 路由的信息 { location, listen, pushState, replaceState, go, back }
  // html5 history API
  history = createBrowserHistory()

  render() {
    return (
      <Router history={this.history} {...this.props}></Router>
    )
  }
}

export default BrowserRouter;