import {StyleSheet} from "react-native";
import general from "../../assets/styles/general";
import colorsDefault from "../../assets/styles/color";
import fontsDefault from "../../assets/styles/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  content: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: colorsDefault.colorPrimary,
  },

  contentKeyboard: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colorsDefault.colorPrimary,
  },

  backgroundContent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colorsDefault.colorPrimary,
  },

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
    top: 40,
    alignItems: 'center',
  },

  form: {

  },
  formContent: {
    flex: 3,
    backgroundColor: colorsDefault.colorBackground,
    justifyContent: 'center',
  },

  inputPasswordGroup: {
    flexDirection: 'row',
    alignContent: "center",
    alignItems: 'center',
  },

  inputPassword: {
    width: '100%'
  },

  inputPasswordHide: {
    backgroundColor: '#fff',
    position: "absolute",
    end: 16,
    color: colorsDefault.colorPrimaryLight
  },

  inputGroup: {
    width: '83%',
    alignSelf: 'center'
  },
  input: general.input,
  label: general.label,
  submitButton: general.okButtonLanding,
  submitButtonText: general.okButtonTextLanding,

  formHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    marginBottom: 20
  },
  formHeaderText: {
    flex: 1,
    fontFamily: fontsDefault.PoppinsSemiBold,
    color: colorsDefault.colorTextTitle,
    fontSize: 22,
    lineHeight: 37,
    maxWidth: 220,
  },
  formHeaderTextButton: {
    fontFamily: fontsDefault.PoppinsRegular,
    fontSize: 12,
    color: colorsDefault.colorPrimaryLight
  },
  formFooter: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxGroup: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },

  formFooterRememberText: {
    fontFamily: fontsDefault.PoppinsRegular,
    fontSize: 12,
    margin: 3,
    color: colorsDefault.colorTextComplement
  },
  formFooterPasswordRecoveryText: {
    fontFamily: fontsDefault.PoppinsRegular,
    fontSize: 12,
    color: colorsDefault.colorTextComplement
  }

})

export default styles
