import React, { Component } from 'react';
import {Panel} from 'primereact/components/panel/Panel';
import {Steps} from 'primereact/components/steps/Steps';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';

import ThematicContent from './ThematicContent';
import Evaluation from './Evaluation';


class Material extends Component {
  constructor(props){
    super(props);
    this.completeTopic = props.completeTopic
    this.approve = props.approve
    this.state = {
      data: props.data,
      unit_index: props.unit_index,
      module: props.module,
      activeIndex: 0,
    }
    this.stepItems = []
    // eslint-disable-next-line
    this.state.data.pedagogical_approach.map((v, i) => {
      this.stepItems.push({
        label: null,
        command: (e) => {
          this.setState({activeIndex:i});
          if (i) this.completeTopic(i - 1)
        }
      })
    })
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      data: props.data,
      unit_index: props.unit_index,
      module: props.module
    })
  }

  render(){
    const { data, unit_index, activeIndex } = this.state
    return (
      <div>
        <Panel>
          <h2><i>Unidad {unit_index}:</i> {data.description}</h2>
        </Panel>
        <TabView onTabChange={(e) => {
          this.completeTopic(activeIndex)
        }}>
          <TabPanel header="Temas clave"  leftIcon="far fa-list-alt">
          {
            data.key_topics.map(function(val, index){
              return (
                <Panel key={index}><i>{index + 1}.</i> {val}</Panel>
              )
            })
          }
          </TabPanel>
          <TabPanel header="Objetivos"  leftIcon="fas fa-bullseye">
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
            leftIcon="fas fa-book"
            // rightIcon="fa-bookmark-o"
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
          <TabPanel disabled = { activeIndex < data.key_topics.length - 1 }
            header="Evaluación"
            leftIcon="fas fa-question"
          >
            <Evaluation data={data.unit_evaluation} />
          </TabPanel>
        </TabView>
      </div>

    )
  }
}

export default Material
