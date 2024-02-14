import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { Color } from "../utils";

interface AppTextInputProps {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  editable: boolean;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  editable,
}) => {
  return (
    <TextInput
      style={styles.textField}
      placeholder={placeholder}
      placeholderTextColor={Color.placeholder}
      onChangeText={editable ? onChangeText : () => console.log("")}
      value={value}
      keyboardType={placeholder === "Email" ? "email-address" : "default"}
      secureTextEntry={placeholder === "Password"}
      autoCapitalize={"none"}
      editable={editable}
    />
  );
};

export default AppTextInput;

AppTextInput.defaultProps = {
  onChangeText: (t) => console.log("onChangeText" + t),
};

const styles = StyleSheet.create({
  textField: {
    backgroundColor: Color.blackShadow,
    height: 50,
    borderRadius: 10,
    marginVertical: "1%",
    width: "100%",
    shadowColor: Color.lightGray2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    paddingLeft: 20,
    fontSize: 16,
    color: Color.primaryText,
  },
});
