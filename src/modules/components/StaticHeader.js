import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters'
import Icon from "react-native-vector-icons/Feather";
import GlobalStyle from './GlobalStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';

 class StaticHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{width:'10%'}}>
            <TouchableOpacity onPress={() =>this.props.navigation.goBack() }>
              <IonIcons 
                name={"arrow-back-outline"}
                color={'black'}
                size={moderateScale(30)}
                style={{justifyContent:'center',alignSelf:'center', marginLeft:moderateScale(16,0.25)}}
              />
            </TouchableOpacity>
          </View>

        <View style={{width:'80%', alignItems:'center', alignSelf:'center'}}>
          <Text style={GlobalStyle.styles.textBold}>
            {this.props.title}
          </Text>
        </View>

        {
          this.props.iconRight &&
        <View style={{width:'10%', alignItems:'center', marginRight:moderateScale(10,0.25)}}>
          <IonIcons 
            name={"sync-outline"}
            color={'black'}
            size={moderateScale(25)}
            style={{justifyContent:'center',alignSelf:'center', marginRight:moderateScale(16,0.25)}}
          />
        </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    width:'100%',
    height:moderateScale(60,0.25),
    backgroundColor:'#fedc05',
    justifyContent:'center',
    alignItems:'center'
  }
})

export default StaticHeader
