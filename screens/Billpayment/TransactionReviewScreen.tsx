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
import Header from '../Components/Header';

// Define the type for a transaction detail item
interface TransactionDetail {
  key: string;
  value: string;
}

const TransactionReviewScreen: React.FC = ({route}) => {
  const navigation = useNavigation(); // Hook for navigation

  const {transactionDetail} = route.params;
  // Function to format the amount to a currency format
  const formatToCurrency = value => {
    if (isNaN(value)) {
      return value;
    }
    return value.toFixed(2);
  };

  // Format the "Amount" value and update the array
  const updatedTransactionDetail = transactionDetail.map(detail => {
    if (detail.key === 'Amount') {
      return {...detail, value: `$${formatToCurrency(detail.value)}`};
    }
    return detail;
  });

  console.log(updatedTransactionDetail);

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
        <Text style={styles.amountValue}>
          {
            updatedTransactionDetail.find(detail => detail.key === 'Amount')
              .value
          }
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <FlatList
          data={updatedTransactionDetail}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    paddingVertical: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 13,
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
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
    height: 60,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    padding: 20,
  },
});

export default TransactionReviewScreen;
