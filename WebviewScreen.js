import React from 'react';
import { StyleSheet, Dimensions, View, WebView } from 'react-native';


// set up the style for the webview - taking up the entire device screen.

// screen height and width - it's possibly maybe a bad idea to set these once at startup, 
// and assume they'll never change; but fixing that is an exercise for the reader.
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  fullscreen: {
    width: ScreenWidth,
    height: ScreenHeight,
    backgroundColor: 'powderblue' // just to be able to differentiate it for debugging 
    // (though the webview itself covers up the blue, so you won't actually see it in the finished example, 
    // unless you do something unsupported like turn your device sideways)
  },
});


// The webview React component
export default class WebviewScreen extends React.Component {
  static navigationOptions = {
    header: null // This removes the navigation header (where the title normally is), to make things more fullscreen. 
    // You can still use the android back button to navigate back in the navigation stack.
    // Not sure about iOS.
  };

  // handle messages sent by webview to React Native. 
  // Just log them to the console for this example.
  onWebViewMessage(event) {
    console.log(event.nativeEvent.data);
  }

  // !NOTE! that this function uses the arrow function format, unlike all other functions.
  // This is yet another unintuitive JS gotcha: it preserves the 'this' reference to always be the WebviewScreen object,
  // event when it's passed in as a callback.
  // Functions defined the 'regular' way lose their 'this' reference when passed to some other object as a callback.
  // Technically, there's probably not a good reason to not use the arrow function for everything.
  onWebViewLoad = () => {
    this.webViewRef.postMessage('loaded');
    // postMessage takes in a string (in both directions).
    // in practice, you will probably want to use JSON.stringify / JSON.parse on both ends to pass structured data.
  }

  render() {
    const webviewContent = require('./WebviewContent/index.html')
    return (
      <View style={styles.fullscreen}>
        <WebView
          onLoad={this.onWebViewLoad}
          ref={webview => {this.webViewRef = webview;}} // stores a reference to the webview object in the WebviewScreen wrapper, to use for postMessage
          source={webviewContent}
          onMessage={this.onWebViewMessage}
        />
      </View>
    );
  }
}