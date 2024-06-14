import {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import DropDownInput from '../components/DropDownInput';
import InputField from '../components/InputField';

const countryList = [
  {
    id: 1,
    label: 'New Zealand',
    icon: 'nzIcon',
  },
  {
    id: 2,
    label: 'Africa',
    icon: 'africaIcon',
  },
  {
    id: 3,
    label: 'USA',
    icon: 'usIcon',
  },
];

const networkList = [
  {id: 1, label: 'Vodaphone'},
  {id: 2, label: 'Spark'},
  {id: 3, label: '2Degrees'},
];

const dataPlanList = [
  {id: 1, label: '10GB - 30 Days'},
  {id: 2, label: '20GB - 30 Days'},
  {id: 3, label: '40GB - 30 Days'},
];

const MobileDataScreen = ({navigation}) => {
  const [country, setCountry] = useState('');
  const [network, setNetwork] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dataPlan, setDataPlan] = useState('');
  const [amount, setAmount] = useState(0);

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
              type="Biller"
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
                editable={false}
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
                {key: 'Amount', value: 400.0},
                {key: 'Phone Number', value: 'M0746P76389'},
                {key: 'Plan', value: 'Frank Energy Ltd.'},
                {key: 'Network', value: 'Frank Energy Ltd.'},
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
