import Quote from "../components/Quote";
import React, {useState, useRef} from 'react'
import { View, Text, FlatList, StyleSheet, Animated } from 'react-native'



const QuoteList = ({navigation}) => {

       const scrollY = useRef(new Animated.Value(0)).current; 
       const ITEM_SIZE = 220;

const [quotes, setQuotes] = useState([

{
       "id":1,"quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
{
     "id":2,  "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
{
     "id":3,  "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
{
      "id":4, "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
{
      "id":5, "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
{
      "id":6, "quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
{
      "id":7, "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
{
     "id":8,  "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
{
      "id":9, "quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},
{
     "id":10,  "quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
{
      "id":11, "quote":"We must balance conspicuous consumption with conscious capitalism.","author":"Kevin Krue"},
{
      "id":12, "quote":"Life is what happens to you while you’re busy making other plans.","author":"John Lennon"},
{
     "id":13,  "quote":"We become what we think about.","author":"Earl Nightingale"},
    
])
 return (
           
           
            <Animated.FlatList
              onScroll={                     
                     Animated.event([{ nativeEvent: { contentOffset: { y:scrollY } } }], {
                     useNativeDriver: true,
                     })}
                data={quotes}
                
                renderItem ={({ item, index }) => { 

                     const inputRange = [-1, 0, (ITEM_SIZE)*index, (ITEM_SIZE)*(index+2)]
                     const scale = scrollY.interpolate({
                            inputRange,
                            outputRange: [1,1,1,0]
                     })

                return ( 
                    <View style={{display:'flex',minHeight:200}}>
                          <Quote  color={['#bb7Caa', '#aC71A6', '#5A65E5']} scale={scale} item={item} navigation={navigation}  />
                          </View>
                )}}
            />
    )
    
}






export default QuoteList
