import React,{useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';




const Quote = (props:any) => {
  
  
    return (
        <Animated.View  style={[styles.quoteContainer,{transform:[{scale:props.scale}]}]} >
        <LinearGradient start={[0, 1]} end={[1, 0]} colors={props.color} style={styles.lnCon}>
            <View style={styles.quote}>
                <Text style={styles.text}

                numberOfLines={2}
                >{props.quote}</Text>
            </View>
            <View style={styles.author}>
                <Text style={styles.authorText}>{props.author}</Text>
            </View>

            <View  style={styles.quoteOptions} >
                <Ionicons name="heart" style={styles.like} ></Ionicons>
                <FontAwesome5 name="share" style={styles.like}></FontAwesome5>

            </View>
        </LinearGradient>
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    quoteContainer :{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
        borderRadius: 10,
        
        // borderWidth: 3,
        // borderColor: 'red',
        height:180,
        backgroundColor:"red",
        
    },lnCon:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flex:1,
        width:"100%",
        height:"100%",
    },
    quote :{
        flex:5,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    author :{
        flex:1,
        
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
