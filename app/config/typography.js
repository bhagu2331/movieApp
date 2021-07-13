import { FORTAB } from '../config/MQ';
import { Platform, StyleSheet } from 'react-native';
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

/**
 * Common font family setting
 * - This font name will be used for all template
 * - Check more how to add more font family with url below
 * @url http://passionui.com/docs/felix-travel/theming
 */
export const FontFamily = {
  default: Platform.OS === 'android' ? 'Rubik-VariableFont_wght' : 'System',
  semibold: Platform.OS === 'android' ? 'Rubik-Italic-VariableFont_wght' : 'System',
  // bold: Platform.OS === 'android' ? 'Manjari-Bold' : 'System',
  // medium: Platform.OS === 'android' ? 'Manjari-Regular' : 'System',
};

/**
 * Fontweight setting
 * FontsFree-Net-SF-Pro-Rounded-Medium
 * - This font weight will be used for style of screens where needed
 * - Check more how to use font weight with url below
 * @url http://passionui.com/docs/felix-travel/theming
 */
export const FontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

/**
 * Typography setting
 * - This font weight will be used for all template
 * - Check more how to use typography in url below
 * @url http://passionui.com/docs/felix-travel/theming
 */
export const Typography = StyleSheet.create({
  default: {
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  header: {
    fontSize: FORTAB ? 38 : 34,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  title1: {
    fontSize: FORTAB ? 32 : 28,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  title2: {
    fontSize: FORTAB ? 28 : 24,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  title3: {
    fontSize: FORTAB ? 26 : 22,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  title4: {
    fontSize: FORTAB ? 24 : 20,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  headline: {
    fontSize: FORTAB ? 21 : 17,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  body1: {
    fontSize: FORTAB ? 21 : 17,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  body2: {
    fontSize: FORTAB ? 18 : 14,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  callout: {
    fontSize: FORTAB ? 21 : 17,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  subhead: {
    fontSize: FORTAB ? 19 : 15,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  footnote: {
    fontSize: FORTAB ? 17 : 13,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  caption1: {
    fontSize: FORTAB ? 16 : 12,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  caption2: {
    fontSize: FORTAB ? 15 : 11,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  overline: {
    fontSize: FORTAB ? 14 : 10,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
  smallline: {
    fontSize: FORTAB ? 13 : 9,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.default,
  },
});
