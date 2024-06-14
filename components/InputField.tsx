import {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const InputField: React.FC<InputFieldProps> = ({
  iconName,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  onBlur,
  error,
  varient,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <View style={[styles.inputField, !!error && {borderColor: 'red'}]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={varient == 'password' ? isHidden : secureTextEntry}
        style={styles.input}
        placeholderTextColor="#ccc"
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
      {!varient && iconName && (
        <Image source={iconName} style={styles.inputIcon} />
      )}
      {varient == 'password' && (
        <TouchableOpacity onPress={() => setIsHidden(!isHidden)}>
          <Image
            source={
              isHidden
                ? require('../assets/icons/eye_off.png')
                : require('../assets/icons/eye_on.png')
            }
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

interface InputFieldProps {
  iconName?: any;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  error: string;
  varient?: 'password' | undefined;
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
