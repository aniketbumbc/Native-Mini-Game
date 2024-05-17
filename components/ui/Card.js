import {
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constant/colors';
function Card({ children }) {
  const { width, height } = useWindowDimensions();
  const orientationWidth = width < 400 ? 36 : 200;

  return (
    <View style={[styles.card, { marginHorizontal: orientationWidth }]}>
      {children}
    </View>
  );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
