import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import CustomScrollView from '../components/CustomScrollView';

const VerifyEmailScreen: React.FC = () => {
  return (
    <CustomScrollView>
      <Image
        source={require('../assets/images/image9.png')}
        style={styles.emailIcon}
      />
      <Text style={styles.title}>Verify your email</Text>
      <Text style={styles.description}>
        We’ve sent an email to jospin@megatransact.com{'\n'}
        click on the link to verify your email.
      </Text>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  emailIcon: {
    width: 185,
    height: 185,
  },
  title: {
    justifyContent: 'center',
    fontFamily: 'Manrope-Regular',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 30,
    color: '#000000',
  },
  description: {
    fontFamily: 'Manrope',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 23,
    textAlign: 'center',
    color: '#707070',
    marginTop: 15,
  },
});

export default VerifyEmailScreen;
