/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Counter from './scr/component/Counter';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        //渲染布局
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}
//样式文件
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
