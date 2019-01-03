import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';

class Post extends Component {

    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        }
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = (this.props.item % 2 === 0) ? 'https://lh3.googleusercontent.com/6UMYk9rc9UTgu8tfi9GbwWKrdIV6fQzaJbqvJ9-QDvtZIEwrlsf6_g4W7mcea_Dpt24snhPIvpAhBbfSkm-AM9ccwg' : 'https://lh3.googleusercontent.com/5zYAoTqUTkoEGnP7-9KGFf3B07-Y9bG6LUrBDXTAbpeEtWRF4dbX1dw9MDShVsj0viYVpkgLaFLzT05Lw3AS9qVgniQ';
        const imageUri = imageSelection +
            '=s' +
            imageHeight +
            '-c';
        const hearIconColor = (this.state.liked) ? 'rgb(252,61,57)' : null;
        return (
            <View>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }} >
                        <Image
                            style={styles.userPic}
                            source={{ uri: 'https://lh3.googleusercontent.com/jx52B2DnxbzejJaj5dN6bnHNVZIg65Rpn9xCCNE4snrnFnd5N0-PL868QQ0NXljDAupIFNKb9bfzFXJ3UkNiYZpUFSM' }} />
                        <Text style={{ marginLeft: 10 }} >Nome</Text>
                    </View>
                    <View style={{ marginRight: 10, alignItems: 'center' }} >
                        <Text style={{ fontSize: 30 }} >...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        this.likeToggled();
                    }}>
                    <Image
                        style={{ width: this.state.screenWidth, height: 400 }}
                        source={{ uri: imageUri }} />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image style={[styles.icon, { height: 40, width: 40, tintColor: hearIconColor }]} source={config.images.heartIcon} />
                    <Image style={[styles.icon, { height: 36, width: 36 }]} source={config.images.bubbleIcon} />
                    <Image
                        resizeMode="stretch"
                        style={[styles.icon, { height: 40, width: 35 }]}
                        source={config.images.arrowIcon} />
                </View>
                <View>
                    <View style={styles.iconBar}>
                        <Image style={[styles.icon, { height: 20, width: 20 }]}
                            source={config.images.heartIcon} />
                        <Text>100 likes</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userBar: {
        width: 100 + '%',
        height: config.styleConstants.rowHeigth,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        height: config.styleConstants.rowHeigth,
        width: 100 + '%',
        borderColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 5
    },
})

export default Post;