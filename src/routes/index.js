import React from 'react';

import { Image, TouchableOpacity } from 'react-native';

import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import Feed from '../screens/Feed'

const MainNavigator = createStackNavigator({
    Feed
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ededed',
        },
        headerTitle: () => <Image source={require('../../assets/logo.png')} />,
        headerLeft: () => <TouchableOpacity style={{ marginLeft: 15 }}><Image source={require('../../assets/camera.png')} /></TouchableOpacity>,
        headerRight: () => <TouchableOpacity style={{ marginRight: 15 }}><Image source={require('../../assets/send.png')} /></TouchableOpacity>
    }
})

export default createAppContainer(MainNavigator)