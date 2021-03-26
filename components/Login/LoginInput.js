import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { FONTS, COLORS, SIZES, icons, images } from '../../constants'


const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const LoginInput = props => {



    const [passView, setPassView] =useState(true)
    // const [focusColor1, setFocuseColor1] = useState(COLORS.lightGray)
    // const [focusColor2, setFocuseColor2] = useState(COLORS.lightGray)
    // const {isActive} = this.state;

    var clr1 = COLORS.lightGray;
    // var clr2 = COLORS.lightGray;

    // function atfocusedcolor() {

    //     clr1 = COLORS.highlight
    //     clr2 = COLORS.lightGray

    // //     setFocuseColor1(COLORS.highlight)
    // //    setFocuseColor2(COLORS.lightGray)
    //     console.log("onfocus log")

    // }

    // function atunfocuscolor() {

    //     clr1 = COLORS.lightGray
    //     clr2 = COLORS.highlight

    //     setFocuseColor1(COLORS.highlight)
    //    setFocuseColor2(COLORS.lightGray)
    //     console.log("onfocus pass")

    // }

    // function atfocusedcolor() {

    //     setFocuseColor1(COLORS.highlight)
    //    setFocuseColor2(COLORS.lightGray)
    //     console.log("onfocus log")

    // }

    // function atunfocuscolor() {

    //     setFocuseColor2(COLORS.highlight)
    //     setFocuseColor1(COLORS.lightGray)
    //     console.log("onfocus pass")

    // }

    return (
        <View style={{flex:1}}>
            <View style={{
                height: 55,
                borderWidth: 2,
                borderColor: clr1,
                //borderColor: COLORS.lightGray,
                backgroundColor: 'white',
                borderRadius: SIZES.padding,
                //justifyContent: 'center',
                alignItems: 'center',
                padding: SIZES.base,
                flexDirection: 'row',
                marginVertical:SIZES.radius

            }}>
                <View
                    style={{
                        borderRightWidth: 1,
                        borderRightColor: clr1
                    }}
                >
                    <Image
                        source={icons.user}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: clr1,
                            marginHorizontal: SIZES.radius,
                        }}

                    />
                </View>



                <TextInput
                    placeholder="Email"
                    //onFocus={atfocusedcolor()}
                    //onBlur={atunfocuscolor()}
                    //selectionColor={COLORS.highlight}
                    style={{
                        width: '80%',
                        ...FONTS.body3,
                        paddingHorizontal: SIZES.radius,
                        color: clr1,
                        //backgroundColor:'red'
                    }}
                />
            </View>


            <View style={{
                height: 55,
                borderWidth: 2,
                borderColor: clr1,
                //borderColor: COLORS.lightGray,
                backgroundColor: 'white',
                borderRadius: SIZES.padding,
                //justifyContent: 'center',
                alignItems: 'center',
                padding: SIZES.base,
                flexDirection: 'row',
                marginVertical:SIZES.radius

            }}>
                <View
                    style={{
                        borderRightWidth: 1,
                        borderRightColor: clr1
                    }}
                >
                    <Image
                        source={icons.password}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: clr1,
                            marginHorizontal: SIZES.radius,
                        }}

                    />
                </View>



                <TextInput
                    placeholder="Password"
                    secureTextEntry={passView}
                    //onFocus={atfocusedcolor()}
                    //onBlur={atunfocuscolor()}
                    //selectionColor={COLORS.highlight}
                    style={{
                        width: '75%',
                        ...FONTS.body3,
                        paddingHorizontal: SIZES.radius,
                        color: clr1,
                        //backgroundColor:'red'
                    }}
                />

                <TouchableOpacity
                    onPress={() => { if(passView==true){setPassView(false)} else{setPassView(true)}} }
                    style={{justifyContent:'flex-end', alignItems:'flex-end'}} >
                    <Image
                        source={icons.read_icon}
                        resizeMode='contain'
                        style={{
                            width:20,
                            height:20,
                            tintColor:clr1
                        }}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
            onPress={() => {console.log("Forget Password")}} 
            style={{alignItems:'flex-end', marginVertical:SIZES.base}}>
                        <Text style={{...FONTS.body3, color:COLORS.lightGray3}}>Forget Password?</Text>

            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=> {console.log("Login Button")}}
            style={{
                height:50,
                backgroundColor:COLORS.primary,
                alignItems:'center',
                justifyContent:'center',
                borderRadius:SIZES.radius,
                marginVertical:SIZES.radius,

            }}>
                <Text style={{
                    ...FONTS.h3, color:COLORS.white
                }}>Login</Text>
            </TouchableOpacity>

            <View style={{ flex:1, justifyContent: 'center',alignItems:'flex-end', flexDirection: 'row' }}>
                <Text style={{ ...FONTS.body3, color: COLORS.white }}>Don't have an account ? </Text>
                <TouchableOpacity>
                    <Text style={{ ...FONTS.h3, color: COLORS.primary }}> Sign Up</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default LoginInput