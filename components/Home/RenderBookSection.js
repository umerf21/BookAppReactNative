import React  from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import { FONTS, COLORS, SIZES, icons, images } from '../../constants'
import { useNavigation } from '@react-navigation/native';

const RenderMyBooksSection = props => {

    const navigation = useNavigation()
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.padding
                }}
                onPress={() => navigation.navigate("Bookdetails", {book: item}) }
            >
                {/* Book Cover */}
                <Image
                    source={item.bookCover}
                    resizeMode='cover'
                    style={{
                        width: 180,
                        height: 250,
                        borderRadius: 20
                    }}
                />

                {/* Book info */}
                <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={icons.clock_icon}
                        //resizeMode='contain'
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGray,
                        }}
                    />
                    <Text style={{ marginLeft: 5, ...FONTS.body4, color: COLORS.lightGray }}>{item.lastRead}</Text>

                    <Image
                        source={icons.page_icon}
                        //resizeMode='contain'
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGray,
                            marginLeft: SIZES.radius,
                        }}
                    />
                    <Text style={{ marginLeft: 5, ...FONTS.body4, color: COLORS.lightGray }}>{item.completion}</Text>

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>
                    My Books
                </Text>
                <TouchableOpacity onPress={() => { console.log("see more") }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>See More</Text>

                </TouchableOpacity>
            </View>
            {/* book */}
            <View style={{ flex: 1, marginTop: SIZES.padding }}>
                <FlatList
                    data={props.myBook}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

            </View>
        </View>
    )

}

export default RenderMyBooksSection;