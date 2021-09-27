import React,{useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Animated} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";



const Quote = ({style, quote, author}) => {
    
    return (
        <Animated.View style={style.quoteContainer}>
            <View style={style.quote}>
                <Text style={style.text}
                numberOfLines={2}
                >{quote}</Text>
            </View>
            <View style={style.author}>
                <Text style={style.authorText}>{author}</Text>
            </View>
            <View  style={style.quoteOptions} >
                <Ionicons name="heart" style={style.like} ></Ionicons>
                <FontAwesome5 name="share" style={style.share}></FontAwesome5>
            </View>
        </Animated.View>

    );
}

export default Quote;
