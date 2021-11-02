
import React, { Component } from 'react'
import { Text,
        View, 
        StyleSheet, 
        StatusBar, 
        SafeAreaView,
        Platform } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import _get from 'lodash/get';


const MyStatusBar = ({backgroundColor, statusBars, ...props}) => ( // for ios
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar
      statusBars
      translucent 
      backgroundColor={backgroundColor} 
      // hidden={false}
      {...props} />
  </View>
)

class Screen extends Component {
  render() {
    const trasparentHeader = _get(this.props, "trasparentHeader", false)
    return (
      <SafeAreaView style={styles.container}>
        <MyStatusBar 
          backgroundColor={trasparentHeader === true ? "transparent" : "#fedc05"} barStyle="light-content"
          statusBars={this.props.statusBars}
         />
        {
          this.props.children
        }
      </SafeAreaView>
    )
  }
}


const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal:moderateScale(0,0.25)
  },
  statusBar: {
    height:STATUSBAR_HEIGHT,
    width:'100%'
  }
})

export default Screen