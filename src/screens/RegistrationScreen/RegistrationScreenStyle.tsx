import { StyleSheet } from 'react-native'
import { Color, Responsive } from '../../utils'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.background,
    paddingHorizontal: Responsive.scale(30),
    paddingTop: Responsive.verticalScale(50)
  },
  title: {
    marginTop: Responsive.verticalScale(20),
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: Responsive.verticalScale(20),
    color: Color.primaryText
  },
  logoView: {
    width: Responsive.scale(100),
    height: Responsive.scale(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderRadius: 100
  },
  logoImg: {
    width: '70%',
    height: '70%'
  },
  formContainer: {
    marginTop: Responsive.verticalScale(20),
    width: '100%'
  },
  bottomText: {
    marginTop: Responsive.verticalScale(20),
    fontSize: Responsive.scale(14),
    color: Color.black,
    textAlign: 'center'
  },
  bottomTextLink: {
    color: Color.themeBlue,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Responsive.verticalScale(10)
  }
})
