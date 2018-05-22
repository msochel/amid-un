import React, { Component } from 'react'

import {Button} from 'primereact/components/button/Button';
import {FileUpload} from 'primereact/components/fileupload/FileUpload';
import {Menu} from 'primereact/components/menu/Menu';
import {Sidebar} from 'primereact/components/sidebar/Sidebar';
import {Toolbar} from 'primereact/components/toolbar/Toolbar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
  }

  render() {
    var items=[
      {
        label: 'Progreso',
        items: [
          {
            label: 'Nuevo', icon: 'fa fa-file-o'
          },
          {label: 'Abrir', icon: 'fa-folder-open'},
          {label: 'Guargar', icon: 'fa-save'}
        ]
      },
      {
        label: 'Opciones',
        items: [
          {
            label: 'Editar información', icon: 'fa fa fa-edit'
          },
          {label: 'Cambier tema', icon: 'fa fa-tint'},
          {label: 'Salir', icon: 'fa fa-power-off'},
        ]
      }
    ];

    return (
      <Toolbar>
        <div className="ui-toolbar-group-left">
          <img src='/logo.png' alt='¿logo?' />
        </div>
        <div className="ui-toolbar-group-right">
          <Menu model={items} popup={true} ref={el => this.menu = el}/>
          <Button label="Nombre" icon="fa fa-list"
            onClick={(event) => this.menu.toggle(event)}
          />
          <Button icon="fa-plus" onClick={ () => this.setState({visible:true}) }/>
        </div>
        <Sidebar visible={this.state.visible} position="bottom"
          style={{height:'20em'}} onHide={ () => this.setState({visible:false}) }>
          Menú
        </Sidebar>
      </Toolbar>
    )
  }
}

export default Header;
