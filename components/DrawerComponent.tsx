import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native'
import { colors,  } from '../assets/utils';
const Button = ({ title, onPress, style }) => {
    return (
      <TouchableOpacity style={{margin:5,marginHorizontal:15}} onPress={onPress} activeOpacity={0.9}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    );
  };

const Drawer = ({navigation,routes,selectedRoute}) => {
    const onRoutePress = React.useCallback((route) => {
        navigation.navigate(route);
      }, []);

    return (
        <View style={{flex:1,justifyContent:"center"}} >
          <View style={{display:"flex",flex:0.4,justifyContent:"center",alignItems:"center"}}>
            <Image style={{
              width: "100%",
     height: "100%",
    resizeMode: 'cover',}}  source={require('../assets/quoteLogo.jpg')} />
    {/* <Text style={{marginTop: 15,color:"#fff",fontSize:22}} >QUOTES</Text> */}
          </View>
            <View style={{display:"flex",flex:1,}}>
            {routes.map((route, index) => {
              return (
                <Button
                  key={route}
                  title={route}
                  style={{
                    fontSize: 22,
                    fontWeight:'bold',
                    padding: 15,
                    color: route===selectedRoute?"#fff":"#000",
                    lineHeight: 22 * 1.5,
                    textTransform: 'uppercase',
                      // textDecorationLine:
                      //   route === selectedRoute ? 'line-through' : 'none',
                        backgroundColor: route=== selectedRoute ? "#000": "#fff",
                        borderRadius:5,
                    
                    }
                  }
                  onPress={() => onRoutePress(route)}
                />
              );
            })}
          </View>
        </View>
    )
}

export default Drawer
