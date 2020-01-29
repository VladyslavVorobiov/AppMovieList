import { StyleSheet } from 'react-native';

const colorText = "#fff";
const fontFamily = 'Arial';

const style = StyleSheet.create({
    container:{
    },
    image:{
        width: "100%", 
        height: 500
    },
    containerText:{
        backgroundColor: "#222222",
        paddingLeft: 20,
    },
    textDate:{
        color: colorText,
        marginTop: 20,
        fontSize: 18,
        fontFamily: fontFamily
    },
    title:{
        color: colorText,
        fontFamily: fontFamily,
        fontSize: 25,
        fontWeight: "bold"
    },
    overview:{
        color: colorText,
        fontFamily: fontFamily
    }

});

export default style;