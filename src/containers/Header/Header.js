import React from 'react';
import { Text, View } from 'react-native';
import style from './styleHeader';

const Header = ({title}) => {
    return (
      <View style={style.container}>
        <Text style={style.textStyle}>{title}</Text>
      </View>
    );
}

export default Header;