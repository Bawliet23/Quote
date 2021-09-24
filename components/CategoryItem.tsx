import React from 'react'
import { View, Text, Dimensions,StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const CategoryItem = (props) => {
    return (
        <LinearGradient colors={['#49f', '#3bd998', '#1dcf6a']} 
        style={styles.category}>
        <Text style={styles.catTxt} >{props.children}</Text>
      </LinearGradient>
    )
}
const styles = StyleSheet.create({
    category:{
        display:"flex",
        // flex:1,
         width:150,
        height: 150,
        borderRadius:5,
        justifyContent:"center",
        alignContent:"center",
        margin:10,
        marginTop:15,
        shadowColor: '#333',
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,  
        elevation: 8
    },
    catTxt:{
        // flex:1,
        padding: 0,
        margin: 'auto',
        // backgroundColor:"blue",
        fontSize:25,
        color:"#FFF"
    }
})

export default CategoryItem
