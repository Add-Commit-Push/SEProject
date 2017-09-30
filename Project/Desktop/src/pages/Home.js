// npm packages
import React from 'react';

let styles = {
  logo:{
    width: '250px',
    height: 'auto'
  },
  icon:{
    height: '60px',
    width: '120px',
    position: 'relative',
    float: 'left',
      backgroundColor: 'red'
  }
};
export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  // componentDidMount() {
  // }

  // componentWillUnmount() {
  // }

  render() {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img style={styles.logo} src="assets/images/logo.svg" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="tile purple">
                <h3 className="title">Purple Tile</h3>
                <p>Hello Purple, this is a colored tile.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tile red">
                <h3 className="title">Red Tile</h3>
                <p>Hello Red, this is a colored tile.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tile orange">
                <h3 className="title">Orange Tile</h3>
                <p>Hello Orange, this is a colored tile.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="tile green">
                <h3 className="title">Green Tile</h3>
                <p>Hello Green, this is a colored tile.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="tile blue">
                <h3 className="title">Blue Tile</h3>
                <p>Hello Blue, this is a colored tile.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}
