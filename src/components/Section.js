import React, { Component } from 'react';

import {ProgressBar} from 'primereact/components/progressbar/ProgressBar';


class Section extends Component {
  constructor (props){
    super(props);
      this.state = {
        progress: 50
      }
  }

  render() {
    return (
      <div>
        <ProgressBar value={this.state.progress}></ProgressBar>
      </div>
    );
  }
}



export default Section;
