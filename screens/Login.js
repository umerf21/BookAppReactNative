import React from 'react';
import {ImageBackground, KeyboardAvoidingView } from 'react-native'
import LoginInput from '../components/Login/LoginInput';
import LoginTopHeader from '../components/Login/LoginTopHeader';

import { COLORS, FONTS, images, SIZES } from '../constants';

const Login = () => {
    return (
        <KeyboardAvoidingView
            style={{
                flex: 1,
                backgroundColor: COLORS.black, padding: SIZES.padding
            }}>
            <ImageBackground
                source={images.screenBG}
                resizeMode='cover'
                style={{
                    position: 'absolute',
                    top: 0, bottom: 0, left: 0, right: 0,
                }}
            />
            <LoginTopHeader/>
            <LoginInput/>
            
        </KeyboardAvoidingView>
    )
}

export default Login