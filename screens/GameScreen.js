import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstrctionText from '../components/ui/InstrcutionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, gameOverHandler }) {
  const initialGusess = generateRandomBetween(1, 100, userNumber);
  const [cureentGuess, setCurrentGuess] = useState(initialGusess);

  useEffect(() => {
    if (cureentGuess === userNumber) {
      gameOverHandler();
    }
  }, [cureentGuess, userNumber, gameOverHandler]);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && cureentGuess < userNumber) ||
      (direction === 'greater' && cureentGuess > userNumber)
    ) {
      Alert.alert("Don't lie, You know that this is wrong...");
      return;
    }

    if (direction === 'lower') {
      maxBoundary = cureentGuess;
    } else {
      minBoundary = cureentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      cureentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponet's Guess</Title>

      <NumberContainer>{cureentGuess}</NumberContainer>
      <Card>
        <InstrctionText>Higher or lower?</InstrctionText>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler('greater')}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            -
          </PrimaryButton>
        </View>
      </Card>

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
    marginTop: 100,
  },
});
