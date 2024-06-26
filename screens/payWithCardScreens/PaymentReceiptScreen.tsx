import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';
import {Image, ImageBackground, Text, View} from 'react-native';
import MegaTransactTitle from '../../components/MegaTransactTitle';
import {BalanceComponent} from '../../components/BalanceComponent';
import {cn} from '../../utils/cn';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PayWithCardForm} from './PayWithCardScreen';
import Header from '../../components/Header';
import allImages from '../../assets';

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
        `flex-row justify-between py-3`,
        varient == 'none' && 'py-5',
      )}>
      <Text className="font-[200] text-xs">{title}</Text>
      <View className="items-end gap-1">
        {varient == 'up' && (
          <Text className="font-[200] text-xs">{subtitle}</Text>
        )}
        <Text
          className={cn(`text-sm font-[300]`, varient == 'none' && 'text-xs')}>
          {data}
        </Text>
        {varient == 'down' && (
          <Text className="font-[200] text-xs">{subtitle}</Text>
        )}
      </View>
    </View>
  );
};

const HeaderComponent = ({balance}: {balance: number}) => {
  return (
    <ImageBackground
      source={allImages.receiptHeader}
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
        balance={balance}
        textColor="text-black"
        componentClassName="flex-col items-center gap-0"
        titleClassName="text-xs font-[200]"
        varient="straight"
      />
    </ImageBackground>
  );
};

const UnpackDataComponent = ({data}: {data: PayWithCardForm}) => {
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
    <View className="px-5 divide-y divide-[#D9D9D9]">
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
  );
};

const FooterComponent = () => {
  return (
    <View className="gap-y-[1px] items-center flex-col py-4">
      <Text className="text-[10px]">
        For enquiries and complaints, please reach out our support centre
      </Text>
      <View className="flex-row gap-1 justify-center">
        <Text className="text-[10px]">on</Text>
        <TouchableOpacity>
          <Text className="text-[10px] text-[#5900D5] font-[500]">
            0498470033
          </Text>
        </TouchableOpacity>
        <Text className="text-[10px]">or send email to</Text>
        <TouchableOpacity>
          <Text className="text-[10px] text-[#5900D5] font-[500]">
            support@megatransact.com
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SaveOptionsComponent = () => {
  return (
    <View className="flex-row justify-center mb-8 space-x-4 w-full">
      <View className="w-[48%]">
        <TouchableOpacity className="flex-row items-center justify-center space-x-2 bg-white rounded-lg py-4">
          <Image source={allImages.downloadIcon} />
          <Text>Download</Text>
        </TouchableOpacity>
      </View>
      <View className="w-[48%]">
        <TouchableOpacity className="flex-row items-center justify-center space-x-2 bg-[#6200EA] rounded-lg py-4">
          <Image source={allImages.shareIcon} />
          <Text className="text-white">Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PaymentReceiptScreen: React.FC<PaymentReceiptProps> = ({route}) => {
  const {data} = route.params;
  const navigation = useNavigation<PaymentReceiptNavigationProps>();

  return (
    <View className="mx-4 flex-col justify-between h-full">
      <View>
        <Header
          title="Receipt"
          haveBorder={false}
          variant="transparent"
          navHandler={() =>
            navigation.navigate('PaymentConfirmation', {data: data})
          }
        />
        <View className="bg-white rounded-xl">
          <HeaderComponent balance={Number(data.amount)} />
          <UnpackDataComponent data={data} />
          <FooterComponent />
        </View>
      </View>
      <SaveOptionsComponent />
    </View>
  );
};

export default PaymentReceiptScreen;
