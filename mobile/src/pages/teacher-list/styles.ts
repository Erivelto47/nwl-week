import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f3'
  },

  teacherList: {
    marginTop: -40,
    marginBottom: 300
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular'
  },

  input: {
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },

  inputPickerBlock: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    height: 54,
    marginTop: 4,
    marginBottom: 16,
    borderRadius: 9
  },

  inputPicker: {
    color: '#6A6180',
  },

  inputPickerButton: {
    alignItems: 'center',
  },

  inputPickerButtonText: {
    fontFamily: 'Poppins_400Regular',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: '#6A6180',
  },

  inputPickerItem: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180'
  },


  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  inputBlock: {
    width: '48%'
  },

  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 16,
  },

  activeIndicator: {
    backgroundColor: '#f1f1f3',
    marginTop: 50,
    justifyContent: "space-around",
  }

})

export default styles;
