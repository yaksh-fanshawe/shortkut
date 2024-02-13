import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Color } from '../utils'

interface AppTextInputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const AppTextInput: React.FC<AppTextInputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.textField}
      placeholder={placeholder}
      placeholderTextColor={Color.placeholder}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      keyboardType={placeholder === 'Email' ? 'email-address' : 'default'}
      secureTextEntry={placeholder === 'Password'}
      autoCapitalize={'none'}
    />
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  textField: {
    backgroundColor: Color.white,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: Color.blueShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    paddingLeft: 20,
    fontSize: 16,
    color: Color.regularText
  }
})
