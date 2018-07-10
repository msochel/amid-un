import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {ProgressBar} from 'primereact/components/progressbar/ProgressBar';
import {Button} from 'primereact/components/button/Button';

import Material from './Material';

class Unit extends Component {

  constructor(props){
    super(props);
    let topics = props.data.key_topics.map((x, i) => {
      return false
    })
    topics.push(false)
    this.state = {
      data: props.data,
      topics_progress: topics,
      index: props.index,
      module: props.module,
      progress: topics.filter(( x ) => {
        return x
      }).length * 100 / topics.length,
    }
  }

  completeTopic = (T) => {
    let new_topics_progress = Array.from(this.state.topics_progress);
    new_topics_progress[T] = true
    this.setState({
      topics_progress: new_topics_progress,
      progress: new_topics_progress.filter(( x ) => {
        return x
      }).length * 100 / this.state.topics_progress.length
    })
  }

  approve = () => {
    let new_topics_progress = Array.from(this.state.topics_progress);
    new_topics_progress[new_topics_progress.length - 1] = true
    this.setState({
      topics_progress: new_topics_progress,
      progress: new_topics_progress.length * 100
      / this.state.topics_progress.length
    })
  }

  onClickHandler = (e) => {
    const { data, index, module } = this.state
    ReactDOM.render(
      <Material data={data} module={module} unit_index={index}
      completeTopic={this.completeTopic} approve={this.approve} />,
      document.getElementById('material')
    );
  }

  render() {
    const { data, progress } = this.state
    return (
      <div className='ui-g'>
        {data.description}
        <div className='ui-g-12 ui-lg-8'>
          <ProgressBar value={progress}></ProgressBar>
        </div>
        <div className='ui-g-12 ui-lg-4' align='right'>
          <Button onClick={this.onClickHandler} label='Continuar'/>
        </div>
      </div>
    );
  }
}

export default Unit;
