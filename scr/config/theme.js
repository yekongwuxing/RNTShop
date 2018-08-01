'use strict';

import {Dimensions,Platform} from 'react-native';

export default module = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    btnActiveOpacity: 0.5,
    actionBar:{
        height: Platform.OS === 'Andriod' ? 56 : 44,
        backgroundColor: '#fff'
    },
    barContentPad: (Platform.OS === 'android' ? 0 : (isIponeX() ? 42 : 20)), //根据不同平台顶部 padding不一致
    bottomPadding:isIponeX() ? 18 : 0,
    primaryColor: '#EE0000',
    lightGray: '#f5f5f5',
    lightBlack: '#333333',

};
export function isIponeX() {
    let dimension = Dimensions.get('window');
    return(
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimension.height === 812 || dimension.width === 812)
    );

}