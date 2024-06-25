import {View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to payment (temporary)"
        onPress={() => {
          navigation.navigate('PaymentsStack', {screen: 'Payments'});
        }}
      />
      <Button
        title="Go to pay with cards (temporary)"
        onPress={() => {
          navigation.navigate('PayWithCardStack', {
            screen: 'PayWithCard',
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;
