import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container:{
        height: 80,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        paddingLeft: 25
    },
    textStyle:{
        color: "#000",
        fontSize: 25,
        fontFamily: "Arial",
        marginBottom: 2,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
});

export default style;