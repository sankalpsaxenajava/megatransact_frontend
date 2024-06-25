import {StyleSheet, Text, View} from 'react-native';
import BackNavigationHeader from '../components/BackNavigationHeader';
import CustomScrollView from '../components/CustomScrollView';
import {colors} from '../types/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Header from '../components/Header';

const SetupPinScreen = () => {
  function onBackHandler() {
    // todo: implement when nav is known
  }
  return (
    <CustomScrollView>
      <View style={styles.container}>
        <Header navHandler={onBackHandler} title="" haveBorder={false} />
        <View style={{gap: 15, marginBottom: 30}}>
          <Text style={{fontSize: 20, fontWeight: 500}}>Set up your PIN</Text>
          <Text
            style={{fontWeight: 400, color: colors.lightText, fontSize: 16}}>
            Secure your account with a custom 4-digit PIN and biometric
            authentication
          </Text>
        </View>
        <OTPInputView
          pinCount={4}
          style={{height: 50, marginVertical: 20}}
          codeInputFieldStyle={{
            width: 75,
            height: 70,
            borderRadius: 10,
            color: colors.lightText,
          }}
        />
      </View>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
  },
});

export default SetupPinScreen;
