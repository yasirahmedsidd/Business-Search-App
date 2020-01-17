import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/redux/reducers/rootReducer';

AppRegistry.registerComponent(appName, () => App);
//   <Provider store={createStore(rootReducer)}>
//     <App />
//   </Provider>
// ));

//BTS
//import a library to help create a component
// import React from 'react'
// import ReactNative from 'react-native'

// create a component

// const App= ()=>{return <View><Text>dkfjsdkjfhksdfh</Text></View>}

//render it to device
// ReactNative.Appregistry.registerComponent('appname',()=>App)
