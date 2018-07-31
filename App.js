/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
//导入 react-navigation 组件
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
//页面切换动画插入器
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
//矢量图
import  Icons from 'react-native-vector-icons/Ionicons'
import StartupPage from './scr/pages/StartupPage';
import IndexPage from './scr/pages/IndexPage';
import CategoryPage from './scr/pages/CategoryPage';
import CartPage from './scr/pages/CartPage';
import MinePage from './scr/pages/MinePage';
import theme from "./scr/config/theme";


const MyTab = createBottomTabNavigator({
    IndexPage:{
        screen:IndexPage,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon: ({focused, tintColor}) => (
                <Icons name={'ios-home'} size={25} color={tintColor}/>
            )
        }
    },
    CategoryPage:{
        screen:CategoryPage,
        navigationOptions: {
            tabBarLabel: '分类',
            tabBarIcon: ({focused, tintColor}) => (
                <Icons name={'ios-keypad'} size={25} color={tintColor}/>
            )
        }
    },
    CartPage:{
        screen:CartPage,
        navigationOptions: {
            tabBarLabel: '购物车',
            tabBarIcon: ({focused, tintColor}) => (
                <Icons name={'ios-cart'} size={25} color={tintColor}/>
            )
        }
    },
    MinePage:{
        screen:MinePage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <Icons name={'ios-person'} size={25} color={tintColor}/>
            )
        }
    }
}, {
    tabBarOptions:{
        //label和icon的前景色 活跃状态下（选中）
        activeTintColor:theme.primaryColor,
        inactiveTintColor:theme.lightBlack,//label和icon的前景色 不活跃状态下(未选中)
    }
});

const App = createStackNavigator({
    StartupPage: {
        screen: StartupPage,
        navigationOptions: {
            gesturesEnabled: true,
            headerTitle: null //去掉 react-navigation 提供的标题
        }
    },
    MyTab: {
        screen: MyTab,
        navigationOptions: {
            gesturesEnabled: true,
            headerTitle: null
        }
    }
}, {
    mode: 'card',// 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'none',//// 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    transitionConfig: () => ({ //切换动画
        screenInterpolator: CardStackStyleInterpolator.forHorizontal //水平动画
    })
});

export default App