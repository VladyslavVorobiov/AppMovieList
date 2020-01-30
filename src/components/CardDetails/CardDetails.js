import React, {useEffect,useState} from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import style from './styleCardDetails';
import { TheMovieDBUrl, urlImagesSizeW300,urlImagesSizeW200, apiKey } from '../../config/default.json';
import withScroll from '../../hoc/withScroll';
import {fetchData} from '../../functions/http';

const CardDetails = (props) => {

  const [isDownloadedSimilarMovies, setIsDownloadedSimilarMovies] = useState(false);
  const [objectSimilarMovies, setObjectSimilarMovies] = useState({});

  const movieInfo = props.navigation.state.params.movieInfo;

  useEffect( () => {

    const url = TheMovieDBUrl + "movie/" + movieInfo.id + "/similar?" + apiKey;
    fetchSimilarMovies();

    async function fetchSimilarMovies(){
      let result = await fetchData(url, "GET");
      setObjectSimilarMovies(result);
      setIsDownloadedSimilarMovies(true);
    };

  },[]);

    return (
      <View style={style.container}>
        <Image
          style={style.image}
          source={{uri: urlImagesSizeW300 + movieInfo.poster_path}}
        />
        <View style={style.containerMovieInfo}>
          <View style={style.circle}>
            <Text style={style.titleFilm}>{ Math.trunc(movieInfo.popularity).toString() + "%" }</Text>
          </View>
          <Text style={style.textDate}>{ parseInt(movieInfo.release_date, 10)}</Text>
          <Text style={style.titleFilm}>{movieInfo.original_title}</Text>
          <Text style={style.overviewTitle}>overview:</Text>
          <Text style={style.overviewText}>{movieInfo.overview}</Text>
          <Text style={style.overviewTitle}>similar movies:</Text>


          <ScrollView 
            style={style.containerSimilarMovies} 
            horizontal={true}
          >
            {
              !isDownloadedSimilarMovies 
              ? <Text style={style.overviewTitle}>Loading ...</Text>
              : renderSimilarMovies()
            }
          </ScrollView>

        </View>

      </View>
    );

    function renderSimilarMovies(){
      let data = objectSimilarMovies;
      return data.results.map((item,index) => {
        return(
          <View 
            key = {item.id}
            style={style.containerSimilarMovies}
          >
              <Image
                style={style.imageSimilarMovie}
                source={{uri: urlImagesSizeW200 + item.poster_path}}
              />
              <Text  
                style={style.overviewTitle}>{item.original_title}
              </Text>
          </View>
          
        );
      });
      
    }
}

export default withScroll(CardDetails);