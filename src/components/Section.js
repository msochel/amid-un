import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class Section extends Component {
  constructor (props){
    super(props);
      this.state = {
        activeItem: 'themes'
      }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {
    return (
      <div>
        <Menu fluid vertical>
          <Menu.Item name='themes' active={this.state.activeItem === 'themes'}
            onClick={this.handleItemClick} >
            Temas
          </Menu.Item>
          <Menu.Item name='method' active={this.state.activeItem === 'method'}
            onClick={this.handleItemClick} >
            Metodología
          </Menu.Item>
          <Menu.Item name='activ' active={this.state.activeItem === 'activ'}
            onClick={this.handleItemClick} >
            Actividades
          </Menu.Item>
          <Menu.Item name='eval' active={this.state.activeItem === 'eval'}
            onClick={this.handleItemClick} >
            Evaluación
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}



export default Section;
