import React from 'react';

import { View, SafeAreaView, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Avatar } from 'react-native-elements';

function Feed() {

    const posts = [
        { id: 1, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Devin' },
        { id: 2, picture_url: 'https://oamor.com.br/wp-content/uploads/2019/12/mulher-curejpg-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Dan' },
        { id: 3, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Dominic' },
        { id: 4, picture_url: 'https://emais.estadao.com.br/blogs/mulheres-positivas/wp-content/uploads/sites/672/2019/01/832572F7-B636-48F1-B7AA-26D4A808C34C.jpeg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Jackson' },
        { id: 5, picture_url: 'https://ath2.unileverservices.com/wp-content/uploads/sites/2/2017/10/perfis-de-mulheres-com-cabelo-curto-no-instagram-6-740x439.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'James' },
    ]

    posts.forEach(element => {
        element.likes = element.likes.slice(0, 1).toString()
    });

    const renderItem = ({ item: post }) => {
        return (
            <SafeAreaView>

                <View style={styles.post}>
                    <View style={styles.postHeader}>
                        <View style={styles.userInfo}>
                            <View>
                                <Avatar
                                    containerStyle={{ marginRight: 8 }}
                                    rounded
                                    source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                                />
                            </View>
                            <View>
                                <Text style={styles.author}>{post.author}</Text>
                                <Text style={styles.place}>{post.place}</Text>
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity>
                                <Image source={require('../../../assets/options.png')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View >
                        <Image style={styles.picture_url} source={{ uri: post.picture_url }} />
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.actions}>
                            <View style={styles.leftActions}>
                                <TouchableOpacity style={styles.action}>
                                    <Image source={require('../../../assets/like.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.action}>
                                    <Image source={require('../../../assets/comment.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.action}>
                                    <Image source={require('../../../assets/send.png')} />
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={styles.action}>
                                    <Image source={require('../../../assets/save.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <Text style={styles.likeBy}>Curtido por <Text style={styles.like}>{post.likes} e outras pessoas</Text> </Text>
                            <Text style={styles.author}>{post.author} <Text numberOfLines={1} style={styles.description}>{post.description.length < 65 ? post.description : post.description.substring(0, 65)}...</Text>  </Text>
                        </View>
                    </View>


                </View >
            </SafeAreaView>

        )
    }

    return (
        <View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    post: {
        marginVertical: 15
    },
    footer: {
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    action: {
        marginRight: 10
    },
    leftActions: {
        flexDirection: "row",
    },
    likeBy: {
        marginBottom: 5
    },
    actions: {
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: "space-between"
    },
    postHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        marginBottom: 15
    },
    userInfo: {
        flexDirection: "row",

    },
    author: {
        color: '#000',
        fontWeight: "bold",
    },
    like: {
        fontWeight: "bold",
    },
    description: {
        color: '#000',
        fontWeight: "normal",
    },
    place: {
        fontSize: 12,
        color: '#333'
    },
    picture_url: {
        width: '100%',
        height: 450
    }
});


export default Feed
