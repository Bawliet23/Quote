import React from "react";
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
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import Quote from "../components/Quote";
import QuoteList from "./QuoteList";

const Home = ({ navigation }) => {
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
          <FlatList
            style={styles.categoryList}
            showsHorizontalScrollIndicator={false}
            data={[
              { id: 0, name: "Love" },
              { id: 1, name: "Succes" },
              { id: 2, name: "Lonely" },
              { id: 3, name: "Life" },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.push("Categories")}>
                <CategoryItem>{item.name}</CategoryItem>
              </TouchableOpacity>
            )}
            horizontal={true}
          />
        </View>
      </View>





      {/* QuoteOfTheDay */}
      <View style={styles.QuoteOfTheDay}>
        <Text style={styles.catTitle}>Quote Of The Day</Text>
        <Quote
          animation={null}
          color={["#857EDE", "#6E71E5", "#5A65E5"]}
          quote="We become what we think about."
          author="Mohamed BHAJY"
        />
      </View>
      {/* Saved Quotes */}
      <View style={{flex:1}}>
      <Text style={styles.catTitle}>Trending</Text>
      <QuoteList />

      </View>
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
