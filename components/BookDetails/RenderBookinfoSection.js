import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { FONTS, COLORS, SIZES, icons, images } from '../../constants'
import { useNavigation } from '@react-navigation/native';





const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const RenderBookinfoSection = props => {

    const navigation = useNavigation()
    const book = props.bookinfo

    return (
        <View style={{ flex: 1, borderRadius:20 }}>
            <ImageBackground
            borderRadius={20}
                source={book.bookCover}
                resizeMode="cover"
                style={{
                    position: 'absolute',
                    top: 0, bottom: 0, left: 0, right: 0,
                }}
            />
            <View
                style={{
                    borderRadius:20,
                    position: 'absolute',
                    top: 0, bottom: 0, left: 0, right: 0,
                    backgroundColor: book.backgroundColor
                }}
            >
            </View>

            {/* navigation header */}
            <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 60, alignItems: 'flex-end' }}>
                <TouchableOpacity
                    style={{ marginLeft: SIZES.base }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back_arrow_icon}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: book.navTintColor,

                        }}
                    />

                </TouchableOpacity>

                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text style={{ ...FONTS.h3, color: book.navTintColor }}> Book Details </Text>
                </View>

                <TouchableOpacity
                    style={{ marginRight: SIZES.base }}
                    onPress={() => { console.log("Book Details Menu") }}>
                    <Image
                        source={icons.more_icon}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: book.navTintColor,
                            alignItems: 'flex-end'
                        }}
                    />
                </TouchableOpacity>
            </View>
            {/* Book Cover */}
            <View style={{
                flex: 1, paddingTop: SIZES.padding, alignItems: 'center',  
            }}>
                
                    <Image
                        source={book.bookCover}
                        resizeMode='contain'
                        
                        style={{
                            flex: 1,
                            width: 150,
                            height: 'auto',
                            borderColor:"rgba(0,0,0,0.3)",
                            // borderWidth:5,
                            // borderLeftWidth:5,
                        }}
                        
                    />

            </View>

            {/* Book Name and Author */}

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 0.2, margin: 10 }}>
                <Text style={{ ...FONTS.h2, color: book.navTintColor, marginTop: SIZES.padding }}>{book.bookName}</Text>
                <Text style={{ ...FONTS.b3, color: book.navTintColor, }}>{book.author}</Text>
            </View>

            {/* Book Info */}

            <View style={{
                flexDirection: 'row',
                margin: SIZES.padding,
                paddingVertical: 18,
                borderRadius: SIZES.radius,
                backgroundColor: "rgba(0,0,0,0.3)",
            }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.rating}</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>Ratings</Text>
                </View>

                <LineDivider />

                <View style={{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.pageNo}</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.white, textAlign:'center' }}>Total Pages</Text>
                </View>

                <LineDivider />

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.language}</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.white }}>Language</Text>
                </View>
            </View>

        </View>

    )
}

export default RenderBookinfoSection;