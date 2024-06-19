import {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../Components/Header';
import DropDownInput from '../Components/DropDownInput';
import {countryList, dataPlanList, networkList} from '../../types/mockData';
import {InputField} from '../../components/InputField';

const MobileDataScreen = ({navigation}) => {
  const [country, setCountry] = useState('');
  const [network, setNetwork] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dataPlan, setDataPlan] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <View style={{flex: 1}}>
      <Header title="" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={{color: '#121212', fontSize: 20, fontWeight: 'semibold'}}>
          Buy Mobile Data
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
              label="Network"
              placeholder="Select Network"
              options={networkList}
              value={network}
              type="Network"
              onChangeValue={setNetwork}
            />
            <DropDownInput
              label="Data Plan"
              placeholder="Select Data Plan"
              options={dataPlanList}
              value={dataPlan}
              type="Data Plan"
              onChangeValue={setDataPlan}
            />
            <View>
              <Text style={{padding: 10, color: '#000000', fontSize: 14}}>
                Phone Number
              </Text>
              <InputField
                placeholder="Enter Phone Number"
                secureTextEntry={false}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
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
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('TransactionReview', {
              // TODO: change to dynamic value later
              transactionDetail: [
                {key: 'Amount', value: parseFloat(amount)},
                {key: 'Phone Number', value: phoneNumber},
                {key: 'Plan', value: dataPlan},
                {key: 'Network', value: network},
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
export default MobileDataScreen;
