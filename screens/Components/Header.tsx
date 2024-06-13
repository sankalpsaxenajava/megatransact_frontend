import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Define the HeaderComponent with a centered title
interface HeaderProps {
  title: string; // Ensure this is a string
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();

  // Safely render the title within <Text>
  return (
    <View style={[styles.header, {borderBottomWidth: title ? 1 : 0}]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Image
          source={require('../../assets/icons/back_icon.png')} // Ensure this path is correct
          style={styles.backIcon}
        />
      </TouchableOpacity>
      {/* Ensure the title is not undefined */}
      {title != null && title != undefined && title != '' ? (
        <Text style={styles.headerText}>{title}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // This centers the title
    padding: 20,
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    position: 'relative', // To allow absolute positioning of the back button
  },
  backButton: {
    position: 'absolute', // Position absolutely for fixed placement
    left: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: 20,
    height: 20,
  },
  backIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    tintColor: '#333', // Optional tint for consistent color
  },
  headerText: {
    fontSize: 20,
    color: 'rgba(18, 18, 18, 1)',
    fontWeight: 'semibold',
  },
});

export default Header;
