'use strict';

import React              from 'react';
import Header             from './components/Navigation';

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    console.log('About to mount App');
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query,
      currentUser: this.state.currentUser
    });
  }

  render() {
        return (
            <div>
                {this.renderChildren()}
            </div>
        );
      }

}

App.propTypes = propTypes;

export default App;
