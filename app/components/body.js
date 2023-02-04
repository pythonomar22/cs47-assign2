import { NavigationContext } from '@react-navigation/native';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import Profiles from "../../assets/Profiles";
import Themes from "../../assets/Themes";
import {useState} from "react";

const Body = () => {
    console.log('Profiles', Profiles.mtl);
    // const [shadows, setShadows] = useState(Themes.light.shadows); i tried to follow the documentation linked to teh shadow prop on ed, but couldn't get it to work for some reason
    return (
        <View style={styles.container}>
            <ImageBackground source={Profiles.mtl.image} style={styles.image} imageStyle={styles.imageStyle}>
                <Text style={styles.text} >{Profiles.mtl.name}</Text>
                <Text style={styles.text} >{Profiles.mtl.caption}</Text>
            </ImageBackground>
            <View style={styles.rectangle}>
                <Text style={styles.rectangleText}>My Hottest Take</Text>
            </View>
        </View>
    );    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100,
        paddingTop: 0,
        marginHorizontal: 20,
    },
    image: {
        width: "100%",
        aspectRatio: 1/1.1,
        height: undefined,
        justifyContent: "space-between",

    },
    imageStyle: {
        borderRadius: 8,
    },
    text: {
        fontFamily: "Sydney",
        fontSize: 20,
        padding: 8,
        color: "white",
    },
    rectangle: {
        width: "100%",
        height: 100,
        backgroundColor: "white",
        borderRadius: 8,
        marginTop: 20,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5
    }
});

export default Body;