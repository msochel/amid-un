import React, { Component } from 'react'

import {Button} from 'primereact/components/button/Button';
import {Dialog} from 'primereact/components/dialog/Dialog';
import {InputText} from 'primereact/components/inputtext/InputText';
import {Menu} from 'primereact/components/menu/Menu';
import {Sidebar} from 'primereact/components/sidebar/Sidebar';
import {Toolbar} from 'primereact/components/toolbar/Toolbar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, edit_info: false, name: null }
  }

  showEditInfo = () => {
    this.setState({edit_info: true});
  }

  onHideEditInfo = () => {
      this.setState({edit_info: false});
  }
  changeInfo = () => {
    let { name } = this.state;
    localStorage.setItem('name', name ? name : '');
    this.onHideEditInfo();
  }

  render() {
    const items=[
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
            label: 'Editar información', icon: 'fa fa fa-edit',
            command: this.showEditInfo
          },
          {label: 'Cambier tema', icon: 'fa fa-tint'},
          {label: 'Salir', icon: 'fa fa-power-off'},
        ]
      }
    ];

    let name = localStorage.getItem('name') 

    return (
      <Toolbar>
        <Dialog header="Editar información" footer={(
          <div>
              <Button label="Aceptar" icon="pi pi-check" onClick={this.changeInfo} />
              <Button label="Cancelar" icon="pi pi-times" onClick={this.onHideEditInfo} />
          </div>
        )} visible={this.state.edit_info}
        width="350px" modal={true} onHide={this.onHideEditInfo}>
        <div className="ui-g-12" style={{textAlign: 'center'}}>
          <div className="ui-inputgroup">
            <span className="ui-inputgroup-addon">
              <i className="fa fa-user"> Nombre </i>
            </span>
            <InputText onChange={(e) => {
              this.setState({
                name: e.target.value
              })
            }} placeholder="Su nombre" />
          </div>
        </div>
        </Dialog>
        <div className="ui-toolbar-group-left">
          <img src='/logo.png' alt='¿logo?' />
        </div>
        <div className="ui-toolbar-group-right">
          <Menu model={items} popup={true} ref={el => this.menu = el}/>
          <Button label={name ? name : "Sin nombre"} icon="fa fa-list"
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
