import React, { useState, useEffect } from 'react';

import { Image, TouchableOpacity, SafeAreaView, Text } from 'react-native';

import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import Feed from '../screens/Feed/index'

import CameraScreen from '../screens/Feed/camera';

const MainNavigator = createStackNavigator({
    Feed,
    CameraScreen: {
        screen: CameraScreen,
        navigationOptions: { headerShown: false }
    }
}, {
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
        headerStyle: {
            backgroundColor: '#ededed',
        },
        headerTitle: () => <Image source={require('../../assets/logo.png')} />,
        headerLeft: () => <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')} style={{ marginLeft: 15 }}><Image source={require('../../assets/camera.png')} /></TouchableOpacity>,
        headerRight: () => <TouchableOpacity style={{ marginRight: 15 }}><Image source={require('../../assets/send.png')} /></TouchableOpacity>
    })
})

export default createAppContainer(MainNavigator)