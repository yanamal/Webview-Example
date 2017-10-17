This is an almost<sup>1</sup>-minimal example of a create-react-native app with a full-screen webview<sup>2</sup>, set up so that the webview can communicate with the app itself by posting messages in both directions.

I pieced this together from a bunch of documentation and examples, which were neither minimal nor complete. That was a pretty painful process, so hopefully this will help someone avoid doing just that themselves.

The relevant files are:
- App.js
- WebviewScreen.js
- WebviewContent/index.html

(The rest are unchanged<sup>3</sup> from what create-react-native generates)

For simplicity, I kept some things together in the same files that probably ought to be brought out into separate files if you were doing it "properly" (e.g. home screen and app, webview style and webview itself).

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

The most recent version of the Create React Native App guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

---

<sup>1</sup> I also threw in a StackNavigator to link together the home screen and the actual webview.

<sup>2</sup> i.e. a view that renders arbitrary web-like HTML/CSS/JS within your app, which you can also dynamically load and change on the fly.

<sup>3</sup> except this readme, and also package.json, which was automatically modified by running: 

```npm install --save react-navigation```
