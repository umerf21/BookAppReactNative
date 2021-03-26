import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import { FONTS, COLORS, SIZES, icons, images } from '../../constants'

const RenderHeader = props => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>

            {/* Greetings */}
            <View style={{ flex: 1 }}>
                <View style={{ marginRight: SIZES.padding, flexDirection:'row', alignItems:'center' }}>
                    <View style={{marginRight:SIZES.radius}}>
                        <Image
                            source={images.displayimage}
                            resizeMode='cover'
                            borderRadius={200}
                            
                            style={{
                                width:50,
                                height:50,
                                borderColor:COLORS.gray,
                                borderWidth:1
                            }}
                        />
                    </View>
                    <View>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>Good Morning</Text>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>{props.name}                
                        </Text>
                        </View>
                </View>
            </View>
            {/* Points */}
            <TouchableOpacity style={{ backgroundColor: COLORS.primary, height: 40, paddingLeft: 3, paddingRight: SIZES.radius, borderRadius: 20 }}
                onPress={() => { console.log("Points") }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <Image
                            source={icons.follower}
                            resizeMode="contain"
                            style={{ height: 18, width: 18, tintColor:COLORS.white }}
                        />

                    </View>
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h3 }}>{props.point}</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}> Fans</Text> 
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default RenderHeader;