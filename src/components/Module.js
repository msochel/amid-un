import React, { Component } from 'react';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

import Unit from './Unit';

class Module extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      index: props.index
    }
  }

  render() {
    const { data, index } = this.state
    const { description, units } = data
    const module_index = index
    return (
      <div>
        { description }
        <Accordion activeIndex={0}>
        {
          units.map(function(unit_data, index){
            return (
              <AccordionTab key={index} header={"Unidad" + (index + 1)}>
                <Unit
                  data={unit_data} index={index + 1}
                  module={{
                    index: module_index,
                    description: description
                  }}
                />
              </AccordionTab>
            )
          })
        }
        </Accordion>
      </div>
    );
  }
}

export default Module;
