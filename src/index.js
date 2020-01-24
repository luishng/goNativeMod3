import './config/ReactotronConfig'
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store'
import Routes from './routes'
import { setNavigator } from './services/navigation'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}

export default App;
