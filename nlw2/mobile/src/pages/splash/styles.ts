import {StyleSheet} from "react-native";
import general from "../../assets/styles/general";
import colorsDefault from "../../assets/styles/color";
import fontsDefault from "../../assets/styles/fonts";

const styles = StyleSheet.create({
    container: general.containerLanding,

    content: general.contentLanding,

    title: general.titleLanding,

    description: {
        marginTop: 10,
        color: colorsDefault.colorTextInPrimary,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: fontsDefault.PoppinsRegular,
        maxWidth: 140,
        marginRight: 20
    },

    contentContainer: {
        alignItems: 'center',
    }
})

export default styles

