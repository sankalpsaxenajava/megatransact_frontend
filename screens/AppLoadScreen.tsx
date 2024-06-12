import {Image, Text, View} from 'react-native';
import CustomScrollView from '../components/CustomScrollView';
import {colors} from '../types/colors';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigationTypes';

type AppLoadNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'AppLoad'
>;

const AppLoadScreen = () => {
  const navigation = useNavigation<AppLoadNavigationProps>();
  useEffect(() => {
    // simulate loading for now
    setTimeout(() => {
      navigation.navigate('Splash');
    }, 2000);
  }, []);

  return (
    <CustomScrollView backgroundColor={colors.primary[600]}>
      <View style={{alignItems: 'center', gap: 20}}>
        <Image
          source={require('../assets/logos/MegaTransact_lg.png')}
          style={{width: 130, height: 130}}
        />
        <Text style={{color: '#fff', fontFamily: 'Manrope-Bold', fontSize: 35}}>
          MegaTransact
        </Text>
      </View>
    </CustomScrollView>
  );
};

export default AppLoadScreen;
