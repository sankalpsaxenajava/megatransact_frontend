import {Image, StyleSheet, Text, View} from 'react-native';

const MegaTransactTitle = ({size}: {size: number}) => {
  const styles = StyleSheet.create({
    logo: {
      width: 8 * size,
      height: 8 * size,
      resizeMode: 'contain',
      marginBottom: 8,
      alignSelf: 'center',
    },
    title: {
      fontSize: 5 * size,
      fontWeight: 'semibold',
      color: '#6200EA',
      alignSelf: 'center',
      fontFamily: 'Manrope-Bold',
      paddingBottom: 3,
    },
    subtitle: {
      fontSize: 2 * size,
      color: '#290062',
      alignSelf: 'center',
      fontFamily: 'Manrope-Regular',
    },
  });
  return (
    <View>
      <Image
        source={require('../assets/logos/MegaTransactLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>MegaTransact</Text>
      <Text style={styles.subtitle}>PROSPERING TOGETHER</Text>
    </View>
  );
};

export default MegaTransactTitle;
