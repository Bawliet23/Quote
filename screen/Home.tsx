import React ,{useRef,useEffect} from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Animated
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import Quote from "../components/Quote";
import QuoteList from "./QuoteList";

const Home = ({ navigation }) => {


  const quoteConTX  = useRef(new Animated.Value(100)).current
  const scrollX  = useRef(new Animated.Value(0)).current
  useEffect(()=>{
      Animated.timing(quoteConTX,{
          toValue:0,
          duration:2000,
          useNativeDriver:true
      }).start()
  },[])
  return (
    <View style={styles.container}>
      {/* header */}
      <Header navigation={navigation} title={"Home"} />



      <ScrollView 
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
       style={styles.scroll} >
      <View style={{flex:2}}>
        {/* search */}
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            // onChangeText={}
            // value={characters}
            placeholder="Search Quotes"
          />
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => console.log("search")}
          >
            <Ionicons style={styles.schIcon} name="search" />
          </TouchableOpacity>
        </View>




        {/* categoryList */}

        <View style={styles.categoryContainer}>
          <Text style={styles.catTitle}>Categories</Text>
          <Animated.FlatList
          onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{x:scrollX}}}],
            {useNativeDriver:true}
          )}
            style={styles.categoryList}
            showsHorizontalScrollIndicator={false}
            data={[
              { id: 0, name: "Love" },
              { id: 1, name: "Succes" },
              { id: 2, name: "Lonely" },
              { id: 3, name: "Life" },
            ]}
            renderItem={({ item ,index}) => {
            
              const scale = scrollX.interpolate(
                {
                  inputRange:[-120,0,120*index,120*(index+2)],
                  outputRange:[0,1,1,0]
                }
              )

             return <TouchableOpacity onPress={() => navigation.push("Categories")}>
                <CategoryItem animation={scale}>{item.name}</CategoryItem>
              </TouchableOpacity>
            }}
            horizontal={true}
          />
        </View>
      </View>





      {/* QuoteOfTheDay */}
      <Animated.View style={[styles.QuoteOfTheDay,{transform:[{translateY:quoteConTX}],opacity:quoteConTX.interpolate({
          inputRange:[0,100],
          outputRange:[1,0]  
        })}]}>
        <Text style={styles.catTitle}>Quote Of The Day</Text>
        <Quote
          animation={null}
          color={["#857EDE", "#6E71E5", "#5A65E5"]}
          quote="We become what we think about."
          author="Mohamed BHAJY"
        />
      </Animated.View>
      {/* Saved Quotes */}
      <Animated.View style={{flex:1,transform:[{translateY:quoteConTX}],opacity:quoteConTX.interpolate({
          inputRange:[0,100],
          outputRange:[1,0]  
        })}}>
      <Text style={styles.catTitle}>Trending</Text>
      <QuoteList />

      </Animated.View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    // backgroundColor:"#aefeeeea"
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 12,
    height: 40,
  },
  input: {
    flex: 9,
    height: 40,
    marginLeft: 12,
  },
  searchBtn: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  schIcon: {
    fontSize: 20,
    color: "#D9DADC",
  },
  categoryContainer: {
    flex: 1,
       minHeight:150,
    //  backgroundColor :"#aefeeeea"
  },
  QuoteOfTheDay: {
    flex: 1,
    minHeight:150,
    //   height:500,
    //    backgroundColor :"#333"
  },
  catTitle: {
    marginHorizontal: 12,
    fontSize: 16,
    color: "#A8AFBC",
  },
  categoryList: {
    display: "flex",
    flex: 1,
    // backgroundColor:"red"
  },
  scroll:{
    display:'flex',
    flex:3,
  }
});

export default Home;
