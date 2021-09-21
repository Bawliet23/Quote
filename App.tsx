import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView,} from 'react-native';
import Category from './screen/Category';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <Category />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:40,
    backgroundColor: '#333',
  },
});
