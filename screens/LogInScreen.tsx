import CustomScrollView from '../components/CustomScrollView';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MegaTransactTitle from '../components/MegaTransactTitle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../types/colors';
import {Controller, useForm} from 'react-hook-form';
import {InputField} from '../components/InputField';
import {useCallback, useRef, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

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
  const {control, handleSubmit} = useForm<LoginFrom>();
  const onSubmit = handleSubmit(({username, password}) => {});

  return (
    <View>
      <View style={{gap: 15}}>
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
              placeholder="Password"
              secureTextEntry={true}
              value={value}
              onChangeText={onChange}
              error={error && error.message ? error.message : ''}
              varient="password"
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
                style={{width: 20, height: 20}}
              />
              <Text>Keep me logged in</Text>
            </View>
          )}
        />
        <TouchableOpacity>
          <Text style={{color: colors.primary[500]}}>Forgot password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const LogIn = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        opacity={0.3}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );
  return (
    <CustomScrollView>
      <View style={styles.container}>
        <HeaderComponent />
        <View style={styles.subHeader}>
          <Text style={{fontSize: 25}}>Welcome back</Text>
          <Text style={{fontSize: 15, color: colors.lightText}}>
            Login to your account to continue
          </Text>
        </View>
        <InputComponent />
        <View style={styles.biometricComponent}>
          <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
            <Image source={require('../assets/icons/fingerprint.png')} />
          </TouchableOpacity>
          <Text>Touch to login with biometric</Text>
        </View>
      </View>
      <BottomSheet
        snapPoints={['50%']}
        ref={bottomSheetRef}
        index={-1}
        backdropComponent={renderBackdrop}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.sheetHeader}>
            <Text style={{fontSize: 25}}>Login</Text>
            <TouchableOpacity
              onPress={() => bottomSheetRef.current?.close()}
              style={styles.sheetCloseButton}>
              <Image source={require('../assets/icons/cross.png')} />
            </TouchableOpacity>
          </View>
          <View style={{gap: 20, alignItems: 'center'}}>
            <TouchableOpacity style={styles.sheetFingerprint}>
              <Image
                source={require('../assets/icons/fingerprint.png')}
                style={{width: 150, height: 150}}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 17, fontWeight: 200}}>
              Touch the fingerprint sensor
            </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 17, color: colors.primary[600]}}>
                Use Face ID instead
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
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
  subHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 7,
    paddingVertical: 50,
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
  biometricComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 40,
    width: '100%',
  },
  sheetCloseButton: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sheetFingerprint: {
    width: 190,
    height: 190,
    backgroundColor: '#FFFAEC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default LogIn;
