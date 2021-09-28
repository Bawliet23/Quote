import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { colors,  } from '../assets/utils';

const Button = ({ title, onPress, style }) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    );
  };

const Drawer = ({navigation,routes,selectedRoute}) => {
    const onRoutePress = React.useCallback((route) => {
        navigation.navigate(route);
      }, []);

    return (
        <LinearGradient style={{flex:1,justifyContent:"center"}}   colors={["#857EDE", "#6E71E5", "#5A65E5"]}>
            <View style={{display:"flex",flex:0.5,marginLeft:15,justifyContent:"space-evenly"}}>
            {routes.map((route, index) => {
              return (
                <Button
                  key={route}
                  title={route}
                  style={{
                    fontSize: 32,
                    color: colors[index],
                    lineHeight: 32 * 1.5,
                      textDecorationLine:
                        route === selectedRoute ? 'line-through' : 'none',
                    
                    }
                  }
                  onPress={() => onRoutePress(route)}
                />
              );
            })}
          </View>
        </LinearGradient>
    )
}

export default Drawer
