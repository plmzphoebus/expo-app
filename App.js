import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './screens/MainScreen';
import store from './store';

export default class App extends React.Component {
  render() {
    const AppNavigator = createStackNavigator({
      Main: { screen: MainScreen }
    });
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

 
