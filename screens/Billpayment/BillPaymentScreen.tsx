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
import Header from '../Components/Header';
import DropDownInput from '../Components/DropDownInput';
import {countryList, categoryList, billerList} from '../../types/mockData';
import {InputField} from '../../components/InputField';

type SignUpNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

const BillPaymentScreen: React.FC = () => {
  const navigation = useNavigation<SignUpNavigationProp>();
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  const [biller, setBiller] = useState('');
  const [meternumber, setMeterNumber] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <View style={{flex: 1}}>
      <Header title="" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={{color: '#121212', fontSize: 20, fontWeight: 'semibold'}}>
          Pay for Bills
        </Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('TransactionReview', {
              // TODO: change to dynamic value later
              transactionDetail: [
                {key: 'Amount', value: 400.0},
                {key: 'Meter Number', value: 'M0746P76389'},
                {key: 'Biller', value: 'Frank Energy Ltd.'},
              ],
            });
          }}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
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
    //  width: '90%',
    height: 60,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
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
