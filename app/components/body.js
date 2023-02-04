import { NavigationContext } from '@react-navigation/native';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import Profiles from "../../assets/Profiles";
import Themes from "../../assets/Themes";
import {useState} from "react";
import Icons from "../../assets/Icons";
import SwipeCards from 'react-native-swipe-cards';

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
                <Text style={styles.rectangleText}>My hottest take</Text>
                <Image source={Icons.audioWave.light} style={styles.soundwave}/>
                <Image source={Icons.player.light} style={styles.player} />
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
        //    shadowColor: shadow.shadowColor,
   // shadowOffset: shadow.shadowOffset,
    //shadowRadius: shadow.shadowRadius,

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
        height: 125,
        backgroundColor: "white",
        borderRadius: 8,
        marginTop: 20,
        shadowColor: "black",
        // i deleted the shadow settings in themes but theyre the same as the one in "image" if they worked
        shadowOpacity: 0.4,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5
    },
    soundwave: {
        resizeMode: "contain",
        width: 250,
        height: 300,
        position: "absolute",
        right: 10,
        bottom: -100,
    },
    player: {
        resizeMode: "contain",
        width: 70,
        height: 70,
        bottom: -40,
        left: 10,
    },
    rectangleText: {
        position: "absolute",
        top: 0,
        left: 0,
        color: "black",
        padding: 8, 
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Sydney"
    },
});

export default Body;