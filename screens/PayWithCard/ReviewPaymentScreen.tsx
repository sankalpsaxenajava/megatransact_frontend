import {RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigationTypes';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BalanceComponent} from '../../components/BalanceComponent';
import BackNavigationHeader from '../../components/BackNavigationHeader';

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
        <BackNavigationHeader
          onBackHandler={() => navigation.navigate('PayWithCard')}
          label="Review Payment"
          buttonClassName="bg-white items-center flex"
          headerClassName="flex items-center py-3"
        />
        <View className="flex-col items-center w-full h-[64%] bg-white rounded-xl">
          <BalanceComponent
            desc="Amount to send"
            balance={Number(data.amount)}
            textColor="text-black"
            componentClassName="flex-col items-center py-5"
            titleClassName="text-sm"
            varient="uneven"
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
      <TouchableOpacity
        className="bg-[#6200EA] p-5 items-center justify-center flex rounded-xl mb-10"
        onPress={() =>
          navigation.navigate('PaymentConfirmation', {data: data})
        }>
        <Text className="text-white">Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewPaymentScreen;
