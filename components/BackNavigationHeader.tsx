import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import MegaTransactTitle from './MegaTransactTitle';

interface BackNavigationProps {
  enableMegaTransactTitle?: boolean;
  label?: string;
  buttonClassName?: string;
  headerClassName?: string;
  onBackHandler: () => void;
}

const BackNavigationHeader = ({
  enableMegaTransactTitle = false,
  label,
  buttonClassName,
  headerClassName,
  onBackHandler,
}: BackNavigationProps) => {
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 50,
      marginBottom: enableMegaTransactTitle ? 0 : 50,
    },
    backButton: {
      width: 40,
      height: 40,
      position: 'absolute', // caution on padding
      left: 0,
      justifyContent: 'center',
      borderRadius: 100,
    },
  });
  return (
    <View style={styles.header} className={headerClassName}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBackHandler}
        className={buttonClassName}>
        <Image
          source={require('../assets/icons/back_icon.png')}
          className="w-6 h-6"
        />
      </TouchableOpacity>
      {enableMegaTransactTitle && (
        <MegaTransactTitle iconSize={5.5} textSize={5.5} />
      )}
      {label && <Text>{label}</Text>}
    </View>
  );
};

export default BackNavigationHeader;
