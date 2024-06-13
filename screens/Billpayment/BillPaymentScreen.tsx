import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ItemsListModal from '../components/ItemsListModal';
import Header from '../components/Header';

interface InputFieldProps {
  iconName?: any;
  placeholder: string;
  secureTextEntry: boolean;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  error: string;
  editable: boolean;
}

type SignUpNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/; // Adjust regex based on your country's phone number format

const BillPaymentScreen: React.FC = () => {
  const navigation = useNavigation<SignUpNavigationProp>();
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [biller, setBiller] = useState('');
  const [meternumber, setMeterNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [showmodal, setShowmodal] = useState(false);
  const [type, setType] = useState(null);

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
          <View>
            <Text style={{padding: 10, color: '#000000', fontSize: 14}}>
              Country
            </Text>
            <TouchableOpacity
              onPress={() => {
                setType('Country');
                setShowmodal(true);
              }}>
              <InputField
                iconName={require('../../assets/icons/arrow_icon.png')}
                placeholder="Select Country"
                secureTextEntry={false}
                value={country}
                onChangeText={setCountry}
                editable={false}
                // onBlur={() => setEmailError('')}
                //error={emailError}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{padding: 10, color: '#000000', fontSize: 14}}>
              Category
            </Text>
            <TouchableOpacity
              onPress={() => {
                setType('Category');
                setShowmodal(true);
              }}>
              <InputField
                iconName={require('../../assets/icons/arrow_icon.png')}
                placeholder="Select category"
                secureTextEntry={false}
                value={category}
                onChangeText={setCategory}
                editable={false}
                // onBlur={() => setEmailError('')}
                //error={emailError}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{padding: 10, color: '#000000', fontSize: 14}}>
              Biller
            </Text>
            <TouchableOpacity
              onPress={() => {
                setType('Biller');
                setShowmodal(true);
              }}>
              <InputField
                iconName={require('../../assets/icons/arrow_icon.png')}
                placeholder="Select Biller"
                secureTextEntry={false}
                value={biller}
                onChangeText={setBiller}
                editable={false}
                // onBlur={() => setEmailError('')}
                //error={emailError}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{padding: 10, color: '#000000', fontSize: 14}}>
              Meter Number
            </Text>
            <TouchableOpacity
              onPress={() => {
                setType('Meter');
                setShowmodal(true);
              }}>
              <InputField
                iconName={require('../../assets/icons/arrow_icon.png')}
                placeholder="Enter Meter Number "
                secureTextEntry={false}
                value={meternumber}
                onChangeText={setMeterNumber}
                editable={false}
                // onBlur={() => setEmailError('')}
                //error={emailError}
              />
            </TouchableOpacity>
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
      {showmodal && (
        <ItemsListModal
          // onTryAgainClick={selectItem}
          onDismiss={() => {
            setShowmodal(false);
          }}
          type={type}
          itemsList={
            type == 'Category'
              ? [
                  {
                    id: 1,
                    label: 'Electricity',
                  },
                  {
                    id: 2,
                    label: 'Bill Payment',
                  },
                ]
              : [
                  {
                    id: 1,
                    label: 'india',
                  },
                  {
                    id: 2,
                    label: 'usa',
                  },
                ]
          }
          // itemIndex={
          //  0
          // }
        />
      )}
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
  error,
  editable,
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
      editable={editable}
      pointerEvents="none"
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
