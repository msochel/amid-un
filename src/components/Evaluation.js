import React, { Component } from 'react';

import {Button} from 'primereact/components/button/Button';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Panel} from 'primereact/components/panel/Panel';
import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';


class Evaluation extends Component {
    constructor(props) {
      super(props);
      this.approve = props.approve
      this.state = {
        data: props.data,
        answers: Array(props.data.questions.options.length).fill(false),
        completed: false
      };
    }

    onAnswerChange = (e) => {
      let { answers, data } = this.state;
      let completed = true
      answers[e.value] = !answers[e.value];
      this.setState({answers: answers});
      // eslint-disable-next-line
      data.questions.options.map((x, i) => {
        if (x.right !== answers[i]) {
          completed = false ;
        }
      })
      this.setState({
        completed: completed
      })
    }

    continue = () => {
      if (this.state.completed) {
        this.approve()
      }
    }

    render(){
      const { data, answers, completed } = this.state;
      return(
        <div>
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
                    <div key={index}>
                      <Checkbox value={index} onChange={this.onAnswerChange}
                      checked={answers[index]} disabled={completed}>{val.text}</Checkbox>
                      <label htmlFor={index}>{val.text}</label>
                    </div>
                  )
                })
              }
              <div align='right'>
              <Button label="Continuar" disabled={!completed} onClick={this.continue}
              className={ completed ? 'ui-button-success' : '' } />
              </div>
            </div>
          </Panel>
        </div>
      )
    }
}

export default Evaluation
