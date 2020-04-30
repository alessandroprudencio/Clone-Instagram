import React from "react";
import { Image, ImageBackground, TouchableOpacity, SafeAreaView, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

const cameraRef = React.createRef();

export default class CameraScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: Camera.Constants.Type.back,
            image: null,
            openModal: false
        }
    }

    takePicture = async () => {
        if (cameraRef) {
            let photo = await cameraRef.current.takePictureAsync();
            this.setState({ image: photo.uri, openModal: true })
        }
    }


    render() {
        return (
            <>
                {this.state.openModal == false &&
                    <View style={{ flex: 1 }}>

                        <Camera style={{ flex: 1 }} ref={cameraRef} type={this.state.type}>
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
                                <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        alignSelf: 'flex-end',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => {
                                        this.takePicture()
                                    }}>
                                    <Text style={{ fontSize: 18, marginBottom: 15, color: 'white' }}> Tirar Foto </Text>
                                </TouchableOpacity>
                            </View>
                        </Camera>
                    </View>}

                {
                    this.state.openModal != false &&
                    <View style={{ flex: 1, backgroundColor: "#000" }}>
                        <SafeAreaView>
                            <ImageBackground style={{ width: '100%', height: "94.9%", flexDirection: "row", justifyContent: "space-between" }} imageStyle={{ borderRadius: 25, margin: 0 }} source={{ uri: this.state.image }} >
                                <TouchableOpacity onPress={() => this.setState({ openModal: false })}>
                                    <Image style={{ margin: 30, height: 20, width:20 }} source={require('../../../assets/close.png')} />
                                </TouchableOpacity>
                                <View style={{flexDirection:"row"}}>
                                    <TouchableOpacity onPress={() => this.setState({ openModal: false })}>
                                        <Image style={{ marginTop: 30, height: 24, width:24}} source={require('../../../assets/download.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ openModal: false })}>
                                        <Image style={{ marginTop: 30, height: 30, width:30, marginLeft:10, marginRight:10 }} source={require('../../../assets/font.png')} />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: -25, alignItems: "center", justifyContent: 'space-between', }}>
                                <View style={{ alignItems: "center", marginRight: -35 }}>
                                    <Avatar
                                        containerStyle={{ marginRight: 8, marginBottom: 10, borderColor: "#FFF", borderWidth: 2 }}
                                        rounded
                                        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                                    />
                                    <Text style={{ color: "#FFF", fontSize: 12 }}>Seu story</Text>
                                </View>
                                <View style={{ alignItems: "center" }}>
                                    <Avatar
                                        containerStyle={{ marginRight: 8, marginBottom: 10, borderColor: "#FFF", borderWidth: 2 }}
                                        rounded
                                        source={require('../../../assets/star-green.png')}
                                    />
                                    <Text style={{ color: "#FFF", fontSize: 12 }}>Amigos Próximos</Text>
                                </View>
                                <View >
                                    <TouchableOpacity>
                                        <View style={{ backgroundColor: "#fff", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 50, width: 130, padding: 11 }}>
                                            <Text style={{ fontSize: 13, marginRight: 5, fontWeight: "bold", color: "#000" }}>Enviar Para </Text>
                                            <FontAwesome name="angle-right" size={25} color="#666" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SafeAreaView>
                    </View>

                }
            </>
        )
    }
}