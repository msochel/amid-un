import React, { Component } from 'react';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

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
        <Accordion activeIndex={0}>
          <AccordionTab header="Tema 1">
            <Section/>
          </AccordionTab>
          <AccordionTab header="Tema 2" disabled>
            <Section/>
          </AccordionTab>
          <AccordionTab header="Tema 3" disabled>
            <Section/>
          </AccordionTab>
          <AccordionTab header="Tema 4" disabled>
            <Section/>
          </AccordionTab>
        </Accordion>
      </div>
    );
  }
}

export default Module;
