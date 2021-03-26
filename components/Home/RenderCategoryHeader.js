import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import { FONTS, COLORS, SIZES, icons, images } from '../../constants'

const RenderCategoryHeader = props => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ flex: 1, marginRight: SIZES.padding }}
                onPress={() => props.propSetSelectedCategory(item.id)}
            >
                {
                    props.selectedCategory == item.id &&
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                }
                {
                    props.selectedCategory != item.id &&
                    <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                }
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
            <FlatList
                data={props.propCategories}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
            />
        </View>
    )
}

export default RenderCategoryHeader;