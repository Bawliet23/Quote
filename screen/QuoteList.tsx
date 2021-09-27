import Quote from "../components/Quote";
import React, {useState, useRef} from 'react'
import { View, Text, FlatList, StyleSheet, Animated } from 'react-native'



const QuoteList = () => {

       const scrollY = useRef(new Animated.Value(0)).current; 
       const ITEM_SIZE = 220;

const [quotes, setQuotes] = useState([

{
       "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
{
       "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
{
       "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
{
       "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
{
       "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
{
       "quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
{
       "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
{
       "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
{
       "quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"},
{
       "quote":"Definiteness of purpose is the starting point of all achievement.","author":"W. Clement Stone"},
{
       "quote":"We must balance conspicuous consumption with conscious capitalism.","author":"Kevin Krue"},
{
       "quote":"Life is what happens to you while you’re busy making other plans.","author":"John Lennon"},
{
       "quote":"We become what we think about.","author":"Earl Nightingale"},
    
])
const quoteStyles = StyleSheet.create({
    quoteContainer :{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        borderRadius: 10,
        height:180,
        backgroundColor:'blue',
        fontSize: 30,
        shadowOpacity:.4,
        shadowRadius:20,
        
    },
    quote :{
        flex:5,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    author :{
        flex:1,
        
    },
    quoteOptions :{
        width:'90%',
        display:'flex',
        flex:2,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    like:{
        fontSize: 24,
        color:'#FFF',
    },
    share:{
        fontSize: 24,
    },
    text:{ 
    paddingHorizontal:40,
    fontSize: 24,
    },
    authorText:{ 
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        marginBottom: 30,
        fontSize: 15,
        fontWeight:'700',
    }
    

})

    return (
           
           
            <Animated.FlatList
              onScroll={                     
                     Animated.event([{ nativeEvent: { contentOffset: { y:scrollY } } }], {
                     useNativeDriver: true,
                     })}
                data={quotes}
                renderItem ={({ item, index }) => { 
                     const inputRange = [-1, 0, ITEM_SIZE*index, ITEM_SIZE*(index+2)]
                     const scale = scrollY.interpolate({
                            inputRange,
                            outputRange: [1,1,1,0]
                     })

                return ( 
                     <Animated.View style={{transform:[{scale}]}} >
                          <Quote style={quoteStyles} quote={item.quote} author={item.author} />
                     </Animated.View> 
                )}}
                keyExtractor={item => item.author}
            />
    )
    
}






export default QuoteList
