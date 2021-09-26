import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView,Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screen/Home';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container} >
<NavigationContainer>

<Drawer.Navigator  screenOptions={{
    headerShown: false
  }} initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>



  {/* <Stack.Navigator   screenOptions={{
    headerShown: false
  }} >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Categories" component={Category} />
  </Stack.Navigator> */}
</NavigationContainer>
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
