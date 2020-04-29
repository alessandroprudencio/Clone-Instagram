import React, { useState } from "react";
import { Image, TouchableOpacity, SafeAreaView, Text, View } from 'react-native';
import { Camera } from 'expo-camera';


const CameraScreen = () => {
    const [type, setType] = useState(Camera.Constants.Type.back);

    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            setType(type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back)
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 15, color: 'white' }}> Girar </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}

export default CameraScreen