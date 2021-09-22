import React from 'react'
import { View, Text ,StyleSheet } from 'react-native'

const Banner = () => {
    return (
        <View style={style.banner}>
                <Text style={style.double} >❝</Text>
         <View style={style.quoteContainer} >
                <Text style={style.quote} >succes is quest that will take me a life time to for fill but it is worth the wait</Text>
                </View>
           <Text style={style.author}>Mohamed BHAJY</Text>
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
     justifyContent:'space-around',
     alignItems:'center',
     borderBottomLeftRadius:15,
     borderBottomRightRadius:15,
     paddingTop:20

    },
    quote:{
        color:'#fff',
        fontSize:20,
        flex: 1,
        margin:15
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
        marginTop:15,
        borderColor:'#e0ac56',
        flex: 1,
        paddingTop:5
    },
    quoteContainer:{
        flex: 1,
        display:'flex',
        justifyContent:'center',
     alignItems:'center',
     textAlign:'center'
    }
})

export default Banner
