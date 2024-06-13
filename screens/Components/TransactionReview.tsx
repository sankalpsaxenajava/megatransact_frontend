import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from './Header';

// Define the type for a transaction detail item
interface TransactionDetail {
  key: string;
  value: string;
}

const transactionDetails: TransactionDetail[] = [
  {key: 'Amount', value: '$400.00'},
  {key: 'Meter Number', value: 'M0746P76389'},
  {key: 'Biller', value: 'Frank Energy Ltd.'},
];

const TransactionReview: React.FC = () => {
  const navigation = useNavigation(); // Hook for navigation

  const renderItem = ({item}: ListRenderItemInfo<TransactionDetail>) => (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{item.key}:</Text>
      <Text style={styles.detailValue}>{item.value}</Text>
    </View>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Review Transaction" />
      <View style={styles.amountSection}>
        <View style={styles.amountMain}>
          <Text style={styles.amountLabel}>Utility Bill Amount</Text>
        </View>
        <Text style={styles.amountValue}>$400.00</Text>
      </View>
      <FlatList
        data={transactionDetails}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        style={styles.detailsSection}
        ItemSeparatorComponent={ItemSeparator}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('PinInput');
        }}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  amountSection: {
    backgroundColor: '#EDE7F6',
    padding: 20,
    alignItems: 'center',
  },
  amountMain: {
    borderRadius: 20,
    padding: 14,
    backgroundColor: '#FFFFFF',
  },
  amountLabel: {
    fontSize: 12,
    color: '#8C8C8C',
  },
  amountValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
  },
  detailsSection: {
    padding: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 13,
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#F6F6F6',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6200EA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //  width: '90%',
    marginTop: 20,
    height: 60,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TransactionReview;
