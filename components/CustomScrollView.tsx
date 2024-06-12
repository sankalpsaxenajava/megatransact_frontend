import {ScrollView, StyleSheet} from 'react-native';

interface CustomScrollProps {
  children: React.ReactNode | React.ReactNode[];
  backgroundColor?: string;
}

const CustomScrollView = ({
  children,
  backgroundColor = '#fff',
}: CustomScrollProps) => {
  const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: backgroundColor,
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {children}
    </ScrollView>
  );
};

export default CustomScrollView;
