import {useState} from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

const BalanceComponent = ({desc, balance}: {desc: string; balance: number}) => {
  const balance_int = Math.floor(balance);
  const balance_frac = Math.floor((balance - balance_int) * 100);

  return (
    <View className="px-2 gap-1">
      <Text className="text-white text-lg">{desc}</Text>
      <View className="flex-row items-end">
        <Text className="font-manrope text-3xl text-white">
          ${balance_int}.
        </Text>
        <Text className="font-manrope text-white pb-1">{balance_frac}</Text>
      </View>
    </View>
  );
};

const HeaderComponent = ({colorIndex}: {colorIndex: number}) => {
  const color_scheme = [
    ['#5D38BF', '#6151CD', '#699BF7'],
    ['#5872FB', '#4F7AF9', '#2D93E5'],
  ];

  return (
    <View className="h-[24%] w-full">
      <LinearGradient
        colors={color_scheme[colorIndex]}
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
          <BalanceComponent desc="Hello Jospin" balance={6200.89} />
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
}: {
  setColorIndex: (val: number) => void;
}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  // mock data for now
  const cards = [
    {
      bg_url: require('../../assets/images/purple_card.png'),
      balance: 620.89,
      four_digits: 7986,
      id: 28390038723,
      date: '20-12-26',
      bank: 'Heartland',
      color: 0,
    },
    {
      bg_url: require('../../assets/images/blue_card.png'),
      balance: 1620.89,
      four_digits: 8120,
      id: 28390038723,
      date: '20-12-26',
      bank: 'Westpac',
      color: 1,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Carousel
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 70,
        }}
        loop={false}
        width={width}
        height={height * 0.6}
        data={cards}
        onSnapToItem={index => setColorIndex(cards[index].color)}
        renderItem={({item}) => (
          <ImageBackground
            source={item.bg_url}
            resizeMode="contain"
            className="h-full w-full">
            <View className="p-10 justify-between flex-col h-full">
              <BalanceComponent desc="Total Balance" balance={item.balance} />
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
        )}
      />
    </View>
  );
};

const PayWithCardScreen = () => {
  const [colorIndex, setColorIndex] = useState(0);
  return (
    <View className="w-full h-full">
      <HeaderComponent colorIndex={colorIndex} />
      <CardScrollViewComponent setColorIndex={setColorIndex} />
    </View>
  );
};

export default PayWithCardScreen;
