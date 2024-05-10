import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGusess = generateRandomBetween(1, 100, userNumber);
  const [cureentGuess, setCurrentGuess] = useState('22');
  return (
    <View style={styles.screen}>
      <Title>Opponet's Guess</Title>

      <NumberContainer>{cureentGuess}</NumberContainer>

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
});
