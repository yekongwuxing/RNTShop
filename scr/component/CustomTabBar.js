import React, {Component} from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';

import {MaterialTopTabBar} from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation'
 class CustomTabBar extends Component {
    render() {
        return(//相对布局 <MaterialTopTabBar {...this.props}/>固定写法
            <View style={{position:'relative',backgroundColor:'#fff'}}>
                <MaterialTopTabBar {...this.props}/>
                <TouchableOpacity style={{position:'absolute',right:12,bottom:10}}
                                  onPress={() => this.props.navigation.navigate('SearchPage',{'param1':111,'param2':23})}>
                    <Ionicons name={'ios-search'}
                          size={22}
                          color={'#666666'}/>
                </TouchableOpacity>
            </View>

        );
    }
}
export  default withNavigation(CustomTabBar);//导出时用withNavigation 包装，不在路由中初始化的页面跳转