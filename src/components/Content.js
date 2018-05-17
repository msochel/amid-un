import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react'

import Module from './Module';

class Content extends Component {
  constructor (props){
    super(props);
    this.items = [
      { title: 'Módulo 1',
        content: { key:'mod1', content: <Module description="Descripción del Módulo 1" /> }
      },
      { title: 'Módulo 2',
        content: { key:'mod2', content: <Module description="Descripción del Módulo 2" /> }
      },
      { title: 'Módulo 3',
        content: { key:'mod3', content: <Module description="Descripción del Módulo 3" /> }
      },
      { title: 'Módulo 4',
        content: { key:'mod4', content: <Module description="Descripción del Módulo 4" /> }
      }
    ]
  }

  render() {
    return (
      <div>
        <Accordion defaultActiveIndex={0} panels={this.items} styled/>
      </div>
    );
  }
}

export default Content;
