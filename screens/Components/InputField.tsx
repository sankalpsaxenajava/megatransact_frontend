import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

interface InputFieldProps {
  iconName?: any;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  error?: string;
  editable?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  iconName,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  onBlur,
  error,
  editable = true,
}) => (
  <View style={[styles.inputField, !!error && {borderColor: 'red'}]}>
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      placeholderTextColor="#ccc"
      value={value}
      onChangeText={onChangeText}
      editable={editable}
      pointerEvents="none"
    />
    {!!error && <Text style={styles.errorText}>{error}</Text>}
    {iconName && <Image source={iconName} style={styles.inputIcon} />}
  </View>
);

const styles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#CFCFCF',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    width: '100%',
    paddingTop: 3,
    paddingRight: 20,
    paddingBottom: 3,
    paddingLeft: 13,
    height: 60,
  },
  inputIcon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: '#000000',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingTop: 2,
    textAlign: 'right',
    alignSelf: 'stretch',
    fontFamily: 'Manrope-Regular',
  },
});

export default InputField;
