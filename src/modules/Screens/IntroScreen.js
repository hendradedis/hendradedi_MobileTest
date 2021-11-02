import React, { Component } from 'react'
import { Text, 
        View, 
        SafeAreaView, 
        StatusBar, 
        StyleSheet, 
        Image,
        Dimensions 
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Screen from '../components/Screen'

const {height, width} = Dimensions.get('screen')

 class IntroScreen extends Component {
  componentDidMount() {
    this.onEnd()
  }

  onEnd = async () => {   
      setTimeout( async () => {
          console.log("[IntroScreen] onEnd setTimeOut");
          this.props.navigation.navigate("Home");
      }, 1500 ) // the time will be adjusted to the first data loaded
  }

  render() {
    return (
     <Screen>
      <SafeAreaView 
        style={styles.container}
      >
        <Image
          source={require('../../assets/FlashCoffe.png')}
          style={styles.imgLogo}
        />
        <Text style={styles.TextTitle}> The Your Great Day</Text>
      </SafeAreaView>
      </Screen> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fedc05'
  },
  TextTitle: {
    fontSize:moderateScale(14, 0.25), 
    color:'white', 
    fontWeight:'bold',
    justifyContent:'center',
    marginTop:moderateScale(20,0.25),
    alignSelf:'center'
  },
  imgLogo: {
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center', 
    width:'80%', 
    height:moderateScale(150,0.25), 
    marginTop:height/3
  }
})


export default IntroScreen