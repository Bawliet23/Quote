import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Quote = (props) => {
    return (
        <View style={styles.quoteContainer}>
            <View style={styles.quote}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
            <View style={styles.quoteOptions}>
              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    quoteContainer :{
        display:'flex',
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width:'90%',
        height:'50%',
        backgroundColor:'#E0F8FE',
    },
    quote :{
        backgroundColor: 'blue',
        flex:4,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    quoteOptions :{
        backgroundColor: 'red',
        flex:1,
    },
    text:{ 
    paddingHorizontal:40
    }

})

export default Quote;
