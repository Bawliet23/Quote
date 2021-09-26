import React from 'react'
import { View, Text, Dimensions,StyleSheet,Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const CategoryItem = (props) => {
    return (
        <Animated.View style={styles.category}>
        <LinearGradient start={[0, 1]} end={[1, 0]}  colors={['#E57Caa', '#EC71A6', '#5A65E5']} 
        style={styles.ln}>
        <Text style={styles.catTxt} >{props.children}</Text>
      </LinearGradient>
      </Animated.View>
    )
}
const styles = StyleSheet.create({
    category:{
        display:"flex",
         flex:.9,
         backgroundColor:"#ddd",
          minWidth:120,
        // height: 150,
        minHeight:80,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        marginTop:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
    },
    catTxt:{
        fontSize:25,
        color:"#FFF"
    },ln:{
        display:"flex",
        width:"100%",
        height:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        // width:120,
    }
})

export default CategoryItem
