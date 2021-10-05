import React from 'react';
import { StyleSheet, SafeAreaView,Image} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screen/Home';
import QuoteList from './screen/QuoteList';



import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerComponent from './components/DrawerComponent';
import Category from './screen/Category';
import QuoteDetails from './screen/QuoteDetails';
import Toast, {DURATION} from 'react-native-easy-toast'

const Stack = createSharedElementStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container} >
<NavigationContainer>

<Drawer.Navigator 
drawerContent={(props)=><DrawerComponent
  navigation={props.navigation}
  routes={props.state.routeNames}
  selectedRoute={props.state.routeNames[props.state.index]}
  />}
screenOptions={{
    headerShown: false
  }}
   initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Category" component={Category} />
        <Drawer.Screen name="Quotes" component={QuoteList} />
        <Drawer.Screen name="Share" component={HomeStack} />
        <Drawer.Screen name="Like" component={HomeStack} />
      </Drawer.Navigator>
</NavigationContainer>
      </SafeAreaView>

    
  );
}
function HomeStack() {
  return (
    <Stack.Navigator   screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Category} />
      <Stack.Screen name="QuoteDetails" component={QuoteDetails} />
    </Stack.Navigator> 
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
