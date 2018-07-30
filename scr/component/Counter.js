import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';
export default class Counter extends Component {
   // 构造
     constructor(props) {
       super(props);
       // 初始状态
       this.state = {
           value:this.props.initValus||1
       };
       this._update = this._update.bind(this);
     }
     //默认属性
     static defaultProps = {
        initValus:1,
         onUpdate:f => f//默认是一个什么都不做的函数

     };

     //减
     _reduce() {
         let value = this.state.value - 1;
         if (value < 1) value = 0;
         this._update(value);
     }
     //加
     _plus() {
         this._update(this.state.value + 1);
     }
     _checkNum() {
         let value = this.state.value;
         if (value == '' || value  < 1) {
             value:1;
         }else {
             value = Math.floor(value);
         }
         this.setState ({
             value:value
         })
         this._update(value);

     }
     _update(valus){
         //父组件的值
         this.props.onUpdate(this.state.value,valus);
         //子组件的值
         this.setState({
             value:valus
         })
     }
    //TouchableOpacity的属性
    //activeOpacity：触摸时透明度的设置
    // underlayColor：点击时背景阴影效果的背景颜色
    //this.props.style 调用父组件的样式
     render() {
         return(
             <View style={[styles.operatingBox,this.props.style]}>

                 <TouchableOpacity activeOpacity={0.2}
                                   onPress={this._reduce.bind(this)}>
                     <View style={styles.reduceView}>
                         <Text allowFontScaling={false}
                               style={styles.btn}>-</Text>
                     </View>
                 </TouchableOpacity>
                 <View style={styles.inputView}>
                     <TextInput style={styles.inputBox}
                                maxLength={3}
                                value={this.state.value.toString()}
                                returnKeyLabel='done'
                                keyboardType='numeric'
                                onChangeText={(txt) => this.setState({value:Number(txt)})}
                                autoFocus={false}
                                onEndEditing={this._checkNum.bind(this)}
                     ></TextInput>
                 </View>
                 <TouchableOpacity activeOpacity={0.2}
                                   onPress={this._plus.bind(this)}>
                     <View style={styles.plusView}>
                         <Text allowFontScaling={false}
                               style={styles.btn}>+</Text>
                     </View>
                 </TouchableOpacity>
             </View>

         );
     }
}

const styles = StyleSheet.create({
    operatingBox:{
        width:120,
        height:35,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#ddd',
        overflow:'hidden'
    },
    inputView:{
        flex:1,
        borderRightWidth:1,
        borderRightColor:'#ddd'

    },
    inputBox:{
        flex: 1,
        backgroundColor: 'transparent',
        textAlign: 'center',
        padding: 0,
        fontSize: 14
    },
    reduceView: {
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent:'center',
        borderRightWidth: 1,
        borderRightColor: '#ddd',
    },
    btn:{
        fontSize:18,
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    plusView:{
        width:34,
        height:34,
        alignItems:'center',
        justifyContent:'center'

    }
});

Counter.propTypes={
    initValus:PropTypes.number,
    style:PropTypes.object,
    onUpdate:PropTypes.func
};