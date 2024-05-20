import { StyleSheet, Platform, Text } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 25,
    // fontWeightL: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: 'white',
    padding: 12,
  },
});
