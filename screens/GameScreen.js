import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponet's Guess</Title>
      <View>
        <Text> Higher or lower + - </Text>
      </View>
      <View>
        <Text>Log Rounds </Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 35,
  },

  title: {
    fontSize: 25,
    fontWeightL: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});
