import {Image, StyleSheet, Text, View} from 'react-native';
import images from '../assets/images';

const MegaTransactTitle = ({
  iconSize,
  textSize,
  componentClassName,
  textComponentClassName,
}: {
  iconSize: number;
  textSize: number;
  componentClassName?: string;
  textComponentClassName?: string;
}) => {
  const styles = StyleSheet.create({
    logo: {
      width: 8 * iconSize,
      height: 8 * iconSize,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 5 * textSize,
      fontWeight: 'semibold',
      color: '#6200EA',
      fontFamily: 'Manrope-Bold',
      paddingBottom: 3,
    },
    subtitle: {
      fontSize: 2 * textSize,
      color: '#290062',
      fontFamily: 'Manrope-Regular',
    },
  });
  return (
    <View className={`flex items-center gap-2 ${componentClassName}`}>
      <Image source={images.megatransactLogo} style={styles.logo} />
      <View className={`flex items-center ${textComponentClassName}`}>
        <Text style={styles.title}>MegaTransact</Text>
        <Text style={styles.subtitle}>PROSPERING TOGETHER</Text>
      </View>
    </View>
  );
};

export default MegaTransactTitle;
