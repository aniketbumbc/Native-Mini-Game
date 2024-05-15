import { StyleSheet, View, ImageBackground } from 'react-native';
import { useFont } from 'expo-font';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from './constant/colors';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  const [fontLoaded] = useFont({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  function pickNumber(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  let screen = <StartGameScreen pickNumber={pickNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
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
