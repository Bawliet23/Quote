import React from 'react'
import { View, Text ,StyleSheet } from 'react-native'

const Banner = () => {
    return (
        <View style={style.banner}>
            <Text></Text>
        </View>
    )
}

const style = StyleSheet.create({

    banner:{
     width:'100%',
     flex: 1,
     backgroundColor:'#a4a4f7',
    },
})

export default Banner
