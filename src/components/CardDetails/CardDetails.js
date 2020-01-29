import React, {useContext} from 'react';
import { Text, View, Image } from 'react-native';
import style from './styleCardDetails';
import Context from '../../context/context';

const CardDetails = (props) => {
  const imageSourceFull = props.navigation.state.params.imageSourceFull;

    return (
      <View style={style.container}>
        <Image
          style={style.image}
          source={{uri: imageSourceFull}}
        />
      </View>
    );
}
export default CardDetails;