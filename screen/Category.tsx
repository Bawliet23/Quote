import React from 'react'
import { Dimensions,ImageBackground, FlatList, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Banner from '../components/Banner';

export default function Category() {
    return (
       <ScrollView 
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
       style={styles.scroll} >
       <Banner /> 
       <FlatList
     numColumns={2}
     keyExtractor={(item)=>item.key}
    columnWrapperStyle={{justifyContent: 'space-evenly'}}
    showsHorizontalScrollIndicator={false}
     style={styles.categoryList}
        data={[
          {key: 'Money'},
          {key: 'Love'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'John'},
          {key: 'Alone'},
          {key: 'Success'},
          {key: 'Relation'},
        
        ]}
        renderItem={({item}) => {return (
        <View style={styles.category}>
          {/* <Image source={require('../assets/love.jpg')} style={StyleSheet.absoluteFillObject} blurRadius={.8} /> */}
        <Text style={styles.item}>{item.key}</Text>
        </View>
        )
        }
        }
      />
      </ScrollView> 
     
    )
}
const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 25,
      color:'#e0ac56',
      zIndex:1
    }, 
     image: {
      flex: 1,
     
    },
    category:{
      maxWidth: Dimensions.get('window').width /2,
      margin: 10,
      height:100,
      borderRadius: 10,
      alignItems:'center',
      justifyContent:'center',
      flex:1,
      backgroundColor:"#000",
      color:"#e0ac56"
 
    },
    categoryList:{
      flex: 1,
      flexGrow:3,
      paddingTop:15
    },
    scroll:{
      display:'flex',
      flex:1,
    }
  });