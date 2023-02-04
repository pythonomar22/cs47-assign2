import {StyleSheet, View, Text, Image, Dimensions, StatusBar} from 'react-native'
import Icons from '../../assets/Icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image source={Icons.menu.light} style={styles.headerIcons} />
                <Text style={styles.title}>ensom</Text>
                <Image source={Icons.sun} style={styles.headerIcons} />  
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    headerIcons: {
        height: windowWidth * 0.10,
        width: windowHeight * 0.05,
        resizeMode: "contain"
    },
    title: {
        fontFamily: "Sydney-Bold",
        fontSize: 32,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 0,
        paddingTop: StatusBar.currentHeight,
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%", 
    }
});


export default Header;