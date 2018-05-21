import React from 'react';
import { List, Embed, Tab, Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
]

const DropdownExampleMultipleSelection = (
  <Dropdown placeholder='Lenguajes' fluid multiple selection options={options} />
)

const ListExampleBulleted = (
  <List bulleted>
    <List.Item>Programación voraz</List.Item>
    <List.Item>Programación dinámica</List.Item>
    <List.Item>Backtracking</List.Item>
  </List>
)

const EmbedExampleYouTube = (
  <Embed
    id='ZwIE2KV8g1A'
    source='youtube'
  />
)

const panes = [
  {
    menuItem: { key: 'users', icon: 'browser', content: 'Temas' },
    render: () => <Tab.Pane>{ListExampleBulleted}</Tab.Pane>,
  },
  {
    menuItem: {key: 'film', icon: 'film', content: 'Metodología'},
    render: () => <Tab.Pane>{EmbedExampleYouTube}</Tab.Pane>,
  },
  {
    menuItem: {key: 'pencil', icon: 'pencil', content: 'Actividades'},
    render: () => <Tab.Pane>Seleccione la opción/es correcta {DropdownExampleMultipleSelection}</Tab.Pane>,
  },
  {
    menuItem: {key: 'question', icon: 'question', content: 'Evaluación'},
    render: () => <Tab.Pane>Zona evaluativa</Tab.Pane>,
  },
]

const TabExampleCustomMenuItem = () => (
  <Tab panes={panes} />
)

export default TabExampleCustomMenuItem
