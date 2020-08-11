import { StyleSheet } from "react-native";
import colorsDefault from "./color";
import fontsDefault from "./fonts";

const general = StyleSheet.create({
  contentLanding: {
    flex: 1,
    justifyContent: 'center'
  },

  containerLanding: {
    flex: 1,
    backgroundColor: colorsDefault.colorPrimary,
    justifyContent: 'center',
    padding: 40
  },

  titleLanding: {
    fontFamily: fontsDefault.ArchivoBold,
    color: colorsDefault.colorTitleInPrimary,
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 220,
  },

  descriptionLanding: {
    marginTop: 24,
    color: colorsDefault.colorTextInPrimary,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: fontsDefault.PoppinsRegular,
    maxWidth: 240,
  },

  okButtonLanding: {
    marginVertical: 40,
    backgroundColor: colorsDefault.colorSecundary,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },

  okButtonTextLanding: {
    color: colorsDefault.colorButtonText,
    fontSize: 16,
    fontFamily: fontsDefault.ArchivoRegular
  }
});

export default general;
