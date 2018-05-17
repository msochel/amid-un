import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Menu>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>
        <Menu.Item header>AMID UN</Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='Nombre'/>
          <Dropdown item text='Opciones'>
            <Dropdown.Menu>
              <Dropdown.Item>Cargar progreso</Dropdown.Item>
              <Dropdown.Item>Guardar progreso</Dropdown.Item>
              <Dropdown.Item>Salir</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button icon='save' color='teal'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;
