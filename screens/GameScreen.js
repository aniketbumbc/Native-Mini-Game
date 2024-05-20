import { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstrctionText from '../components/ui/InstrcutionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuseeLogItem';

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

function GameScreen({ userNumber, gameOverHandler, setGuessRoundApp }) {
  const initialGusess = generateRandomBetween(1, 100, userNumber);
  const [cureentGuess, setCurrentGuess] = useState(initialGusess);
  const [guessRound, setGuessRound] = useState([initialGusess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (cureentGuess === userNumber) {
      gameOverHandler();
    }
  }, [cureentGuess, userNumber, gameOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRound((prevRound) => [newRandomNumber, ...prevRound]);
    setGuessRoundApp(guessRound.length + 1);
  }

  const guessRoundListLength = guessRound.length;

  let content = (
    <>
      <NumberContainer>{cureentGuess}</NumberContainer>
      <Card>
        <InstrctionText style={styles.instructionText}>
          Higher or lower?
        </InstrctionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name='add-circle' size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='remove-circle' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      {/* <View style={styles.listContainer}>
        <FlatList
          data={guessRound}
          renderItem={(item) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - item.index}
              guess={item.item}
            />
          )}
          keyExtractor={(itemData) => itemData}
        />
      </View> */}
    </>
  );

  if (width > 400) {
    const marginHorizontal = 70;
    const instructionTextMargin = 10;

    content = (
      <>
        <InstrctionText
          style={[styles.instructionText, { marginTop: instructionTextMargin }]}
        >
          Higher or lower?
        </InstrctionText>
        <View style={styles.buttonContainerWide}>
          <View
            style={[
              styles.buttonContainer,
              { marginHorizontal: marginHorizontal },
            ]}
          >
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name='add-circle' size={24} color='white' />
            </PrimaryButton>
          </View>

          <NumberContainer>{cureentGuess}</NumberContainer>

          <View
            style={[
              styles.buttonContainer,
              { marginHorizontal: marginHorizontal },
            ]}
          >
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='remove-circle' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  const marginTopDistance = width < 400 ? 120 : 10;
  const marginHorizontalList = width < 400 ? 0 : 190;
  return (
    <View style={[styles.screen, { marginTop: marginTopDistance }]}>
      <Title>Opponent's Guess</Title>
      {content}
      <View
        style={[
          styles.listContainer,
          { marginHorizontal: marginHorizontalList },
        ]}
      >
        <FlatList
          data={guessRound}
          renderItem={(item) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - item.index}
              guess={item.item}
            />
          )}
          keyExtractor={(itemData) => itemData}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonContainerWide: {
    flex: 1,
    flexDirection: 'row',
  },
});
