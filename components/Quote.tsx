import React,{useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated,Clipboard} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element';
import Toast, {DURATION} from 'react-native-easy-toast'


const Quote = (props:any) => {
    let toastRef;
  
    return (
        <Animated.View  style={[styles.quoteContainer,{transform:[{scale:props.scale}]}]} >
        <LinearGradient start={[0, 1]} end={[1, 0]} colors={props.color} style={styles.lnCon}>
        <TouchableOpacity style={{flex:6}}  activeOpacity={.7} onPress={()=>props.navigation.navigate("QuoteDetails",props.item)} >

            <View style={styles.quote}>
                <Text style={styles.text}

                numberOfLines={2}
                >{props.item.quote}</Text>
            </View>
            </TouchableOpacity>

            <View  style={styles.quoteOptions} >
            <TouchableOpacity >
                <Ionicons name="heart" style={styles.like} />
                </TouchableOpacity>
                <Text style={styles.authorText}>{props.item.author}</Text>
                <TouchableOpacity style={{zIndex:99}} onPress={()=>{Clipboard.setString(props.item.quote)
                toastRef.show('Copied')
                }} >
                <Ionicons name="copy" style={styles.like} />
                </TouchableOpacity >

            </View>
            
        </LinearGradient>
        <Toast ref={(toast) => toastRef = toast} position={'bottom'}/>
        </Animated.View>
        
    );
}


const styles = StyleSheet.create({
    quoteContainer :{
        display:'flex',
        justifyContent: "space-around",
        alignItems: 'center',
        margin:10,
        borderRadius: 10,
        flex:1,
        // borderWidth: 3,
        // borderColor: 'red',
        // height:180,
        // backgroundColor:"green",
        
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
