import React, { Component } from 'react';

import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Panel} from 'primereact/components/panel/Panel';

class CheckAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {answers: []};
        // this.onAnswerChange = this.onAnswerChange.bind(this);
    }

    onAnswerChange = (e) => {
        var selectedAnswers = [...this.state.answers];
        if(e.checked)
            selectedAnswers.push(e.value);
        else
            selectedAnswers.splice(selectedAnswers.indexOf(e.value), 1);

        this.setState({answers: selectedAnswers});
    }
    render(){
      return(
        <div>
        <div className="feature-intro">
          <Panel><img src={ require('../media/images/article.png') } alt="notice" className="ui-g-12"></img> {this.props.data.body}</Panel>
        </div>
        {
          this.props.data.questions.options.map(function(val, index){
            return (
              <div className="ui-g-12">
                <Checkbox key={index} value={val.text}></Checkbox>
                <label htmlFor={index}>{val.text}</label>
              </div>
            )
          })
        }
        </div>
      )
    }
}

export default CheckAnswer
