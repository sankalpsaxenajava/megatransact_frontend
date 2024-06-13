import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, FlatList} from 'react-native';

// Sample data
const data = [
  {lebel: 'Amount', title: 'Item 1'},
  {lebel: 'Meter Number', title: 'Item 1'},
  {lebel: 'Biller', title: 'Item 1'},
];

const ReviewTransaction = () => {
  // State to track the selected item
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemPress = item => {
    // When an item is pressed, update the selected item ID
    setSelectedItemId(item.id);
  };

  const renderItem = ({item}) => {
    // Conditional background color based on the selected item
    const backgroundColor = item.id === selectedItemId ? '#E9F5FE' : 'white';

    return (
      <View>
        <TouchableOpacity
          style={{height: 40}}
          onPress={() => handleItemPress(item)}>
          <View
            style={{
              height: 66,
              flexDirection: 'row',
              backgroundColor: backgroundColor,
              justifyContent: 'center',
              alignItems: 'center', // Vertically centered content
            }}>
            <Text style={styles.title}>{item?.label}</Text>
          </View>
        </TouchableOpacity>
        {/* Separator is outside of TouchableOpacity */}
        <View style={styles.separator} />
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'black',
  },
  separator: {
    height: 1, // Horizontal separator
    backgroundColor: 'grey', // Separator line color
    marginVertical: 4, // Spacing between items
  },
});

export default ReviewTransaction;
