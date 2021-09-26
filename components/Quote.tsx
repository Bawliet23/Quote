import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';



const Quote = (props) => {
    const animation = props.animation;
    console.log(animation);
    
    return (
        
        <LinearGradient start={[0, 1]} end={[1, 0]} colors={props.color} style={{...animation},styles.quoteContainer}>
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

    );
}

const styles = StyleSheet.create({
    quoteContainer :{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        borderRadius: 10,
        // borderWidth: 3,
        // borderColor: 'red',
        height:180,
        fontSize: 30,
        shadowOpacity:.4,
        shadowRadius:20,
        
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
