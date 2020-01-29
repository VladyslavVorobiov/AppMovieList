import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import style from './styleCardList';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

import {connect} from 'react-redux';
import { fetchData } from '../../store/actions/actionCreators';

const CardList = (props) => {
  const [isDataRecieved, setIsDataRecieved] = useState(false);
  let data = [];

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
    let data = props.dataFromUnsplash.concat();
  
    return data.map((item,index) => {
      return(
        <Card
          key = {item.id}
          imageSourceSmall = {item.urls.small}
          imageSourceFull = {item.urls.full}
          description = {item.description}
          authorName = {item.user.name}
        />
      );
    });
  }
}

function mapStateToProps(state){
	return{
		dataFromUnsplash: state.cardList.dataFromUnsplash,
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
