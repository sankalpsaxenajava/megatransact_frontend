import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'react-native-linear-gradient';

const PayWithCardScreen = () => {
  return (
    <View className="w-full h-full">
      <View className="h-[24%] w-full">
        <LinearGradient
          colors={['#5D38BF', '6151CD', '#699BF7']}
          useAngle={true}
          angle={15}
          locations={[0.25, 0.95, 1]}
          className="h-full w-full rounded-b-2xl px-4 ">
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
            <View className="px-2 gap-1">
              <Text className="text-white text-lg">Hello Jospin</Text>
              <View className="flex-row items-end">
                <Text className="font-manrope text-3xl text-white">$6200.</Text>
                <Text className="font-manrope text-white pb-1">89</Text>
              </View>
            </View>
            <View className="flex-col items-center gap-1">
              <TouchableOpacity className="bg-white rounded-full w-12 h-12 justify-center items-center">
                <Image source={require('../../assets/icons/purple_card.png')} />
              </TouchableOpacity>
              <Text className="text-white">Add card</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default PayWithCardScreen;
