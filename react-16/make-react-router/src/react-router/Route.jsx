import React, { Component } from 'react';
import { pathToRegexp } from 'path-to-regexp';
import Context from './context';

class Route extends Component {
  // path component
  // location
  render() { 
    const props = this.props;
    return ( 
      <Context.Consumer>
        {
          (context) => {
            const location = context.history.location;
            const match = matchPath(location.pathname, props);
            return (
              <>
                { match && props.children }
              </>
            )
          }
        }
      </Context.Consumer>
    );
  }
}
 
function matchPath(pathname, option) {
  // { path exact }
  const { end: exact, path, sensitive = false, strict = false } = option;
  // 由Route 生成正则表达式
  const regexp = pathToRegexp(path, [], { exact, sensitive, strict })
  return regexp.exec(pathname)
}

export default Route;