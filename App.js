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
  // 构造
    constructor(props) {
      super(props);
      this.initValues = [1,2,3];
      const initSum = this.initValues.reduce((a,b) => a+b,0);
      this.state = {
        sum:initSum
      };
      this.onUpdate = this.onUpdate.bind(this)
    }
  render() {
    return (
        //渲染布局
      <View style={styles.container}>
          <Text style={{margin:10,fontSize:20,color:'black'}}>总计 {this.state.sum}</Text>
        <Counter style={{margin:10}} initValus= {this.initValues[0]} onUpdate={this.onUpdate}/>
        <Counter style={{margin:10}} initValus= {this.initValues[1]} onUpdate={this.onUpdate}/>
        <Counter style={{margin:10}} initValus= {this.initValues[2]} onUpdate={this.onUpdate}/>
      </View>
    );
  }
  onUpdate(oldValus,newValus){
      const valueChange = newValus - oldValus;
      this.setState({
          sum:this.state.sum + valueChange
      })
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
