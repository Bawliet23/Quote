import React from 'react'
import { View, Text } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element';
import Quote from '../components/Quote';
const QuoteDetails = (props) => {

    const item = props.route.params;
    console.log(props.route.params)
    
    return (
        <SharedElement id={item.id} style={{display:"flex",flex:1,backgroundColor:"red",justifyContent:"center",alignItems:"center"}}>
        <Quote scale={1}   color={["#857EDE", "#6E71E5", "#5A65E5"]} navigation={props.navigation} item={item} />
        </SharedElement>
    )
}

export default QuoteDetails
