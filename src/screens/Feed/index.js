import React from 'react';

import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

import options from '../../../assets/options.png'
import like from '../../../assets/like.png'
import comment from '../../../assets/comment.png'
import send from '../../../assets/send.png'
import save from '../../../assets/save.png'

function Feed() {

    const posts = [
        { id: 1, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Devin' },
        { id: 2, picture_url: 'https://oamor.com.br/wp-content/uploads/2019/12/mulher-curejpg-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Dan' },
        { id: 3, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Dominic' },
        { id: 4, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Jackson' },
        { id: 5, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'James' },
        { id: 6, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Joel' },
        { id: 7, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'John' },
        { id: 8, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Jillian' },
        { id: 9, picture_url: 'https://oamor.com.br/wp-content/uploads/2019/12/mulher-curejpg-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Jimmy' },
        { id: 10, picture_url: 'https://osegredo.com.br/wp-content/uploads/2019/12/A-mulher-que-se-aceita01-870x470.jpg', place: "California", likes: ['xupim', 'amora', 'codi', 'afons_sa', 'padilhO', 'catu_ss'], description: 'Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras Muito bom essa viagem que posso nyitas outras', hashtags: '', author: 'Julie' },
    ]

    posts.forEach(element => {
        element.likes = element.likes.slice(0, 1).toString()
    });

    const renderItem = ({ item: post }) => {
        return (
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>{post.author}</Text>
                        <Text style={styles.place}>{post.place}</Text>
                    </View>
                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image source={options} />
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
                                <Image source={like} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={comment} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={send} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.action}>
                                <Image source={save} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.likeBy}>Curtido por <Text style={styles.like}>{post.likes} e outras pessoas</Text> </Text>
                        <Text style={styles.author}>{post.author} <Text numberOfLines={1} style={styles.description}>{post.description.length < 65 ? post.description : post.description.substring(0, 65)}...</Text>  </Text>
                    </View>
                </View>


            </View >
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
