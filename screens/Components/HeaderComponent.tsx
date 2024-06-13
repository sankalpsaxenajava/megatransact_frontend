import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Define the HeaderComponent with a centered title
interface HeaderComponentProps {
  title: string; // Ensure this is a string
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({title}) => {
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
    borderBottomColor: '#ccc',
    position: 'relative', // To allow absolute positioning of the back button
  },
  backButton: {
    position: 'absolute', // Position absolutely for fixed placement
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#333', // Optional tint for consistent color
    borderRadius: 59.26, // Round corners (higher value creates a circular image)
    borderWidth: 1.14, // Border thickness
    borderColor: '#F6F6F6', // Border color (adjust as needed)
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HeaderComponent;
