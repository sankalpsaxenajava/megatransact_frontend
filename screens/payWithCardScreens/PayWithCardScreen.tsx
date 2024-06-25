import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {useRef, useState} from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'react-native-linear-gradient';
import {interpolateColor} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import DropDownInput from '../../components/DropDownInput';
import {bankList, cards, currencyList} from '../../types/mockData';
import {Controller, useForm} from 'react-hook-form';
import {InputField} from '../../components/InputField';
import {RootStackParamList} from '../../types/navigationTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {BalanceComponent} from '../../components/BalanceComponent';

// temporary model - update with schema models
export type PayWithCardForm = {
  currency: string;
  amount: string;
  recipient_account: string;
  recipient_bank: string;
  description: string;
};

type PayWithCardsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'PayWithCard'
>;

const HeaderComponent = ({colorIndex}: {colorIndex: number}) => {
  const color_scheme = [
    ['#5D38BF', '#6151CD', '#699BF7'],
    ['#5872FB', '#4F7AF9', '#2D93E5'],
  ];

  function getColors(pos: number) {
    const fromColors = color_scheme[Math.floor(pos)];
    const toColors = color_scheme[Math.ceil(pos)];
    const progress = pos - Math.floor(pos);

    const left_color = interpolateColor(
      progress,
      [0, 1],
      [fromColors[0], toColors[0]],
    );
    const central_color = interpolateColor(
      progress,
      [0, 1],
      [fromColors[1], toColors[1]],
    );
    const right_color = interpolateColor(
      progress,
      [0, 1],
      [fromColors[2], toColors[2]],
    );

    return [left_color, central_color, right_color];
  }
  return (
    <View className="h-[24%] w-full">
      <LinearGradient
        colors={getColors(colorIndex)}
        useAngle={true}
        angle={15}
        locations={[0.25, 0.5, 1]}
        className="h-full w-full rounded-b-2xl px-4">
        <View className="pt-14 flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/white_back_icon.png')}
              />
            </TouchableOpacity>
            <Text className="text-white">My cards</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-white text-xs">Cancel</Text>
          </TouchableOpacity>
        </View>
        <View className="justify-between flex-row py-6">
          <BalanceComponent
            desc="Hello Jospin"
            balance={6200.89}
            varient="uneven"
          />
          <View className="flex-col items-center gap-1">
            <TouchableOpacity className="bg-white rounded-full w-12 h-12 justify-center items-center">
              <Image source={require('../../assets/icons/purple_card.png')} />
            </TouchableOpacity>
            <Text className="text-white">Add card</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const CardScrollViewComponent = ({
  setColorIndex,
  sheetRef,
}: {
  setColorIndex: (val: number) => void;
  sheetRef: React.RefObject<BottomSheetMethods>;
}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View style={{flex: 1}}>
      <Carousel
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 70,
        }}
        onProgressChange={offSet => setColorIndex(Math.abs(offSet / width))}
        loop={false}
        width={width}
        height={height * 0.6}
        data={cards}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              sheetRef.current?.expand();
            }}>
            <ImageBackground
              source={item.bg_url}
              resizeMode="contain"
              className="h-full w-full">
              <View className="p-10 justify-between flex-col h-full">
                <BalanceComponent
                  desc="Total Balance"
                  balance={item.balance}
                  varient="uneven"
                />
                <Text className="text-white text-[26px] w-full text-center">
                  **** ***** ***** ***** {item.four_digits}
                </Text>
                <View className="flex-row justify-between items-end">
                  <View>
                    <Text className="text-white">{item.id}</Text>
                    <Text className="text-white">{item.date}</Text>
                  </View>
                  <Text className="text-white">{item.bank}</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const PaymentFormComponent = ({
  bottomSheetRef,
  colorIndex,
}: {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  colorIndex: number;
}) => {
  const navigation = useNavigation<PayWithCardsNavigationProps>();
  const {control, handleSubmit} = useForm<PayWithCardForm>();
  const onSubmit = handleSubmit((data: PayWithCardForm) => {
    navigation.navigate('ReviewPayment', {data: data});
  });

  // based on chosen card
  const button_colors = ['#6200EA', '#5177F7'];
  return (
    <BottomSheet snapPoints={['15%', '75%']} ref={bottomSheetRef} index={0}>
      <View className="mx-4">
        <Controller
          control={control}
          name="currency"
          defaultValue="United States dollar"
          render={({field: {onChange, value}}) => (
            <DropDownInput
              label="Currency to send"
              placeholder="Currency"
              options={currencyList}
              value={value}
              type="Currency"
              onChangeValue={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="amount"
          render={({field: {onChange, value}}) => (
            <View>
              <Text className="my-3">Amount to send</Text>
              <InputField
                placeholder="0.00"
                secureTextEntry={false}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
                varient="money"
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="recipient_account"
          render={({field: {onChange, value}}) => (
            <View>
              <Text className="my-3">Recipient account</Text>
              <InputField
                placeholder="Account number"
                secureTextEntry={false}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="recipient_bank"
          render={({field: {onChange, value}}) => (
            <DropDownInput
              label="Recipient bank"
              placeholder="Bank name"
              options={bankList}
              value={value}
              type="Bank"
              onChangeValue={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({field: {onChange, value}}) => (
            <View>
              <Text className="my-3">Description</Text>
              <InputField
                placeholder="Enter description"
                secureTextEntry={false}
                value={value}
                onChangeText={onChange}
              />
            </View>
          )}
        />
        <TouchableOpacity
          className="p-5 rounded-lg mt-3"
          style={{backgroundColor: button_colors[Math.floor(colorIndex)]}}
          onPress={onSubmit}>
          <Text className="text-center text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

const PayWithCardScreen = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View className="w-full h-full">
      <HeaderComponent colorIndex={colorIndex} />
      <CardScrollViewComponent
        setColorIndex={setColorIndex}
        sheetRef={bottomSheetRef}
      />
      <PaymentFormComponent
        bottomSheetRef={bottomSheetRef}
        colorIndex={colorIndex}
      />
    </View>
  );
};

export default PayWithCardScreen;
