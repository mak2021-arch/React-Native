/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator, BottomTabBar, NavigationContainer} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import {icons, COLORS} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator 
        tabBarOptions={{
            showLabel: false
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused})=> {
                        <Image
                            source={icons.first}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary,
                    }}
                />;
                },
                }}
            />

             <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused})=> {
                        <Image
                            source={icons.second}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary,
                    }}
                />;
                },
                }}
            />

             <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused})=> {
                        <Image
                            source={icons.third}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary,
                    }}
                />;
                },
                }}
            />

             <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused})=> {
                        <Image
                            source={icons.fourth}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary,
                    }}
                />;
                },
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Tabs;