import { StyleSheet } from 'react-native'
import { Color, Responsive } from '../../utils'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoView: {
    width: Responsive.scale(150),
    height: Responsive.scale(150),
    marginBottom: Responsive.scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderRadius: 100
  },
  logoImg: {
    width: '70%',
    height: '70%'
  },
  headingText: {
    fontSize: Responsive.scale(18),
    color: Color.black,
    marginTop: Responsive.scale(50)
  },
  buttonTouch: {
    width: '70%',
  }
})
