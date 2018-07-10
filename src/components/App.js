import React, { Component } from 'react';
import {Card} from 'primereact/components/card/Card';

import Content from './Content'
import Header from './Header'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: props.data
    }
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
            <Card title="¡Bienvenido!">
                <div>
                  Ésta es una aplicación que prevé apoyar la transmisión y conceptualización de
                  información apropiada para cada comunidad. Busca poder brindar un aprendizaje
                  por medio del poder de la información haciendo hincapié en
                  las comunidades vulnerables del territorio colombiano.
                </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
