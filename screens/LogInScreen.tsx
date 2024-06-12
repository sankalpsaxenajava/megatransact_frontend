import CustomScrollView from '../components/CustomScrollView';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MegaTransactTitle from '../components/MegaTransactTitle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../types/colors';

type LoginNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'LogIn'
>;

const HeaderComponent = () => {
  const navigation = useNavigation<LoginNavigationProps>();
  function onBackHandler() {
    navigation.navigate('Splash');
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onBackHandler}>
        <Image source={require('../assets/icons/back_button.png')} />
      </TouchableOpacity>
      <MegaTransactTitle size={5.5} />
    </View>
  );
};

const LogIn = () => {
  return (
    <CustomScrollView>
      <View style={styles.container}>
        <HeaderComponent />
        <View style={styles.subHeader}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Login to your account to continue</Text>
        </View>
      </View>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  backButton: {
    width: 30,
    height: 30,
    position: 'absolute', // caution on padding
    left: 0,
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 15,
    color: colors.lightText,
  },

  subHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 7,
    paddingVertical: 50,
  },
});

export default LogIn;
