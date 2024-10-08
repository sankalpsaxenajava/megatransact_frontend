import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomScrollView from '../components/CustomScrollView';
import MegaTransactTitle from '../components/MegaTransactTitle';
import {colors} from '../types/colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigationTypes';
import images from '../assets/images';

type SplashNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashNavigationProps>();
  function onRegisterHandler() {
    navigation.navigate('AuthStack', {screen: 'AccountType'});
  }
  function onLoginHandler() {
    navigation.navigate('AuthStack', {screen: 'Login'});
  }

  return (
    <ImageBackground
      source={images.splashBg}
      resizeMode="cover"
      style={styles.imageBackground}>
      <CustomScrollView backgroundColor="transparent">
        <View style={styles.container}>
          <View style={styles.header}>
            <MegaTransactTitle iconSize={7} textSize={6} />
          </View>
          <View style={styles.buttonList}>
            <TouchableOpacity style={styles.button} onPress={onLoginHandler}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onRegisterHandler}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  header: {
    margin: '20%',
  },
  buttonList: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.secondary,
    width: '48%',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primary[600],
    fontSize: 15,
  },
  imageBackground: {
    flex: 1,
  },
});

export default SplashScreen;
