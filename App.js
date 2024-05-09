import { StyleSheet, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickNumber(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen pickNumber={pickNumber} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}
      >
        {/* <SafeAreaView > {screen}</SafeAreaView> */}
        <SafeAreaProvider>
          <View style={styles.rootScreen}>{screen}</View>
        </SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15,
  },
});
