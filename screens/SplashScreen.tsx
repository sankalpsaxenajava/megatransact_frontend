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

type SplashNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashNavigationProps>();
  function onRegisterHandler() {
    navigation.navigate('AccountType');
  }
  function onLoginHandler() {
    navigation.navigate('Login');
  }

  return (
    <ImageBackground
      source={require('../assets/images/splash_bg.png')}
      resizeMode="cover"
      style={styles.imageBackground}>
      <CustomScrollView backgroundColor="transparent">
        <View style={styles.container}>
          <View style={styles.header}>
            <MegaTransactTitle size={7} />
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
