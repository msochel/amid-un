import React, { Component } from 'react';

import {Panel} from 'primereact/components/panel/Panel';


class ThematicContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data
    }
  }
  render(){
    const { data } = this.state
    return (
      <div>
        <Panel>
          <h2>{data.content.title}</h2>
          {
            data.content.body.map(function(val, index){
              if (typeof(val) == 'string') {
                return <p key={index}>{val}</p>
              } else {
                return (
                  <ul key={index}>
                    {
                      val.map(function(v, i){
                        return <li key={i}>{v}</li>
                      })
                    }
                  </ul>
                )
              }
            })
          }
        </Panel>
      </div>
      
    )
  }
}
  
export default ThematicContent
  