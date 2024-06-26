import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListItem from '../../components/ListItem';
import Header from '../../components/Header';

const BillPaymentOptionScreen: React.FC = ({navigation, route}) => {
  const {category} = route.params;
  console.log(category);
  const listData = [
    {
      icon: 'mpesaLogo',
      mainText: 'Buy via M-Pesa',
      description:
        category === 'AirtimePurchase'
          ? 'Top up your airtime easily'
          : 'Purchase mobile data easily',
      onPress: () => {
        navigation.navigate(category);
      },
    },
    {
      icon: 'megatransactLogo',
      mainText: 'Buy Directly',
      description:
        category === 'AirtimePurchase'
          ? 'Top up your airtime easily'
          : 'Purchase mobile data easily',
      onPress: () => {
        console.log('nav to mobile data screen');
        navigation.navigate(category);
      },
    },
  ];
  return (
    <View style={styles.container}>
      <Header title=" " haveBorder={false} />
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
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    marginHorizontal: 25,
    marginTop: 30,
    marginBottom: 10,
  },
});

export default BillPaymentOptionScreen;
