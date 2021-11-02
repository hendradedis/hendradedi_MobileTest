import { 
  StyleSheet, 
  Platform, 
  Dimensions 
} from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters'

export default class GlobalStyle {
  static ORANGE_DEFAULT_COLOUR = "#F26F24" // used for loading color
  static styles = StyleSheet.create({
      textWhiteBold: {
        color: '#ffff',
        fontSize: moderateScale(14),
        fontWeight:'bold'
      },
      textLight: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: moderateScale(12),
        fontWeight:'200'
      },
      textBold: {
        fontWeight: 'bold',
        fontSize: moderateScale(18, 0.25),
        letterSpacing:0.5,
        lineHeight:moderateScale(20,0.25)
      },
      textNormal: {
        color:'black',
        fontSize:moderateScale(12,0.25), 
        fontWeight:'400'
      },
      textNormalRed: {
        color:'#fa265b',
        fontSize:moderateScale(12,0.25), 
        fontWeight:'400'
      }
  })

}