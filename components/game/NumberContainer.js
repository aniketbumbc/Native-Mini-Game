import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constant/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

console.log('deviceWidth', deviceWidth);

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 400 ? 12 : 15,
    margin: deviceWidth < 400 ? 12 : 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 400 ? 28 : 36,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});
