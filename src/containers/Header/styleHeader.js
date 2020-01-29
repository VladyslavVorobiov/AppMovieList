import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container:{
        height: 110,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#30d0fe",
        shadowColor: "#000",
        shadowOffset: {width:0, height: 5},
        shadowOpacity: 0.3,
    },
    textStyle:{
        color: "#fff",
        fontSize: 40,
        fontFamily: "Verdana",
        marginBottom: 2,
        shadowColor: "#000",
        shadowOffset: {width:0, height: 5},
        shadowOpacity: 0.3,
    }
});

export default style;