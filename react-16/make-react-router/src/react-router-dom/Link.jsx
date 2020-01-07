import React, { Component } from 'react';
import { RouterContext } from '../react-router';

class Link extends Component {
  render() { 
    return ( 
      <RouterContext.Consumer>
        {
          context => {
            const { history } = context;
            return (
              <a href={this.props.to}
                onClick={
                  (e) => {
                    e.preventDefault();
                    history.push(this.props.to);
                  }
                }>
                { this.props.children }
              </a>
            )
          }
        }
      </RouterContext.Consumer>
     );
  }
}
 
export default Link;