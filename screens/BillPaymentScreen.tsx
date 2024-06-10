import {FlatList, Text, View} from 'react-native';
import ListItem from '../assets/components/ListItem';

const BillPaymentScreen: React.FC = () => {
  const listData = [
    {
      icon: 'userIcon',
      mainText: 'Buy Airtime',
      description: 'Top up your airtime easily',
      onPress: () => {
        console.log('nav to airtime screen');
      },
    },
    {
      icon: 'dataIcon',
      mainText: 'Buy Mobile Data',
      description: 'Select a data plan that fits you',
      onPress: () => {
        console.log('nav to mobile data screen');
      },
    },
    {
      icon: 'scanIcon',
      mainText: 'Pay Bills',
      description: 'Pay bills at your Fingertips',
      onPress: () => {
        console.log('nav to pay bill screen');
      },
    },
  ];
  return (
    <View>
      <Text>Bill Payment</Text>
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

export default BillPaymentScreen;
