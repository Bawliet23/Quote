import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";


const Banner = ({item,navigation}) => {
    return (
        <View style={style.banner}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",width:"100%"}}>
            <AntDesign style={{color:"#e0ac56",fontSize:35,marginLeft:15}} name="arrowleft"  />
            </TouchableOpacity>
                <Text style={style.double} >❝</Text>
         <View style={style.quoteContainer} >
                <Text style={style.quote} >{item.quote}</Text>
                </View>
           <Text style={style.author}>{item.author}</Text>
        </View>
    )
}

const style = StyleSheet.create({

  
    banner:{
     width:'100%',
     flex: 1,
     display:"flex",
     flexGrow:2,
     backgroundColor:'#000',
     color:'#fff',
     justifyContent:"space-around",
     alignItems:'center',
     paddingTop:40

    },
    quote:{
        color:'#fff',
        fontSize:30,
        // flex: 1,
        paddingHorizontal:7,
        textAlign:"center",
        marginHorizontal:15,
        textTransform:"capitalize",
        marginBottom:50,
        height:"auto"
    },
    double:{
        color:'#e0ac56',
        fontSize:50,
        flex: 1,
         marginTop:10,
        
    },
    author:{
        color:'#fff',
        fontSize:15,
        borderTopWidth: 4,
        // marginTop:15,
        borderColor:'#e0ac56',
        flex: 1,
        paddingTop:5
    },
    quoteContainer:{
         flex: 3,
        display:'flex',
        justifyContent:'center',
     alignItems:'center',
     textAlign:'center',
     height:"auto"
    }
})

export default Banner
