import React, { Component } from 'react';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

import Module from './Module';

class Content extends Component {

  render() {
    return (
      <div>
        <Accordion activeIndex={0}>
          <AccordionTab header="Módulo 1">
            <Module description="Descripción del Módulo 1" />
          </AccordionTab>
          <AccordionTab header="Módulo 2">
            <Module description="Descripción del Módulo 2" />
          </AccordionTab>
          <AccordionTab header="Módulo 3">
            <Module description="Descripción del Módulo 3" />
          </AccordionTab>
          <AccordionTab header="Módulo 4">
            <Module description="Descripción del Módulo 4" />
          </AccordionTab>
        </Accordion>
      </div>
    );
  }
}

export default Content;
