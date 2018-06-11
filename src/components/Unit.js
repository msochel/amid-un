import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {ProgressBar} from 'primereact/components/progressbar/ProgressBar';
import {Button} from 'primereact/components/button/Button';

import Material from './Material';

class Unit extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      index: props.index,
      module: props.module,
      progress: 60
    }
  }

  onClickHandler = (e) => {
    const { data, index, module } = this.state
    ReactDOM.render(
      <Material data={data} module={module} unit_index={index} />,
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
