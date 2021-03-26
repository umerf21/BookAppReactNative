import React from 'react';
import { View, Text, Image } from 'react-native'
import { FONTS, COLORS, SIZES, icons } from '../../constants'

const LoginTopHeader = () => {
    return (
        <View style={{marginVertical:SIZES.padding}}>
            <View style={{ justifyContent: 'center', marginBottom: SIZES.padding }}>
                <Image
                    source={icons.logo}
                    resizeMode='contain'
                    style={{
                        width: 100,
                        height: 100,
                        minHeight:50,
                        minWidth:50,
                        tintColor: COLORS.primary
                    }}
                />

            </View>
            <View>
                <Text style={{ ...FONTS.semiLargeTitle, color: COLORS.white }}>Welcome,</Text>
                <Text style={{ ...FONTS.body2, color: COLORS.lightGray, marginVertical: SIZES.radius }}>Sign in to continue</Text>
            </View>
        </View>
    )
}

export default LoginTopHeader