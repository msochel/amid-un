import React, { Component } from 'react';

import {Panel} from 'primereact/components/panel/Panel';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';



class ThematicContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.data.content,
      activities: props.data.activities
    }
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      content: props.data.content,
      activities: props.data.activities
    })
  }

  render(){
    const { content, activities } = this.state;
    return (
      <div>
        <Panel>
          <h2>{content.title}</h2>
          {
            content.body.map(function(val, index){
              if (typeof(val) === 'string') {
                return <p key={index} align='justify'>{val}</p>
              } else {
                return (
                  <ul key={index}>
                    {
                      val.map(function(v, i){
                        return <li key={i} align='justify'>{v}</li>
                      })
                    }
                  </ul>
                )
              }
            })
          }
        </Panel>
        {
          activities.length > 0 &&
          <div>
            <h2>Actividades</h2>
            {
              activities.map((v, i) => {
                return (
                  <Accordion>
                    <AccordionTab header={"Actividad".concat(i + 1)}>
                    <div width="100%" height="315">
                      <object data={require("./../data/activities/".concat(v, ".pdf"))}
                      type="application/pdf" width="100%" height="315">
                        <p>It appears you don't have a PDF plugin for this browser.
                        No biggie... you can <a href={require("./../data/activities/".concat(v, ".pdf"))}>
                        click here to
                        download the PDF file.</a></p>  
                      </object>
                    </div>
                    </AccordionTab>
                  </Accordion>
                )
              })
            }
          </div>
        }
      </div>
    )
  }
}

export default ThematicContent
