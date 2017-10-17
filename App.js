
// In case you are as unfamiliar with nuances of modern JS as I once was 
// (and just wanted to make apps quickly without divining unintuitive JS conventions),
// the import without { } corresponds to 'export default', and you can use any name at all, and it will happily rename whatever was exported.
// The import with { } corresponds to named exports, i.e. without 'default', which IMO is the saner method, as it makes it easier to follow export chains.
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';

import WebviewScreen from './WebviewScreen'


// HomeScreen is the screen that is shown when you first open the app.
// It has a button that takes you to the webview.

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Webview Test: Home'
  };
  render() {
    const { navigate } = this.props.navigation;
    return <Button
      title='Go to webview'
      onPress={() => navigate('Webview')} // the 'Webview' here matches the Webview key in the StackNavigator below.
    />;
  }
}

// Below is the app object, specified as a StackNavigator and then wrapped into a component.
const WebviewApp = StackNavigator({
  Home: { screen: HomeScreen },
  Webview: { screen: WebviewScreen },
});

export default class App extends React.Component {
  render() {
    return <WebviewApp/>;
  }
}
