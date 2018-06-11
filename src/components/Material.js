import React, { Component } from 'react';

import {TabView,TabPanel} from 'primereact/components/tabview/TabView';
import {Panel} from 'primereact/components/panel/Panel';


class Material extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      unit_index: props.unit_index,
      module: props.module
    }
  }

  render(){
    const { data, unit_index, module } = this.state
    console.log(data)
    return (
      <div>
        <Panel>
          <h2><i>Unidad {unit_index}:</i> {data.description}</h2>
        </Panel>
        <TabView>
          <TabPanel header="Temas clave"  leftIcon="fa-calendar">
          {
            data.key_topics.map(function(val, index){
              return (
                <Panel><i>{index + 1}.</i> {val}</Panel>
              )
            })
          }
          </TabPanel>
          <TabPanel header="Objetivos"  rightIcon="fa-print">
          {
            data.learning_objectives.map(function(val, index){
              return (
                <Panel><i>{index + 1}.</i> {val}</Panel>
              )
            })
          }
          </TabPanel>
          <TabPanel header="Actividades"  leftIcon="fa-bell-o" rightIcon="fa-bookmark-o">

          </TabPanel>
          <TabPanel header="Evaluación"  leftIcon="fa-bell-o" rightIcon="fa-bookmark-o">

          </TabPanel>
        </TabView>
      </div>
      
    )
  }
}

export default Material
