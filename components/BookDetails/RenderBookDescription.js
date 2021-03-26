import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { FONTS, COLORS, SIZES, icons, images } from '../../constants'

const RenderBookDescription = props => {
    const book = props.bookinfo

    return (
        <View style={{  margin: SIZES.padding, borderBottomWidth: 2, borderColor: COLORS.blackLight }}>
            <View>
                <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.radius }}>Description</Text>
            </View>
            <ScrollView indicatorStyle={'white'} showsVerticalScrollIndicator={false} style={{ marginBottom: 7 }}>
                <Text style={{ ...FONTS.body3, color: COLORS.lightGray }}>{book.description}</Text>
            </ScrollView>
        </View>
    )

}

export default RenderBookDescription