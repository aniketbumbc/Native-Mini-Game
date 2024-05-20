import { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Card from '../components/ui/Card';
import InstrctionText from '../components/ui/InstrcutionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constant/colors';

function StartGameScreen({ pickNumber }) {
  const [enterNumber, setEnteredNumber] = useState('');

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enterText) {
    setEnteredNumber(enterText);
  }

  function resetInput() {
    setEnteredNumber('');
  }

  function confirmInput() {
    const chosenNumber = parseInt(enterNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be 1 to 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInput },
      ]);
      return;
    }
    pickNumber(chosenNumber);
  }

  const marginTopDistance = height < 380 ? 40 : 70;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View
          style={[styles.parentContainer, { marginTop: marginTopDistance }]}
        >
          <Title>Guess My Number </Title>
          <Card>
            <InstrctionText>Enter a Number</InstrctionText>
            <TextInput
              style={styles.textInputContainer}
              maxLength={2}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              value={enterNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInput}> Reset </PrimaryButton>
              </View>

              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  parentContainer: {
    flex: 1,
    //marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center',
  },
  instruction: {
    color: Colors.accent500,
    fontSize: 24,
  },
  textInputContainer: {
    height: 50,
    fontSize: 32,
    width: 50,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
