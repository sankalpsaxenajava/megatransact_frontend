import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icons from '../assets/icons';

// Define the HeaderComponent with a centered title
interface HeaderProps {
  title: string; // Ensure this is a string
  haveBorder?: boolean;
  navHandler?: () => void;
  variant?: 'white' | 'transparent';
}

const Header: React.FC<HeaderProps> = ({
  title,
  haveBorder = true,
  navHandler,
  variant = 'white',
}) => {
  const navigation = useNavigation();
  const headerStyle = variant === 'white' && styles.whiteHeader;
  const iconStyle = variant === 'transparent' && styles.backIconBg;
  // Safely render the title within <Text>
  return (
    <View
      style={[
        styles.header,
        headerStyle,
        {borderBottomWidth: haveBorder ? 1 : 0},
      ]}>
      <TouchableOpacity
        onPress={() => {
          navHandler ? navHandler() : navigation.goBack();
        }}
        style={[styles.backButton, iconStyle]}>
        <Image
          source={icons.arrowLeftIcon} // Ensure this path is correct
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
  whiteHeader: {
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute', // Position absolutely for fixed placement
    left: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: 30,
    height: 30,
  },
  backIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    tintColor: '#333', // Optional tint for consistent color
  },
  backIconBg: {
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: 'tarnsparent',
    padding: 5,
  },
  headerText: {
    fontSize: 20,
    color: 'rgba(18, 18, 18, 1)',
    fontWeight: 'semibold',
  },
});

export default Header;
