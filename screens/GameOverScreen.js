import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constant/colors';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screenContainer}>
      <Title>GAME OVER!!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundNumber}</Text>{' '}
          rounds to guess the number
          <Text style={styles.highlight}> {userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: deviceWidth < 380 ? 75 : 150,
    width: deviceWidth < 380 ? 150 : 200,
    height: deviceHeight < 380 ? 150 : 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
