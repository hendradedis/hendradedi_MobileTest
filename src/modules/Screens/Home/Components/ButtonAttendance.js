import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import GlobalStyle from '../../../components/GlobalStyle'

class ButtonAttendance extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <View style={{width:moderateScale(165,0.25), height:moderateScale(55,0.25), backgroundColor:'#5bc5ba', borderRadius:moderateScale(10,0.25), justifyContent:'center', alignItems:'center'}}>
            <Text style={[GlobalStyle.styles.textWhiteBold, {fontSize:moderateScale(16)}]}> Clock In </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View style={{width:moderateScale(165,0.25), height:moderateScale(55,0.25), backgroundColor:'#b4b4b4', borderRadius:moderateScale(10,0.25), justifyContent:'center', alignItems:'center'}}>
            <Text style={[GlobalStyle.styles.textWhiteBold, {fontSize:moderateScale(16)}]}> Clock 0ut </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:moderateScale(35,0.25),
      marginBottom:moderateScale(50,0.25)
    }
})

export default ButtonAttendance