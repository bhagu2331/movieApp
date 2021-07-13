import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const FORTAB = width <= 2736 && width >= 600;
const TABLANDSCAPE = width <= 2736 && width >= 600;
const TABPORTRAIT = width >= 600 && width <= 600;
module.exports = {
  FORTAB,
  TABLANDSCAPE,
  TABPORTRAIT,
};
