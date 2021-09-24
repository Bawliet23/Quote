import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView,Image} from 'react-native';
import Category from './screen/Category';
import Quote from './components/Quote';
import QuoteList from './screen/QuoteList';
import Home from './screen/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >


      {/* <Image source={require('./assets/wallpaper.jpg')} style={StyleSheet.absoluteFillObject} blurRadius={.8} />
      <Category /> */}
      <Home />
      </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    display:'flex',
    // paddingTop:40,
    backgroundColor: '#f0f1f2',


  },
});
