import {RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigationTypes';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BalanceComponent} from '../../components/BalanceComponent';

type ReviewPaymentRouteProps = RouteProp<RootStackParamList, 'ReviewPayment'>;
type ReviewPaymentNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ReviewPayment'
>;
type ReviewPaymentProps = {
  route: ReviewPaymentRouteProps;
};

const ReviewPaymentScreen: React.FC<ReviewPaymentProps> = ({route}) => {
  const {data} = route.params;
  const navigation = useNavigation<ReviewPaymentNavigationProps>();
  const dataUnpackedList = [
    {
      label: 'Currency to send',
      data: data.currency,
    },
    {
      label: 'Recipient account',
      data: data.recipient_account,
    },
    {
      label: 'Recipient bank',
      data: data.recipient_bank,
    },
    {
      label: 'Description',
      data: data.description,
    },
  ];

  return (
    <View className="mx-4 flex-col justify-between h-full">
      <View>
        <View className="flex-row items-center mt-16 mb-10 justify-center w-full">
          <View className="left-0 absolute">
            <TouchableOpacity
              className="bg-white rounded-full w-10 h-10 items-center justify-center"
              onPress={() => navigation.navigate('PayWithCard')}>
              <Image
                source={require('../../assets/icons/back_icon.png')}
                className="w-6 h-6"
              />
            </TouchableOpacity>
          </View>
          <Text>Review Payment</Text>
        </View>
        <View className="flex-col items-center w-full h-[64%] bg-white rounded-xl">
          <BalanceComponent
            desc="Amount to send"
            balance={Number(data.amount)}
            textColor="text-black"
            customClassName="flex-col items-center py-5"
            titleSize={12}
          />
          <View className="flex-col items-start w-full px-4 divide-y divide-[#D9D9D9]">
            {dataUnpackedList.map(item => (
              <View className="w-full py-5 gap-y-1">
                <Text className="text-xs font-[200]">{item.label}</Text>
                <Text>{item.data}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <TouchableOpacity className="bg-[#6200EA] p-5 items-center justify-center flex rounded-xl mb-10">
        <Text className="text-white">Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewPaymentScreen;
