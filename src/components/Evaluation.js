import React, { Component } from 'react';

import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Panel} from 'primereact/components/panel/Panel';
import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';


class CheckAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: props.data,
          answers: Array(props.data.questions.options.length).fill(false)
        };
    }

    onAnswerChange = (e) => {
      let { answers } = this.state;
      answers[e.value] = !answers[e.value];
      this.setState({answers: answers});
    }

    render(){
      const { data, answers } = this.state;
      return(
        <div>
        <div className="feature-intro">
          <Panel>
            <ScrollPanel style={{width: '100%', height: '200px'}}>
            <p align='center'>
              <img src={ require('../media/images/article.png') } alt="notice" />
            </p>
            </ScrollPanel>
            <div>
              <p align='justify'>{data.body}</p>
              {
                data.questions.options.map((val, index) => {
                  return (
                    <div>
                      <Checkbox key={index} value={index} onChange={this.onAnswerChange}
                      checked={answers[index]}>{val.text}</Checkbox>
                      <label htmlFor={index}>{val.text}</label>
                    </div>
                  )
                })
              }
            </div>
          </Panel>
        </div>
        </div>
      )
    }
}

export default CheckAnswer
