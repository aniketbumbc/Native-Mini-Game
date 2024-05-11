import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constant/colors';

function InstrctionText({ children }) {
  return <Text style={styles.instruction}>{children}</Text>;
}

export default InstrctionText;

const styles = StyleSheet.create({
  instruction: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
