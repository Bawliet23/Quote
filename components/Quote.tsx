import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";



const Quote = (props) => {
    const animation = props.animation;
    console.log(animation);
    
    return (
        
        <Animated.View style={{...animation},styles.quoteContainer}>
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
                <FontAwesome5 name="share" style={styles.share}></FontAwesome5>
            </View>
        </Animated.View>

    );
}

const styles = StyleSheet.create({
    quoteContainer :{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'red',
        height:180,
        backgroundColor:'blue',
        fontSize: 30,
        backgroundColor:'white',
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
    },
    authorText:{ 
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        marginBottom: 30,
        fontSize: 15,
        fontWeight:'700',
    }
    

})

export default Quote;
