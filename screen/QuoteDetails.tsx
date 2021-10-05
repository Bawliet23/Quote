import React from 'react'
import { View, Text } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element';
import Banner from '../components/Banner';
import Quote from '../components/Quote';
const QuoteDetails = (props) => {

    const item = props.route.params;
    console.log(props.route.params)
    
    return (
        <View  style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}>
       <Banner navigation={props.navigation} item={item} />
        </View>
    )
}

export default QuoteDetails
