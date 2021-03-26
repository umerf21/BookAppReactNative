import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import { FONTS, COLORS, SIZES, icons, images } from '../../constants'

const SearchList = props => {
    return(
        <View>
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default SearchList