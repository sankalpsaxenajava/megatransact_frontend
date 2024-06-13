import React, {useState, FC} from 'react';
import {
  View,
  FlatList,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// Define the types for the items in the list
interface ListItem {
  id: number; // Assuming ID is a number; adjust if needed
  label: string; // The text to display for each item
}

// Define the props for the ItemsListModal component
interface ItemsListModalProps {
  onDismiss: () => void; // Function to handle modal dismissal
  type: string; // The type of item to select
  itemsList: ListItem[]; // The list of items to display
  onTryAgainClick: (item: ListItem) => void; // Function to handle item selection
}

const ItemsListModal: FC<ItemsListModalProps> = ({
  onDismiss,
  type,
  itemsList,
  onTryAgainClick,
}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

  const handleItemPress = (item: ListItem) => {
    setSelectedItemId(item.id);
    //  onTryAgainClick(item);
  };

  const filteredItems = itemsList.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const renderItem = ({item}: {item: ListItem}) => {
    const backgroundColor = item.id === selectedItemId ? '#E9F5FE' : 'white';

    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View
          style={{
            height: 66,
            flexDirection: 'row',
            backgroundColor,
            alignItems: 'center',
          }}>
          <Text style={styles.title}>{item.label}</Text>
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={true} transparent animationType="slide">
      <TouchableOpacity
        activeOpacity={1}
        onPress={onDismiss}
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dim the background
        }}>
        <View style={styles.modal}>
          <View style={styles.modalInner}>
            <Text style={{fontSize: 20, color: '#121212'}}>Select {type}</Text>

            <View style={styles.topView}>
              {/* Search input */}
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
              <View style={{height: 16}} />
            </View>

            <FlatList
              style={{marginTop: 5}}
              data={filteredItems}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={true}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>No data found</Text>
                </View>
              }
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalInner: {
    backgroundColor: 'white',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 20,
    width: '100%',
    maxHeight: 400,
  },
  topView: {
    height: 50,
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 10,
  },
  separator: {
    height: 1, // Changed from 0 to 1 for visible separation
    backgroundColor: 'grey',
    marginVertical: 4,
  },
  searchInput: {
    paddingHorizontal: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 66,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  emptyText: {
    color: 'grey',
    fontSize: 16,
  },
});

export default React.memo(ItemsListModal);
