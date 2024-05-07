import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigationTypes';

interface InputFieldProps {
  iconName?: any;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  error: string;
}

type SignUpNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/; // Adjust regex based on your country's phone number format

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<SignUpNavigationProp>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [retypePasswordError, setRetypePasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validateInput = () => {
    let valid = true;
    if (!firstName.trim()) {
      setFirstNameError('First name is required');
      valid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName.trim()) {
      setLastNameError('Last name is required');
      valid = false;
    } else {
      setLastNameError('');
    }

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== retypePassword) {
      setRetypePasswordError('Passwords do not match');
      valid = false;
    } else {
      setRetypePasswordError('');
    }

    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
      setPhoneNumberError('Please enter a valid phone number');
      valid = false;
    } else {
      setPhoneNumberError('');
    }

    return valid;
  };

  const handleSignUp = () => {
    if (validateInput()) {
      navigation.navigate('VerifyEmail');
    } else {
      Alert.alert('Validation Error', 'Please fix the errors before submitting.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('../assets/logos/MegaTransactLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>MegaTransact</Text>
        <Text style={styles.subtitle}>PROSPERING TOGETHER</Text>
        <Text style={styles.signupText}>Sign up</Text>
        <Text style={styles.smallText}>Register to own an account.</Text>

        <View style={styles.inputContainer}>
          <InputField placeholder="First Name" secureTextEntry={false} value={firstName} onChangeText={setFirstName} onBlur={() => setFirstNameError('')} error={firstNameError} />
          <InputField placeholder="Last Name" secureTextEntry={false} value={lastName} onChangeText={setLastName} onBlur={() => setLastNameError('')} error={lastNameError} />
          <InputField iconName={require('../assets/icons/email.png')} placeholder="Email" secureTextEntry={false} value={email} onChangeText={setEmail} onBlur={() => setEmailError('')} error={emailError} />
          <InputField iconName={require('../assets/icons/eye_off.png')} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} onBlur={() => setPasswordError('')} error={passwordError} />
          <InputField iconName={require('../assets/icons/eye_off.png')} placeholder="Retype Password" secureTextEntry={true} value={retypePassword} onChangeText={setRetypePassword} onBlur={() => setRetypePasswordError('')} error={retypePasswordError} />
          <InputField iconName={require('../assets/icons/phone.png')} placeholder="Phone Number (Optional)" secureTextEntry={false} value={phoneNumber} onChangeText={setPhoneNumber} onBlur={() => setPhoneNumberError('')} error={phoneNumberError} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}  
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const InputField: React.FC<InputFieldProps> = ({
  iconName,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  onBlur,
  error
}) => (
  <View style={[styles.inputField, !!error && { borderColor: 'red' }]}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EA',
    alignSelf: 'center',
    fontFamily: 'Manrope-Bold',
  },
  subtitle: {
    fontSize: 10,
    color: '#290062',
    alignSelf: 'center',
    fontFamily: 'Manrope-Regular',
    paddingBottom: 60,
  },
  signupText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
    fontFamily: 'Manrope-Regular',
  },
  smallText: {
    fontSize: 14,
    color: '#707070',
    marginBottom: 20,
    alignSelf: 'center',
    fontFamily: 'Manrope-Regular',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    paddingTop: 30,
  },
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
  },
  inputIcon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: '#000000'
  },
  button: {
    backgroundColor: '#6200EA',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Manrope-Bold',
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

export default SignUpScreen;
