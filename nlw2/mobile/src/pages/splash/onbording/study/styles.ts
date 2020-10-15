import {StyleSheet} from 'react-native';

import colorsDefault from '../../../../assets/styles/color';
import fontsDefault from '../../../../assets/styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsDefault.colorPrimary,
    justifyContent: 'center',
  },

  studyContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  studyIcon: {
    top: 40,
  },

  studyTextContainer: {
    backgroundColor: colorsDefault.colorBackground,
    flex: 3,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  backgroundContent: {
    flex: 1,
    justifyContent: 'center',
  },

  textContent: {
    flex: 3,
    justifyContent: 'center'
  },

  studyNumber: {
    fontFamily: fontsDefault.ArchivoRegular,
    fontSize: 40,
    color: colorsDefault.colorPrimaryLighter,
    opacity: 0.2
  },

  descriptionText: {
    fontFamily: fontsDefault.PoppinsSemiBold,
    color: colorsDefault.colorPrimaryLight,
    fontSize: 23,
    maxWidth: 230,
    top: 20
  },

  footerIndicators: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
  },

  indicatorsSquare: {
    flexDirection: 'row',
  },

  indicatorSelectSquare: {
    paddingRight: 13
  },
})

export default styles;
