import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';
import {ImageBackground, Text, View} from 'react-native';
import BackNavigationHeader from '../../components/BackNavigationHeader';
import MegaTransactTitle from '../../components/MegaTransactTitle';
import {BalanceComponent} from '../../components/BalanceComponent';
import {cn} from '../../utils/cn';

type PaymentReceiptRouteProps = RouteProp<RootStackParamList, 'PaymentReceipt'>;
type PaymentReceiptNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'PaymentReceipt'
>;
type PaymentReceiptProps = {
  route: PaymentReceiptRouteProps;
};

interface InformationProps {
  title: string;
  subtitle?: string;
  data: string;
  varient: 'up' | 'down' | 'none'; // subtitle placement
}

const InformationComponent = ({
  title,
  subtitle,
  data,
  varient,
}: InformationProps) => {
  return (
    <View
      className={cn(
        `flex-row justify-between py-4`,
        varient == 'none' && 'py-6',
      )}>
      <Text className="font-[200] text-xs">{title}</Text>
      <View className="items-end gap-1">
        {varient == 'up' && (
          <Text className="font-[200] text-xs">{subtitle}</Text>
        )}
        <Text className={cn(`text-sm`, varient == 'none' && 'text-xs')}>
          {data}
        </Text>
        {varient == 'down' && (
          <Text className="font-[200] text-xs">{subtitle}</Text>
        )}
      </View>
    </View>
  );
};

const PaymentReceiptScreen: React.FC<PaymentReceiptProps> = ({route}) => {
  const {data} = route.params;
  const navigation = useNavigation<PaymentReceiptNavigationProps>();

  const dataUnpackedList: InformationProps[] = [
    {
      title: 'Currency',
      subtitle: 'Currency used',
      data: data.currency,
      varient: 'up',
    },
    {
      title: 'Sender Details',
      subtitle: 'MegaTransact',
      data: 'Jospin Uwaci',
      varient: 'down',
    },
    {
      title: 'Receiver Details',
      subtitle: 'Christy Baby',
      data: data.recipient_account,
      varient: 'down',
    },
    {
      title: 'Bank',
      subtitle: 'Recipient bank',
      data: data.recipient_bank,
      varient: 'up',
    },
    {
      title: 'Description',
      subtitle: undefined,
      data: data.description,
      varient: 'none',
    },
    {
      title: 'Reference',
      subtitle: undefined,
      data: '098203495867285763889',
      varient: 'none',
    },
  ];

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
      <View className="bg-white rounded-xl h-[75%]">
        <ImageBackground
          source={require('../../assets/images/receipt_header.png')}
          resizeMode="cover"
          className="h-[150px] w-full">
          <View className="flex-row items-center justify-between py-6 px-4">
            <MegaTransactTitle
              iconSize={4.5}
              textSize={3}
              componentClassName="flex-row items-center gap-2"
              textComponentClassName="flex-col items-start"
            />
            <Text className="text-xs">Transaction Details</Text>
          </View>
          <BalanceComponent
            desc="Amount sent"
            balance={Number(data.amount)}
            textColor="text-black"
            componentClassName="flex-col items-center gap-0"
            titleClassName="text-xs font-[200]"
            varient="straight"
          />
        </ImageBackground>
        <View className="px-5 h-[70%] divide-y divide-[#D9D9D9]">
          {dataUnpackedList.map(item => (
            <View>
              <InformationComponent
                title={item.title}
                subtitle={item.subtitle}
                data={item.data}
                varient={item.varient}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PaymentReceiptScreen;
