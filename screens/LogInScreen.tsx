import CustomScrollView from '../components/CustomScrollView';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MegaTransactTitle from '../components/MegaTransactTitle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../types/colors';
import {Controller, useForm} from 'react-hook-form';
import {InputField} from '../components/InputField';
import {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

type LoginNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'LogIn'
>;
type LoginFrom = {
  // todo: transfer to models when schema models out
  username: string;
  password: string;
  keepLogin: boolean;
};

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

const InputComponent = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const {control, handleSubmit} = useForm<LoginFrom>();
  const onSubmit = handleSubmit(({username, password}) => {});

  return (
    <View>
      <View style={styles.inputComponent}>
        <Controller
          control={control}
          name="username"
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <InputField
              iconName={require('../assets/icons/email.png')}
              placeholder="Username"
              secureTextEntry={false}
              value={value}
              onChangeText={onChange}
              error={error && error.message ? error.message : ''}
            />
          )}
          rules={{required: 'Please enter your username'}}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <InputField
              iconName={require('../assets/icons/eye_off.png')}
              placeholder="Password"
              secureTextEntry={true}
              value={value}
              onChangeText={onChange}
              error={error && error.message ? error.message : ''}
            />
          )}
          rules={{required: 'Please enter your password'}}
        />
      </View>
      <View style={styles.options}>
        <Controller
          control={control}
          name="keepLogin"
          render={({field: {onChange, value}}) => (
            <View style={styles.checkboxComponent}>
              <CheckBox
                value={value}
                onValueChange={onChange}
                boxType="square"
                style={styles.checkbox}
              />
              <Text>Keep me logged in</Text>
            </View>
          )}
        />
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Forgot password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitText}>Continue</Text>
      </TouchableOpacity>
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
        <InputComponent />
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
  inputComponent: {
    gap: 15,
  },
  submitButton: {
    backgroundColor: colors.primary[500],
    alignItems: 'center',
    padding: 15,
    borderRadius: 13,
    marginTop: 25,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  checkboxComponent: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  forgetPassword: {
    color: colors.primary[500],
  },
});

export default LogIn;
