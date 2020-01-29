import { StyleSheet } from 'react-native';

const radiusImageBackground = 15;

const style = StyleSheet.create({
    container:{
        marginBottom:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.46,
        shadowRadius: 6,
        elevation: 17,
        width: 150, 
        height: 200,
    },
    containerText:{
        textAlign: "left",
        backgroundColor: "#fff",
        opacity: 0.8,
        paddingLeft: 10,
        paddingBottom: 10
    },
    textYear:{
        color: "#000",
        fontSize: 14,
        fontFamily: "Arial",
        marginTop: 10,
        opacity: 1
    },
    textTitle:{
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Arial",
        marginTop: 10,
        opacity: 1
    },
    styleImageBackground:{
        flexDirection: 'column-reverse',
        justifyContent: "flex-start",
        width: 140, 
        height: '100%',
        borderBottomLeftRadius: radiusImageBackground,
        borderBottomRightRadius: radiusImageBackground,
        borderTopRightRadius: radiusImageBackground,
        borderTopLeftRadius: radiusImageBackground,
        overflow: 'hidden',
    }
});

export default style;