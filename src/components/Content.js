import React, { Component } from 'react';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

import Module from './Module';

class Content extends Component {

  constructor(props){
    super(props);
    this.data = props.data
  }

  render() {
    const { modules } = this.data;
    return (
      <div>
        <Accordion activeIndex={0}>
        {
          modules.map(function(module_data, index){
            return (
              <AccordionTab key={index} header={"Módulo " + (index + 1)}>
                <Module data={module_data} index={index + 1} />
              </AccordionTab>
            )
          })
        }
        </Accordion>
      </div>
    );
  }
}

export default Content;
