import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  const [enterNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enterText) {
    console.log(enterText);
    setEnteredNumber(enterText);
  }

  function resetInput() {
    setEnteredNumber('');
  }

  function confirmInput() {
    const chosenNumber = parseInt(enterNumber);
    console.log(enterNumber);
    console.log(chosenNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be 1 to 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInput },
      ]);
      return;
      //show alert
    }

    console.log('Valid Number');
  }

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: '#3b021f',
    borderRadius: 8,

    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInputContainer: {
    height: 50,
    fontSize: 32,
    width: 50,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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
