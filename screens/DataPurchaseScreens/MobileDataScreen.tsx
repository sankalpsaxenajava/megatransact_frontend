import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

const countryList = [
  {key: '1', value: 'Africa'},
  {key: '2', value: 'New Zealand'},
];

const networkList = [
  {key: '1', value: 'Vodaphone'},
  {key: '2', value: 'Spark'},
  {key: '2', value: '2Degrees'},
];

const MobileDataScreen = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dataPlan, setDataPlan] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <View style={styles.screen}>
      <Text>Buy Mobile Data</Text>
      <View>
        <Text>Country</Text>
        <SelectList
          setSelected={val => setSelectedCountry(val)}
          data={countryList}
          save="value"
          defaultOption={{key: '1', value: 'Africa'}}
        />
      </View>
      <View>
        <Text>Network</Text>
        <SelectList
          setSelected={val => setSelectedNetwork(val)}
          data={networkList}
          save="value"
          defaultOption={{key: '1', value: 'Vodaphone'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    height: '100%',
  },
});
export default MobileDataScreen;
