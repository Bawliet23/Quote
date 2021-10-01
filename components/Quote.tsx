import React,{useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated, TouchableOpacityBase} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element';




const Quote = (props:any) => {
  
  
    return (
        <SharedElement style={{flex:1}}  id={props.item.id} >
        <TouchableOpacity style={{flex:1}}  activeOpacity={.7} onPress={()=>props.navigation.navigate("QuoteDetails",props.item)} >
        <Animated.View  style={[styles.quoteContainer,{transform:[{scale:props.scale}]}]} >
        <LinearGradient start={[0, 1]} end={[1, 0]} colors={props.color} style={styles.lnCon}>
            <View style={styles.quote}>
                <Text style={styles.text}

                numberOfLines={2}
                >{props.item.quote}</Text>
            </View>
          

            <View  style={styles.quoteOptions} >
                <Ionicons name="heart" style={styles.like} ></Ionicons>
                <Text style={styles.authorText}>{props.item.author}</Text>
                <FontAwesome5 name="share" style={styles.like}></FontAwesome5>

            </View>
        </LinearGradient>
        </Animated.View>
        </TouchableOpacity>
        </SharedElement>
    );
}


const styles = StyleSheet.create({
    quoteContainer :{
        display:'flex',
        justifyContent: "space-around",
        alignItems: 'center',
        margin:10,
        borderRadius: 10,
        flex:3,
        // borderWidth: 3,
        // borderColor: 'red',
        // height:180,
        // backgroundColor:"green",
        
    },lnCon:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flex:2,
        width:"100%",
        height:"100%",
    },
    quote :{
        flex:5,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"green"
    },
    author :{
        flex:0.5,
        
    },
    quoteOptions :{
        width:'90%',
        display:'flex',
        flex:2,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    like:{
        fontSize: 24,
        color:'#FFF',
    },
    share:{
        fontSize: 24,
    },
    text:{ 
    paddingHorizontal:40,
    fontSize: 24,
    color:'#FFF',
    },
    authorText:{ 
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginBottom: 30,
        fontSize: 15,
        fontWeight:'700',
        color:'#FFF',
    }
    

})

export default Quote;
