import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import MegaTransactTitle from './MegaTransactTitle';

interface BackNavigationProps {
  enableMegaTransactTitle?: boolean;
  onBackHandler: () => void;
}

const BackNavigationHeader = ({
  enableMegaTransactTitle = false,
  onBackHandler,
}: BackNavigationProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onBackHandler}>
        <Image source={require('../assets/icons/back_button.png')} />
      </TouchableOpacity>
      {enableMegaTransactTitle && <MegaTransactTitle size={5.5} />}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BackNavigationHeader;
