import { View, Image } from 'react-native'
import React from 'react'
import { styles } from './FirstScreenStyle'
import { Images, Screen } from '../../utils'
import { AppButton, AppContainer } from '../../components'
import { FireStorage, Firestore } from '../../firebase'

interface FirstScreenProps {
  navigation: any;
}

const FirstScreen: React.FC<FirstScreenProps> = ({ navigation }) => {
  const onPressLogin = () => {
    navigation.push(Screen.LoginScreen)
  }

  const onPressSetUpBusiness = () => {
    // Firestore.createUser({
    //   email: 'sk@sk.com',
    //   displayName:'DISPLAY',
    //   userId: 'xcvddswerfff',
    //   isMerchant: true
    // })
    navigation.push(Screen.BusinessRegistrationScreen)
  }

  return (
    <AppContainer style={styles.mainContainer}>
      <View style={styles.logoView}>
        <Image source={Images.logo} style={styles.logoImg} resizeMode={'contain'} />
      </View>
      <AppButton
        text={'Set Up Your Business'}
        onPress={onPressSetUpBusiness}
        style={styles.buttonTouch}
      />
      <AppButton text={'Login'} onPress={onPressLogin} style={styles.buttonTouch} />
    </AppContainer>
  )
}

export default FirstScreen
