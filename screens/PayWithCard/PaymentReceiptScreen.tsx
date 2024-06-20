import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';
import {ImageBackground, Text, View} from 'react-native';
import BackNavigationHeader from '../../components/BackNavigationHeader';
import MegaTransactTitle from '../../components/MegaTransactTitle';

type PaymentReceiptRouteProps = RouteProp<RootStackParamList, 'PaymentReceipt'>;
type PaymentReceiptNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'PaymentReceipt'
>;
type PaymentReceiptProps = {
  route: PaymentReceiptRouteProps;
};

const PaymentReceiptScreen: React.FC<PaymentReceiptProps> = ({route}) => {
  const {data} = route.params;
  const navigation = useNavigation<PaymentReceiptNavigationProps>();
  return (
    <View className="mx-4">
      <BackNavigationHeader
        onBackHandler={() =>
          navigation.navigate('PaymentConfirmation', {data: data})
        }
        label="Receipt"
        buttonClassName="bg-white items-center flex"
        headerClassName="flex items-center py-3"
      />
      <View className="bg-white rounded-xl h-[70%]">
        <ImageBackground
          source={require('../../assets/images/receipt_header.png')}
          resizeMode="cover"
          className="h-[55%] w-full">
          <View className="flex-row items-center justify-between py-6 px-4">
            <MegaTransactTitle
              iconSize={4.5}
              textSize={3}
              componentClassName="flex-row items-center gap-2"
              textComponentClassName="flex-col items-start"
            />
            <Text className="text-xs">Transaction Details</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default PaymentReceiptScreen;
