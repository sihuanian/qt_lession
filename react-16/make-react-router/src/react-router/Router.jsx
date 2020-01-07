import React, { Component } from 'react';
import Context from './context';

class Router extends Component {
  constructor(props) {
    super(props);
    // Link .push -> url 变化 -> 监听变化
    this.state = {
      location: props.history.lication
    }
    props.history.listen(newLocation => {
      this.setState({
        location: newLocation,
      })
    });
  }

  render() { 
    const { history } = this.props;
    return ( 
      <Context.Provider value={{
        history
      }}
      {
        ...this.props
      }
      >

      </Context.Provider>
    );
  }
}
 
export default Router;