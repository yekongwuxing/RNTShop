import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class IndexPage extends Component {

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <Text style={styles.txt}>购物车</Text>
            </View>
        );
    }
}
// 样式文件
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    txt:{
        margin:10,
        fontSize:20,
        color:'black'

    }
});
