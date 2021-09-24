import React from 'react'
import { View, TextInput,Text, StyleSheet, TouchableHighlight, Button, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';
import CategoryItem from '../components/CategoryItem';

const Home = () => {
    return (
        <View style={styles.container}>
            {/* header */}
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.header}  >
                <Ionicons style={styles.htext} name="menu" />
                <Text style={styles.htext}>Home</Text>
                <Ionicons style={styles.htext} name="bookmark" />
           </LinearGradient>
         
           <View style={styles.header1}  >
                 {/* search */}
            <View style={styles.search} >
            <TextInput
        style={styles.input}
        // onChangeText={}
        // value={characters}
        placeholder="Search Quotes"
      />
      <TouchableOpacity style={styles.searchBtn} onPress={()=>console.log("search")}>
      <Ionicons style={styles.schIcon} name="search" />
      </TouchableOpacity>
            </View>
            {/* categoryList */}

            <View style={styles.categoryContainer}>
                <Text style={styles.catTitle} >Categories</Text>
                {/* <View style={styles.catTitle}>

                </View> */}
            <FlatList
            style={styles.categoryList}
            showsHorizontalScrollIndicator={false}
           data={[
            {id:0, name : "Love"} , 
            {id:1, name : "Succes"},
            {id:2, name : "Lonely"} , 
            {id:3, name : "Life"},
        ]}
          renderItem={({item})=> <CategoryItem >{item.name}</CategoryItem>}
          horizontal={true}
				
        />
            </View>

           </View>
           {/* QuoteOfTheDay */}
           <View style={styles.categoryContainer}>
                <Text style={styles.catTitle} >Quote Of The Day</Text>
                </View>
           {/* Saved Quotes */}
            <View style={styles.header1} ></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        // backgroundColor:"#aefeeeea"
    },
    header:{
        flex:1,
        backgroundColor:'#00b4d8',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    header1:{
        flex:2,
    },
    htext:{
        fontSize:25,
        color:'#fff',
        fontWeight:'600',
        margin:15
    }, 
    search:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
      backgroundColor:"#fff",
      borderRadius:10  ,
      margin: 12,
      height: 40,
     
    },
    input: {
        flex:9,
         height: 40,
         marginLeft:12
      },
      searchBtn:{
          flex:1,
          padding: 12,
          justifyContent:"center",
          alignItems:"center",
         
          
      },
      schIcon:{
          fontSize:20,
        color:"#D9DADC"
      },
      categoryContainer:{
          flex:1,
          
        // backgroundColor :"#aefeeeea"
      },
      catTitle:{
          marginHorizontal:12,
          fontSize:16,
          color:"#A8AFBC"
      },
      categoryList:{
            display:"flex",
            flex:1,
            // backgroundColor:"red"
      }
})

export default Home
