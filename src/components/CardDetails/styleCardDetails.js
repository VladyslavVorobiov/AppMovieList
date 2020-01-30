import { StyleSheet } from 'react-native';

const colorText = "#fff";
const fontFamily = 'Arial';

const style = StyleSheet.create({
    container:{
    },
    containerSimilarMovies:{
        width: 350,
        marginRight: 20
    },
    image:{
        width: "100%", 
        height: 500
    },
    imageSimilarMovie:{
        width: 300, 
        height: 300,
    },
    containerMovieInfo:{
        backgroundColor: "#222222",
        paddingLeft: 20,
    },
    textDate:{
        color: colorText,
        marginTop: 20,
        marginBottom: 15,
        fontSize: 18,
        fontFamily: fontFamily
    },
    titleFilm:{
        color: colorText,
        fontFamily: fontFamily,
        fontSize: 25,
        fontWeight: "bold",
        textTransform:"uppercase",
    },
    overviewTitle:{
        textTransform:"uppercase",
        color: colorText,
        fontFamily: fontFamily,
        fontSize: 18,
        marginTop: 35,
        marginBottom: 25,
        fontWeight: "bold",
    },
    overviewText:{
        color: colorText,
        fontFamily: fontFamily,
        fontSize: 18,
        paddingRight:10,
    },
    circle:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5F5C5C",
        padding: 10,
        borderRadius: 40,
        width: 80,
        height: 80,
        position:"absolute",
        right: 25,
        top: -40
    }

});

export default style;