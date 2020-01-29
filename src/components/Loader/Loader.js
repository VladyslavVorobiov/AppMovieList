import React from 'react';
import { Text, View } from 'react-native';
import style from './styleLoader';

const Loader = () => {
    
  return (
      <View style={style.container}>
        <Text style={style.text}>Loading ...</Text>
      </View>
    );
}

export default Loader;