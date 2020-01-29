import React, {useEffect} from 'react';

import Context from '../../context/context';
import Header from '../Header/Header';
import withScroll from '../../hoc/withScroll';
import Cardlist from '../CardList/CardList';

const CardListWithScroll = withScroll(Cardlist);

const HomeScreen = (props) => {
    const { navigate, setParams} = props.navigation;

    return (
    <Context.Provider value = {{
        navigate, setParams
    }}>
        <React.Fragment>
            <Header title={"Images"}/>
            <CardListWithScroll />
        </React.Fragment>
    </Context.Provider>
    );
}
export default HomeScreen;
