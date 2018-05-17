import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react'

import Section from './Section';

class Module extends Component {
  constructor (props){
    super(props);
    this.description = props.description
    this.items = [
      { title: 'Sección 1',
        content: { key:'sec1', content: <Section title="Sección 1" /> }
      },
      { title: 'Sección 2',
        content: { key:'sec2', content: <Section title="Sección 2" /> }
      },
      { title: 'Sección 3',
        content: { key:'sec3', content: <Section title="Sección 3" /> }
      },
      { title: 'Sección 4',
        content: { key:'sec4', content: <Section title="Sección 4" /> }
      }
    ]
  }

  render() {
    return (
      <div>
        { this.description }
        <Accordion defaultActiveIndex={0} panels={this.items} styled/>
      </div>
    );
  }
}

export default Module;
