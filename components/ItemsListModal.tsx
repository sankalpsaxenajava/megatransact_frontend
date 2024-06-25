import React, {useState, FC} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import icons from './../assets/icons';
import Modal from 'react-native-modal/dist/modal';

// Define the types for the items in the list
export interface ListItem {
  id: number; // Assuming ID is a number; adjust if needed
  label: string; // The text to display for each item
  icon?: any;
}

// Define the props for the ItemsListModal component
interface ItemsListModalProps {
  onDismiss: () => void; // Function to handle modal dismissal
  type: string; // The type of item to select
  itemsList: ListItem[]; // The list of items to display
  handleModalInput: (item: ListItem) => void; // Function to handle item selection
  selectedItemId: number | undefined;
  isModalOpen: boolean;
}

const ItemsListModal: FC<ItemsListModalProps> = ({
  onDismiss,
  type,
  itemsList,
  handleModalInput,
  selectedItemId,
  isModalOpen,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemPress = (item: ListItem) => {
    handleModalInput(item);
    //  onTryAgainClick(item);
  };

  const filteredItems = itemsList.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const renderItem = ({item}: {item: ListItem}) => {
    const backgroundColor = item.id === selectedItemId ? '#E9F5FE' : 'white';
    console.log(item);
    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            backgroundColor: backgroundColor,
            alignItems: 'center',
            borderRadius: 10,
            padding: 10,
          }}>
          {item.icon && <Image source={icons[item.icon]} />}
          <Text style={styles.title}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={isModalOpen}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{margin: 0}}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onDismiss}
        style={{
          flex: 1,
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
    paddingHorizontal: 22,
    paddingTop: 50,
    paddingBottom: 30,
    width: '100%',
    maxHeight: 400,
  },
  topView: {
    height: 50,
    marginVertical: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 10,
  },
  separator: {
    height: 1, // Changed from 0 to 1 for visible separation
    backgroundColor: 'grey',
    marginVertical: 2,
  },
  searchInput: {
    paddingHorizontal: 15,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 0,
    width: 350,
    height: 50,
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
