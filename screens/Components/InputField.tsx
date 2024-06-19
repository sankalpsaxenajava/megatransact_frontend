import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import icons from '../../assets/icons';

interface InputFieldProps {
  iconName?: any;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  error?: string;
  editable?: boolean;
  labelIcon?: string;
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
  labelIcon,
}) => (
  <View style={[styles.inputField, !!error && {borderColor: 'red'}]}>
    {labelIcon && <Image source={icons[labelIcon]} className="w-5 h-5 mx-2" />}
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
    paddingVertical: 2,
    paddingRight: 20,
    paddingLeft: 10,
    height: 50,
  },
  inputIcon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    fontSize: 14,
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
