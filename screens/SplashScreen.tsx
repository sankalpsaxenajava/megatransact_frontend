import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomScrollView from '../components/CustomScrollView';
import MegaTransactTitle from '../components/MegaTransactTitle';

const SplashScreen = () => {
  return (
    <CustomScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <MegaTransactTitle size={7} />
        </View>
        <View style={styles.buttonList}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  header: {
    margin: '20%',
  },
  buttonList: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFC107',
    width: '48%',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#5900D5',
    fontSize: 15,
  },
});

export default SplashScreen;
