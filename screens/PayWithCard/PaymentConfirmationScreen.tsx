import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type PaymentConfirmationRouteProps = RouteProp<
  RootStackParamList,
  'PaymentConfirmation'
>;
type PaymentConfirmationNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'PaymentConfirmation'
>;
type PaymentConfirmationProps = {
  route: PaymentConfirmationRouteProps;
};

const PaymentConfirmationScreen: React.FC<PaymentConfirmationProps> = ({
  route,
}) => {
  const {data} = route.params; // pass to receipt screen
  return (
    <View className="h-full flex justify-between">
      <View className="flex items-center justify-center gap-6 h-[70%]">
        <Image
          source={require('../../assets/icons/payment_confirmation.png')}
        />
        <Text className="text-2xl">Money Sent to Cashier</Text>
      </View>
      <View className="mx-8 gap-y-7 mb-10">
        <TouchableOpacity className="flex items-center">
          <Text className="text-[#6200EA]">Generate receipt</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#6200EA] p-4 rounded-full flex items-center">
          <Text className="text-white">Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentConfirmationScreen;
