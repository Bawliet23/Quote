import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({title,navigation}) => {
    return (
        <LinearGradient start={[0, 1]} end={[1, 0]} colors={['#857EDE', '#6E71E5', '#5A65E5']} style={styles.header}>
              <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
          >
        <Ionicons style={styles.htext} name="menu" />
        </TouchableOpacity>
        <Text style={styles.htext}>{title}</Text>
        <Ionicons style={styles.htext} name="bookmark" />
   </LinearGradient>
    )
}

const styles = StyleSheet.create({
    
    header:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        maxHeight:100
    },
    htext:{
        fontSize:25,
        color:'#fff',
        fontWeight:'600',
        margin:15
    }, 
})

export default Header
