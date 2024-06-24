import {Image, Pressable, View, Text, StyleSheet} from 'react-native';
import icons from '../../assets/icons';
interface ListItemProp {
  icon: string;
  mainText: string;
  description: string;
  onPress: () => void;
}

const ListItem = ({icon, mainText, description, onPress}: ListItemProp) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={icons[icon]} />
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
    marginVertical: 10,
    marginHorizontal: 25,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Add Android elevation
    elevation: 5,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    width: 54,
    height: 54,
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 5,
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
    width: 20,
    height: 20,
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export default ListItem;
