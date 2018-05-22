import React, { Component } from 'react';

import Content from './Content'
import Header from './Header'
import Material from './Material'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="ui-g">
          <div className="ui-g-12 ui-md-4">
            <Content />
          </div>
          <div className="ui-g-12 ui-md-8 ui-g-nopad">
            <Material />
          </div>
          <div className="ui-g-12">
            Footer
          </div>
        </div>
      </div>
    );
  }
}

export default App;
