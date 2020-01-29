import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import style from './styleCardList';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

import {connect} from 'react-redux';
import { fetchData } from '../../store/actions/actionCreators';

const CardList = (props) => {

  useEffect( () => {
      props.fetchData();
    },[]);

  return (
      <View style={style.container}>
        {
          !props.isDataRecieved
          ? <Loader />
          : renderCards()
			  }
      </View>
  );

  function renderCards(){
    let dataItems = props.dataFromTheMovieDB.items.concat();
  
    return dataItems.map((item,index) => {
      return(
        <Card
          movieInfo = {item}
          key = {item.id}
          imageSource = {item.poster_path}
          originalTitle = {item.original_title}
          releaseDate = {item.release_date}
          overview = {item.overview}
        />
      );
    });
  }
}

function mapStateToProps(state){
	return{
		dataFromTheMovieDB: state.cardList.dataFromTheMovieDB,
		hasErrored: state.cardList.hasErrored,
    isLoading: state.cardList.isLoading,
		isDataRecieved: state.cardList.isDataRecieved
	}
}

function mapDispatchToProps(dispatch){
	return{
		fetchData: () => dispatch(fetchData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
