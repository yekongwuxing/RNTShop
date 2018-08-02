import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform
} from 'react-native';

export default class IndexPage extends Component {

    componentWillMount() {
        this._navListener.remove();
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus',() => {
            StatusBar.setState('dark-content');
            Platform.OS === 'andriod' && StatusBar.setBackgroundColor('#fff');
        });
    }
    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
                <Text style={styles.txt}>分类</Text>
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
