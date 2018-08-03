import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Platform,
    ScrollView

} from 'react-native';
import theme from '../config/theme';
import TextFix from '../component/TextFix'
import px2dp from '../utils/px2dp'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class IndexPage extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data:''
        };
      }

    render() {
        return ( // 渲染布局
            <View style={styles.container}>
                <ImageBackground source={ Platform.OS === 'ios' ? require('../images/my_ios.png') : require('../images/my_android.png')}
                                 style={styles.imgTabBar}>
                    <View style={{flexDirection:'row-reverse'}}>
                        <TouchableOpacity style={{paddingRight:px2dp(20),paddingTop:px2dp(16)}}>
                            <SimpleLineIcons name={'settings'} size={20} color={'#666'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',flex:1,alignItems:'center', paddingHorizontal:px2dp(24)}}>
                        <Image source={require('../images/default_portrait.png')}
                               style={{height:px2dp(120),width:px2dp(120),borderRadius:px2dp(60)}}/>
                        <View style={{marginLeft:px2dp(32)}}>
                            <TextFix style={{fontSize:px2dp(34), color:'#333333'}}>张小盒</TextFix>
                            <View style={styles.roundButton}>
                                <TextFix style={{fontSize:px2dp(18),color:'#fff'}}>每日签到</TextFix>
                            </View>
                        </View>
                    </View>
                    <View style={styles.countView}>
                        <View style={styles.countItem}>
                            <TextFix style={{fontSize:px2dp(30), color:'#333333'}}>我的收藏</TextFix>
                            <TextFix style={{fontSize:px2dp(30), color:'#333333', marginTop:px2dp(8)}}>20</TextFix>
                        </View>
                        <View style={styles.countItem}>
                            <TextFix style={{fontSize:px2dp(30), color:'#333333'}}>关注店铺</TextFix>
                            <TextFix style={{fontSize:px2dp(30), color:'#333333', marginTop:px2dp(8)}}>145</TextFix>
                        </View>
                        <View style={styles.countItem}>
                            <TextFix style={{fontSize:px2dp(30), color:'#333333'}}>浏览足迹</TextFix>
                            <TextFix style={{fontSize:px2dp(30), color:'#333333', marginTop:px2dp(8)}}>200</TextFix>
                        </View>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={[styles.rowItem,{height:px2dp(100), marginTop:px2dp(32)}]}>
                        <TextFix style={{fontSize:px2dp(30),color:'#333333',flex:1}}>购买的订单</TextFix>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'} }>
                            <TextFix style={{fontSize:px2dp(24),color:'#999999', marginRight:px2dp(24)}}>购买的订单</TextFix>
                            <SimpleLineIcons name={'arrow-right'} size={16} color={'#999999'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.rowItem,{height:px2dp(140)}]}>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../images/to_pay.png')}/>
                            <TextFix style={styles.buttonTxt}>待付款</TextFix>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../images/to_ship.png')}/>
                            <TextFix style={styles.buttonTxt}>待发货</TextFix>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../images/to_receive.png')}/>
                            <TextFix style={styles.buttonTxt}>待收货</TextFix>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../images/to_finish.png')}/>
                            <TextFix style={styles.buttonTxt}>未评价</TextFix>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.countItem}>
                            <Image source={require('../images/to_issue.png')}/>
                            <TextFix style={styles.buttonTxt}>退换货</TextFix>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.rowItem,styles.borderTop,{height:px2dp(100)}]}>
                        <TextFix style={styles.itemTxt}>我的地址</TextFix>
                        <SimpleLineIcons name={'arrow-right'} size={20} color={'#999999'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem,styles.borderTop,{height:px2dp(100)}]}>
                        <TextFix style={styles.itemTxt}>账户与安全</TextFix>
                        <SimpleLineIcons name={'arrow-right'} size={20} color={'#999999'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem,styles.borderTop,{height:px2dp(100)}]}>
                        <TextFix style={styles.itemTxt}>客服与帮助</TextFix>
                        <SimpleLineIcons name={'arrow-right'} size={20} color={'#999999'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.rowItem,styles.borderTop,{height:px2dp(100)}]}>
                        <TextFix style={styles.itemTxt}>意见反馈</TextFix>
                        <SimpleLineIcons name={'arrow-right'} size={20} color={'#999999'}/>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
// 样式文件
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imgTabBar:{
        height:px2dp(410) + (Platform.OS === 'ios' ? theme.barContentPad : 0),
        paddingTop:theme.barContentPad,
    },
    roundButton:{
        marginTop:px2dp(16),
        height:px2dp(36),
        width:px2dp(120),
        borderRadius:px2dp(18),
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    countView:{
        marginHorizontal:px2dp(24),
        height:px2dp(140),
        backgroundColor:'#fff',
        borderRadius:px2dp(12),
        flexDirection:'row',
        shadowOffset:{width:0,height:2},//阴影
        shadowOpacity:0.5,
        shadowRadius:4,
        shadowColor:'#999999',
        elevation:4
    },
    countItem:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    rowItem: {
        marginHorizontal: px2dp(24),
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonTxt:{
        fontSize:px2dp(24),
        color:'#333333',
        marginTop:px2dp(12)
    },
    itemTxt:{
        fontSize:px2dp(32),
        color:'#333333',
        flex:1
    },
    borderTop:{
        borderTopColor:'#f5f5f5',
        borderTopWidth:px2dp(1)
    }

});
