import Quote from "../components/Quote";
import React, {useState} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    quoteList:{
        display:'flex',
     flex: 1,
    },
})

const QuoteList = () => {

const [quotes, setQuotes] = useState([
    {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    content: "First quote",
    },
     {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    content: "Second quote",
    },
     {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
    content: "Third quote",
    },
     {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    content: "fourth quote",
    },
])

    return (
        <View style={{flex:1,height: '100vh'}}>
            <FlatList style={styles.quoteList}
            data={quotes}
            renderItem ={({ item }) => {return <Quote>{item.content} </Quote>}
                
            }
            keyExtractor={item => item.id}
            />
        </View>
    )
}

export default QuoteList
