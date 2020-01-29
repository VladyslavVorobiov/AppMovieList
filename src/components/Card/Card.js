import React, {useContext, useCallback} from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import style from './styleCard';
import Context from '../../context/context';
import { urlImagesSizeW200 } from '../../config/default.json';

const Card = (props) => {
  const { navigate } = useContext(Context);
    
  return (
      <View style={style.container}>
        <TouchableOpacity 
          onPress={ useCallback( () => {
              navigate('Details', { movieInfo: props.movieInfo });
            },[])
          }
        >
          <ImageBackground 
            source={{uri: urlImagesSizeW200 + props.imageSource}}
            style={style.styleImageBackground}
          >
            <View style={style.containerText}>
              <Text style={style.textTitle}>{props.originalTitle || "No Title"} </Text>
              <Text style={style.textYear}>{ parseInt(props.releaseDate, 10) || "No Year"} </Text>
            </View>
          </ImageBackground>
          

        </TouchableOpacity>
        
      </View>
    );
}

export default Card;
       /*
       
      */
/*
return (
      <View style={style.container}>
        <TouchableOpacity 
          onPress={ useCallback( () => {
              navigate('Details', { movieInfo: props.movieInfo });
            },[])
          }
        >
          <Image
            style={style.image}
            source={{uri: urlImagesSizeW200 + props.imageSource}}
          />
        </TouchableOpacity>
        <View style={style.containerText}>
          <Text style={style.textTitle}>{props.originalTitle || "No Title"} </Text>
          <Text style={style.textYear}>{props.releaseDate || "No Year"} </Text>
        </View>
      </View>
    );
*/