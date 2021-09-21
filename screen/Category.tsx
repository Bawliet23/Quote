import React from 'react'
import { Dimensions,ImageBackground, FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import Banner from '../components/Banner';

export default function Category() {
    return (
     <View style={styles.container} >
       <ScrollView style={styles.scroll} >
       <Banner />
     <FlatList
     numColumns={2}
    columnWrapperStyle={{justifyContent: 'space-evenly'}}
    // contentContainerStyle={{justifyContent: 'space-evenly'}}
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
        ]}
        renderItem={({item}) => {return (
          <ImageBackground  resizeMode="cover" source={require('../assets/love.jpg')} style={styles.image} >
        <View style={styles.category}>
          
        <Text style={styles.item}>{item.key}</Text>
        </View>
        </ImageBackground>
        )
        }
        }
      />
       </ScrollView>
     </View>
     
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#e41e5e',
    },
    item: {
      padding: 10,
      fontSize: 18,
      color:'#fff',
    }, 
     image: {
      flex: 1,
      margin: 10,
      height:100,
      borderRadius: 15,
    },
    category:{
      maxWidth: Dimensions.get('window').width /2,
      
      alignItems:'center',
      justifyContent:'center',
      flex:1,
      
      
      // backgroundColor:'#e41e5e',
      // background
    },
    categoryList:{
      flex: 2,
       backgroundColor:'#ef5e',
    },
    scroll:{
      flex:3,
      backgroundColor:'#a4f2e3'
    }
  });