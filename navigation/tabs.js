import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup'
import Search from '../screens/Search'
import Books from '../screens/Notifications'
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        backgroundColor: COLORS.blackLight,
        height: "8%",
        
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch (route.name) {
                        case 'Home':
                            return (
                                <Image
                                    source={icons.dashboard_icon}
                                    resizeMode='contain'
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case 'Search':
                            return (
                                <Image
                                    source={icons.search_icon}
                                    resizeMode='contain'
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case 'Notification':
                            return (
                                <Image
                                    source={icons.notification_icon}
                                    resizeMode='contain'
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case 'Settings':
                            return (
                                <Image
                                    source={icons.menu_icon}
                                    resizeMode='contain'
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }

                }
            })}
        >
            <Tab.Screen name="Home" component={Signup} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Notification" component={Books} />

             {/* Change Settings to Profile and add drawer for menu */}

            <Tab.Screen name="Settings" component={Home} />

        </Tab.Navigator>
    )
}

export default Tabs;