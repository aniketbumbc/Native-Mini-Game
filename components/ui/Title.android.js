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
    color: 'yellow',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 2, android: 2 }),
    borderColor: 'black',
    padding: 12,
  },
});
