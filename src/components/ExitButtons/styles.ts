import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exitText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingBottom: 10,
  },
  text1: {
      fontFamily: theme.fonts.title700,
      fontSize: 20,
      color: theme.colors.heading,
  },
  text2: {
      fontFamily: theme.fonts.title700,
      fontSize: 20,
      color: theme.colors.primary,
  },
  exitOptions:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  optionNo: {
    width: 160,
    height: 56,
    borderRadius: 8,
  },
  textNo: {
    width: 160,
    height: 56,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    fontSize: 18,
    color: theme.colors.heading,
  },
  optionYes: {
    width: 160,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },
  textYes: {
    fontSize: 18,
    color: theme.colors.heading,
},
});