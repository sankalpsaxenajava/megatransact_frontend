import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';
import CustomScrollView from '../../components/CustomScrollView';
import {InputField} from '../../components/InputField';
import Header from '../../components/Header';
import MegaTransactTitle from '../../components/MegaTransactTitle';
import icons from '../../assets/icons';

type SignUpNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

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
      Alert.alert(
        'Validation Error',
        'Please fix the errors before submitting.',
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <CustomScrollView>
        <View style={{width: '100%'}}>
          <Header title="" haveBorder={false} />
          <MegaTransactTitle iconSize={5.5} textSize={5.5} />
          <Text style={styles.signupText}>Sign up</Text>
          <Text style={styles.smallText}>Register to own an account.</Text>

          <View style={styles.inputContainer}>
            <InputField
              placeholder="First Name"
              secureTextEntry={false}
              value={firstName}
              onChangeText={setFirstName}
              onBlur={() => setFirstNameError('')}
              error={firstNameError}
            />
            <InputField
              placeholder="Last Name"
              secureTextEntry={false}
              value={lastName}
              onChangeText={setLastName}
              onBlur={() => setLastNameError('')}
              error={lastNameError}
            />
            <InputField
              iconName={icons.emailIcon}
              placeholder="Email"
              secureTextEntry={false}
              value={email}
              onChangeText={setEmail}
              onBlur={() => setEmailError('')}
              error={emailError}
            />
            <InputField
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              onBlur={() => setPasswordError('')}
              error={passwordError}
              varient="password"
            />
            <InputField
              placeholder="Retype Password"
              secureTextEntry={true}
              value={retypePassword}
              onChangeText={setRetypePassword}
              onBlur={() => setRetypePasswordError('')}
              error={retypePasswordError}
              varient="password"
            />
            <InputField
              iconName={icons.phoneIcon}
              placeholder="Phone Number (Optional)"
              secureTextEntry={false}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              onBlur={() => setPhoneNumberError('')}
              error={phoneNumberError}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </CustomScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signupText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
    fontFamily: 'Manrope-Regular',
    paddingTop: 60,
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
});

export default SignUpScreen;
