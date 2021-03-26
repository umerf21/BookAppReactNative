import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
} from 'react-native';
import { getbooksfromApi } from '../data/SearchBookApi'

const Books = () => {
    const [bookList, setbookList] = useState()
    const [loading, SetLoading] = useState(false)
    var SearchBookname = "java"

    useEffect(() => {
        SetLoading(true)
        if (SearchBookname.length > 0) {
            getbooksfromApi().then(data => {
                setbookList(data)
            })
        }
    })


    const renderitem = ({ item, index }) => {
        return (
            <View>
                <Text>hello</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={bookList}
                renderItem={renderitem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Books