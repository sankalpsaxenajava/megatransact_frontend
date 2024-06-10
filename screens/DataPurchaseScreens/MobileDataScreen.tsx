import {StyleSheet, Text, View} from 'react-native';

const MobileDataScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Buy Mobile Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    height: '100%',
  },
});
export default MobileDataScreen;
