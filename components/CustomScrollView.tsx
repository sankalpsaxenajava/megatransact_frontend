import {ScrollView, StyleSheet} from 'react-native';

const CustomScrollView = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default CustomScrollView;
