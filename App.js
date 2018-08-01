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
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} from 'react-navigation';
//页面切换动画插入器
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
//矢量图
import  Icons from 'react-native-vector-icons/Ionicons'
import theme from "./scr/config/theme";
import StartupPage from './scr/pages/StartupPage';
import IndexPage from './scr/pages/IndexPage';
import CategoryPage from './scr/pages/CategoryPage';
import CartPage from './scr/pages/CartPage';
import MinePage from './scr/pages/MinePage';
import BrandPage from './scr/pages/BrandPage';
import CustomTabBar from './scr/component/CustomTabBar';

const CategoryTab = createMaterialTopTabNavigator({
    CategoryPage:{
        screen:CategoryPage,
        navigationOptions:{
          tabBarLabel:'品类'
        }

    },
    BrandPage:{
        screen:BrandPage,
        navigationOptions: {
            tabBarLabel: '品牌'
        }
    }
},{
    swipeEnabled:true,//允许左右滑动
    animationEnabled:true,//切换页面时显示动画
    backBehavior:'none',//后退按钮是否会导致选项卡切换到初始选项卡？如果是，则设置为initialRoute，否则none。默认为initialRoute行为。
    tabBarOptions:{
        //tabbar上label的style
        labelStyle:{

        },
        // tabbar的style
        style:{
            height:theme.actionBar.height+theme.barContentPad,
            marginHorizontal:theme.screenWidth/6,
            paddingTop:theme.barContentPad,
            backgroundColor:'#fff',
            elevation:0,//组件的高度为0，就没有阴影
            shadowOpacity:0//阴影全完透明
        },
        // 每个选项卡的样式
        tabStyle:{
            width:theme.screenWidth * 1 / 3
        },
        activeTintColor:theme.primaryColor,// label和icon的前景色 活跃状态下（选中）
        acitveBackgroundColor:'#fff',// label和icon的背景色 活跃状态下
        inactiveTintColor:theme.lightBlack,// label和icon的前景色 不活跃状态下(未选中),
        inactiveBackgroundColor:'#fff',// label和icon的背景色 不活跃状态下
        showIcon:false,//是否显示选项卡的图标，默认为false
        showLabel:true,//是否为标签显示标签，默认为true
        pressOpacity:0.3,//按下选项卡的不透明度（仅适用于iOS和Android <5.0）
        indicatorStyle:{// Tabbar下划线样式
            height:1,
            width:theme.screenWidth/9,
            backgroundColor:theme.primaryColor,
            left:theme.screenWidth/9

        }

    },
    //自定义TabBar  固定写法
    tabBarComponent:(props) => (
        <CustomTabBar {...props}/>
    )

});


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
    CategoryTab:{
        screen:CategoryTab,
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