import {Image, Pressable, View, Text, StyleSheet} from 'react-native';

const ListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/icons/user.png')}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Buy Airtime</Text>
        <Text>Top up your airtime easily</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/icons/chevron-right.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    gap: 16,
  },
  textContainer: {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  mainText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: 64,
    height: 64,
  },
  icon: {
    resizeMode: 'contain',
  },
});

export default ListItem;
