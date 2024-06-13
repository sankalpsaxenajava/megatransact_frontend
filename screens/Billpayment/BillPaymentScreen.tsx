import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../components/Header';
import DropDownInput from '../components/DropDownInput';
import InputField from '../components/InputField';

type SignUpNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

const countryList = [
  {
    id: 1,
    label: 'india',
  },
  {
    id: 2,
    label: 'usa',
  },
];

const categoryList = [
  {
    id: 1,
    label: 'Electricity',
  },
  {
    id: 2,
    label: 'Bill Payment',
  },
];

const billerList = [
  {
    id: 1,
    label: 'Biller 1',
  },
  {
    id: 2,
    label: 'Biller 2',
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/; // Adjust regex based on your country's phone number format

const BillPaymentScreen: React.FC = () => {
  const navigation = useNavigation<SignUpNavigationProp>();
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [biller, setBiller] = useState('');
  const [meternumber, setMeterNumber] = useState('');
  const [amount, setAmount] = useState('');

  // const validateInput = () => {
  //   let valid = true;
  //   if (!firstName.trim()) {
  //     setFirstNameError('First name is required');
  //     valid = false;
  //   } else {
  //     setFirstNameError('');
  //   }

  //   if (!lastName.trim()) {
  //     setLastNameError('Last name is required');
  //     valid = false;
  //   } else {
  //     setLastNameError('');
  //   }

  //   if (!emailRegex.test(email)) {
  //     setEmailError('Please enter a valid email');
  //     valid = false;
  //   } else {
  //     setEmailError('');
  //   }

  //   if (password.length < 8) {
  //     setPasswordError('Password must be at least 8 characters');
  //     valid = false;
  //   } else {
  //     setPasswordError('');
  //   }

  //   if (password !== retypePassword) {
  //     setRetypePasswordError('Passwords do not match');
  //     valid = false;
  //   } else {
  //     setRetypePasswordError('');
  //   }

  //   if (phoneNumber && !phoneRegex.test(phoneNumber)) {
  //     setPhoneNumberError('Please enter a valid phone number');
  //     valid = false;
  //   } else {
  //     setPhoneNumberError('');
  //   }

  //   return valid;
  // };

  // const handleSignUp = () => {
  //   if (validateInput()) {
  //     navigation.navigate('VerifyEmail');
  //   } else {
  //     Alert.alert(
  //       'Validation Error',
  //       'Please fix the errors before submitting.',
  //     );
  //   }
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header title="" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <Image
          source={require('../assets/logos/MegaTransactLogo.png')}
          style={styles.logo}
        /> */}

        <Text style={{color: '#121212', fontSize: 20, fontWeight: 'semibold'}}>
          Pay for Bills
        </Text>

        <View style={styles.inputContainer}>
          <DropDownInput
            label="Country"
            placeholder="Select Country"
            options={countryList}
            value={country}
            type="Country"
            onChangeValue={setCountry}
          />
          <DropDownInput
            label="Category"
            placeholder="Select Catogory"
            options={categoryList}
            value={category}
            type="Category"
            onChangeValue={setCategory}
          />
          <DropDownInput
            label="Biller"
            placeholder="Select Biller"
            options={billerList}
            value={biller}
            type="Biller"
            onChangeValue={setBiller}
          />
          <View>
            <Text style={{padding: 10, color: '#000000', fontSize: 14}}>
              Meter Number
            </Text>
            <InputField
              placeholder="Enter Meter Number"
              secureTextEntry={false}
              value={meternumber}
              onChangeText={setMeterNumber}
              editable={true}
              // onBlur={() => setEmailError('')}
              //error={emailError}
            />
          </View>
          <View>
            <Text style={{padding: 10, color: '#000000', fontSize: 14}}>
              Amount
            </Text>
            <InputField
              placeholder="Enter Amount"
              secureTextEntry={false}
              value={amount}
              onChangeText={setAmount}
              editable={true}
              // onBlur={() => setEmailError('')}
              //error={emailError}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('TransactionReview');
          }}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
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
  button: {
    backgroundColor: '#6200EA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    height: 60,
  },
  buttonText: {
    color: '#fff',
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

export default BillPaymentScreen;
