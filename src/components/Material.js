import React from 'react';
import { List, Embed, Tab } from 'semantic-ui-react'

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
    render: () => <Tab.Pane>Zona de actividades</Tab.Pane>,
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
