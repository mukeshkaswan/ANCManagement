/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';

 import { NavigationContainer } from '@react-navigation/native';
 import AppStackNavigationContainer from './src/navigator/AppNavigationContainer';
 
 import { SafeAreaView } from 'react-native';
 
 
 import React, { useEffect, useState } from 'react';
 import { View, StatusBar, LogBox, StyleSheet } from 'react-native';
 import { Provider } from 'react-redux';
 import createSagaMiddleware from 'redux-saga';
 import { PersistGate } from 'redux-persist/integration/react';
 import { persistStore } from 'redux-persist';
 import sagas from './src/segas';
 import reducer from './src/reducers';
 import { createStore, applyMiddleware } from 'redux';
 
 LogBox.ignoreAllLogs();
 const sagaMiddleware = createSagaMiddleware();
 const store = createStore(reducer, applyMiddleware(sagaMiddleware));
 const persistor = persistStore(store);
 sagaMiddleware.run(sagas);
 interface AppProps { }
 
 LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
 LogBox.ignoreAllLogs(); //Ignore all log notifications
 
 const App = (props: AppProps) => {
 
 
   useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
   }, [])
   return (
     <SafeAreaView style={{ flex: 1 }}>
       <NavigationContainer>
 
         <View style={styles.container}>
           <Provider store={store}>
             <PersistGate
               // loading={<Spinner visible={true} />}
               persistor={persistor}>
               <AppStackNavigationContainer />
             </PersistGate>
           </Provider>
         </View>
       </NavigationContainer>
     </SafeAreaView>
   );
 };
 
 export default App;
 
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 });
 