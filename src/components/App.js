import React, { Component } from 'react';

import Content from './Content'
import Header from './Header'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: props.data
    }
    console.log(this.state.data)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="ui-g">
          <div id="content" className="ui-g-12 ui-md-4">
            <Content data={this.state.data} />
          </div>
          <div id="material" className="ui-g-12 ui-md-8">
            Mensaje de bienvenida(?)
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
