import React from 'react';
import {Text} from 'react-native';

{/*字体不随屏幕大变大*/}
const TextFix = (props) => {
    return(
        <Text {...props} allowFontScaling={false}>
            {props.children}
        </Text>
    );
};
export  default TextFix;