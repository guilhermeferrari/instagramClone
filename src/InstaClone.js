import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from './config';
import { PostFeed } from './components/container'

class InstaClone extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
                <View style={styles.tempNav} >
                    <Text>Instagram</Text>
                </View>
                <PostFeed />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tempNav: {
        marginTop: 30,
        width: 100 + '%',
        height: 56,
        backgroundColor: 'rgb(250,250,250)',
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default InstaClone;