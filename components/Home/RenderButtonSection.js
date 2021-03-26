import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import { FONTS, COLORS, SIZES, icons, images } from '../../constants'

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const RenderButtonSection = props => {


    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
            <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                {/*Claim */}

                <TouchableOpacity style={{ flex: 1 }} onPress={() => { console.log("Claim") }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={icons.claim_icon}
                            resizeMode='contain'
                            style=
                            {{
                                height: 25,
                                width: 25
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body4 }}>Claim</Text>
                    </View>

                </TouchableOpacity>

                {/* Divider */}
                <LineDivider />
                {/* get point */}
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { console.log("Get Points") }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={icons.point_icon} resizeMode='contain' style={{ height: 25, width: 25 }} />
                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body4 }}>Get Point</Text>
                    </View>

                </TouchableOpacity>
                {/* Divider */}
                <LineDivider />
                {/* card */}
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { console.log("My Card") }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={icons.card_icon} resizeMode='contain' style={{ height: 25, width: 25 }} />
                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body4 }}>My Card</Text>
                    </View>

                </TouchableOpacity>
            </View>

        </View>
    )
}

export default RenderButtonSection;