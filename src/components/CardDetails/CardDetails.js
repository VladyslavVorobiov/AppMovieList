import React, {useContext} from 'react';
import { Text, View, Image } from 'react-native';
import style from './styleCardDetails';
import { urlImagesSizeW300 } from '../../config/default.json';
import withScroll from '../../hoc/withScroll';

const CardDetails = (props) => {
  const movieInfo = props.navigation.state.params.movieInfo;

    return (
      <View style={style.container}>
        <Image
          style={style.image}
          source={{uri: urlImagesSizeW300 + movieInfo.poster_path}}
        />
        <View style={style.containerText}>
          <Text style={style.textDate}>{ parseInt(movieInfo.release_date, 10)}</Text>
          <Text style={style.title}>{movieInfo.original_title}</Text>
          <Text style={style.overview}>{movieInfo.overview}</Text>
        </View>

      </View>
    );
}

export default withScroll(CardDetails);