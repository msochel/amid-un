import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {Panel} from 'primereact/components/panel/Panel';
import {Steps} from 'primereact/components/steps/Steps';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';

import ThematicContent from './ThematicContent';


class Material extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      unit_index: props.unit_index,
      module: props.module,
      activeIndex: 0,
    }
    this.stepItems = []
    this.state.data.pedagogical_approach.map((v, i) => {
      this.stepItems.push({
        label: null,
        command: (e) => {
          this.setState({activeIndex:i});
        }
      })
    })
  }

  render(){
    const { data, unit_index, activeIndex } = this.state
    console.log(this.state.activeIndex)
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
                <Panel key={index}><i>{index + 1}.</i> {val}</Panel>
              )
            })
          }
          </TabPanel>
          <TabPanel header="Objetivos"  rightIcon="fa-print">
          {
            data.learning_objectives.map(function(val, index){
              return (
                <Panel key={index}><i>{index + 1}.</i> {val}</Panel>
              )
            })
          }
          </TabPanel>
            <TabPanel
              header="Contenido temático"
              leftIcon="fa-bell-o"
              rightIcon="fa-bookmark-o"
            >
              <ThematicContent
                  data={data.pedagogical_approach[activeIndex]}
              />
              <Steps
                  model={this.stepItems}
                  activeIndex={activeIndex}
                  className="steps-custom"
                  readOnly={false}
              />
            </TabPanel>
            <TabPanel
              header="Evaluación"
              leftIcon="fa-bell-o"
              rightIcon="fa-bookmark-o"
            >
          </TabPanel>
        </TabView>
      </div>

    )
  }
}

export default Material
