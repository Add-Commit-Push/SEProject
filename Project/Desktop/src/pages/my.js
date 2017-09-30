// npm packages
import React from 'react';

export default class MyStuff extends React.Component {
  constructor() {
    super();

    this.state = {
      series: [],
    };

    // trigger list update
    // PluginManager.getMySeries();
  }

  // componentDidMount() {
  // }
  //
  // componentWillUnmount() {
  // }

  render() {
    return (
      <div>
        <div>I might be in luck</div>
      </div>
    );
  }
}
