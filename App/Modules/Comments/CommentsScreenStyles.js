import { StyleSheet } from 'react-native';
import { Colors } from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    height: 40,
    width: 250,
    color: Colors.subtitle,
  },
  image: {
    marginRight: 10,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

export default styles;
