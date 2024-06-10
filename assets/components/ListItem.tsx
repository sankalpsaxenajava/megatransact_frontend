import {Image, Pressable, View, Text, StyleSheet} from 'react-native';
import icons from '../icons';
interface ListItemProp {
  icon: string;
  mainText: string;
  description: string;
  onPress: () => void;
}

const ListItem = ({icon, mainText, description, onPress}: ListItemProp) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={icons[icon]} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/icons/chevron-right.png')}
        />
      </View>
    </Pressable>
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
