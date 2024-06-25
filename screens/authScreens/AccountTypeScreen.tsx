import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomScrollView from '../../components/CustomScrollView';
import {colors} from '../../types/colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';
import icons from '../../assets/icons';

type PersonalNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'AccountType'
>;

const OptionListComponent = () => {
  const navigation = useNavigation<PersonalNavigationProps>();
  function onPressPersonal() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.optionList}>
      <TouchableOpacity style={styles.option} onPress={onPressPersonal}>
        <View style={styles.iconBackground}>
          <Image source={icons.avatarIcon} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={[styles.text, styles.subtitle]}>Personal account</Text>
          <Text style={styles.text}>
            Spend, sent, and receive money around the globe easily.
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <View style={styles.iconBackground}>
          <Image source={icons.bagIcon} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={[styles.text, styles.subtitle]}>Business account</Text>
          <Text style={styles.text}>
            Do business or pay salary internationally
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, styles.optionListFootnote]}>
        You can add another account later on, too
      </Text>
    </View>
  );
};

const AccountTypeScreen = () => {
  return (
    <CustomScrollView backgroundColor={colors.primary[600]}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={[styles.text, styles.title]}>
            What kind of account would you like to open today?
          </Text>
          <OptionListComponent />
        </View>
        <View style={styles.policyFootnote}>
          <Text style={styles.text}>
            You cannot use a personal account for business purposes. Please use
            MegaTransact in line with our
          </Text>
          <TouchableOpacity>
            <Text style={styles.policyTextButton}>Acceptable Use Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  mainContainer: {
    gap: 50,
  },
  text: {
    color: '#fff',
  },
  title: {
    fontSize: 33,
    paddingTop: 100,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  textWrapper: {
    width: '75%',
    justifyContent: 'space-between',
  },
  iconBackground: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 30,
  },
  option: {
    backgroundColor: colors.primary[500],
    flexDirection: 'row',
    padding: 30,
    gap: 20,
    borderRadius: 20,
  },
  optionList: {
    flexDirection: 'column',
    gap: 15,
  },
  optionListFootnote: {
    marginTop: 10,
  },
  policyFootnote: {
    marginVertical: 25,
  },
  policyTextButton: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});

export default AccountTypeScreen;
