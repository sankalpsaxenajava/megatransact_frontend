import {View, TextInput, Text, Image, StyleSheet} from 'react-native';

export const InputField: React.FC<InputFieldProps> = ({
  iconName,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  onBlur,
  error,
}) => (
  <View style={[styles.inputField, !!error && {borderColor: 'red'}]}>
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      placeholderTextColor="#ccc"
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
    {!!error && <Text style={styles.errorText}>{error}</Text>}
    {iconName && <Image source={iconName} style={styles.inputIcon} />}
  </View>
);

interface InputFieldProps {
  iconName?: any;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  error: string;
}

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
    paddingVertical: 13,
    paddingRight: 20,
    paddingLeft: 30,
  },
  inputIcon: {
    width: 25,
    height: 17,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Manrope-Regular',
    color: '#000000',
    paddingVertical: 3,
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
