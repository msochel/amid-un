import React, { Component } from 'react';

import {Panel} from 'primereact/components/panel/Panel';


class ThematicContent extends Component {
  render(){
    return (
      <div>
        <Panel>
          <h2>{this.props.data.content.title}</h2>
          {
            this.props.data.content.body.map(function(val, index){
              if (typeof(val) === 'string') {
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
