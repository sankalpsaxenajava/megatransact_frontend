import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListItem from '../../components/ListItem';
import Header from '../../components/Header';

const PaymentsScreen: React.FC = ({navigation}) => {
  const listData = [
    {
      icon: 'userIcon',
      mainText: 'Buy Airtime',
      description: 'Top up your airtime easily',
      onPress: () => {
        console.log('nav to airtime screen');
        navigation.navigate('PaymentOption', {category: 'AirtimePurchase'});
      },
    },
    {
      icon: 'dataIcon',
      mainText: 'Buy Mobile Data',
      description: 'Select a data plan that fits you',
      onPress: () => {
        console.log('nav to mobile data screen');
        navigation.navigate('PaymentOption', {category: 'MobileData'});
      },
    },
    {
      icon: 'scanIcon',
      mainText: 'Pay Bills',
      description: 'Pay bills at your Fingertips',
      onPress: () => {
        console.log('nav to mobile data screen');
        navigation.navigate('BillPayment');
      },
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="" haveBorder={false} />
      <Text style={styles.heading}>Bill Payment</Text>
      <FlatList
        data={listData}
        renderItem={({item}) => (
          <ListItem
            icon={item.icon} // Pass the icon name as a prop
            mainText={item.mainText}
            description={item.description}
            onPress={item.onPress}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    marginHorizontal: 25,
    marginTop: 30,
    marginBottom: 10,
  },
});

export default PaymentsScreen;
