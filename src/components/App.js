import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'

import Content from './Content'
import Header from './Header'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Grid.Column width={4}>
            <Content />
          </Grid.Column>

          <Grid.Column width={12}>
            <Segment>
              Aquí va lo más tanque
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
