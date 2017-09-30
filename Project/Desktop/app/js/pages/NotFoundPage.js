'use strict';

import React         from 'react';
import DocumentTitle from 'react-document-title';

const propTypes = {
  currentUser: React.PropTypes.object
};

let styles = {
    html:{
        color: '#888',
        display: 'table',
        fontFamily: 'sans-serif',
        height: '100%',
        textAlign: 'center',
        width: '100%',
    },
    body:{
        display: 'table-cell',
        verticalAlign: 'middle',
        margin: '2em auto'
    },
    h1:{
        color: '#555',
        fontSize: '2em',
        fontWeight: '400'
    },
    p:{
        margin: '0 auto',
        width: '280px'
    }
};

class NotFoundPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Page Not Found">
          <div style={styles.html}>
              <div style={styles.body}>
                  <h1 style={styles.h1}>Page Not Found</h1>
                  <p style={styles.p}>Sorry, but the page you were trying to view does not exist.</p>
              </div>
          </div>
      </DocumentTitle>
    );
  }

}

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;