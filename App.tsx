import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView,} from 'react-native';
import Category from './screen/Category';
import Quote from './components/Quote';
import QuoteList from './screen/QuoteList';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      {/* <Category /> */}
      <QuoteList/>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:20,
    backgroundColor: '#333',
  },
});
