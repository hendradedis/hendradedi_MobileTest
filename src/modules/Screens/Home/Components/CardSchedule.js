import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GlobalStyle from '../../../components/GlobalStyle'
import { moderateScale } from 'react-native-size-matters'
import _ from 'lodash'
import moment from 'moment';
import IonIcons from 'react-native-vector-icons/Ionicons';

export default class CardSchedule extends Component {
  render() {
    let item = _.get(this.props,'item', '' )
    console.log("itemku", item)
    let locationName = _.get(this.props.item,'place', 'Mediterania Residance' )
    let date = _.get(this.props.item,'date', '1635784535' )
    let getDay = moment(date).format('dddd').toUpperCase()
    let month = moment(date).format('MMM').toUpperCase()
    let dateNumber = moment(date).format('DD').toUpperCase()
    let startTimes = _.get(this.props.item,'startTime', '1635784535' )
    let startTime = moment(startTimes).format("hh:mm")
    let endTimes = _.get(this.props.item,'endTime', '1635784535' )
    let endTime = moment(endTimes).format("hh:mm")
    
    return (
      <View style={styles.container}>
        <Text style={[GlobalStyle.styles.textWhiteBold,{color:'grey'}]}>{getDay}</Text>
        <Text style={[GlobalStyle.styles.textBold,{fontSize:moderateScale(18), letterSpacing:moderateScale(0.5), marginTop:moderateScale(8)}]}>{dateNumber+' '+month}</Text>

        <Text style={[GlobalStyle.styles.textBold, {fontSize:moderateScale(14), marginTop:moderateScale(25,0.25)}]}>{locationName}</Text>
          <View style={{flexDirection:'row', marginTop:moderateScale(2)}}>
            <IonIcons 
              name={"time-outline"}
              color={'black'}
              size={moderateScale(18)}
              style={{justifyContent:'center',alignSelf:'center', marginRight:moderateScale(5,0.25)}}
            />
            <Text style={[GlobalStyle.styles.textNormal, {fontSize:moderateScale(14)}]}>{startTime} - </Text>
            <Text style={[GlobalStyle.styles.textNormal, {fontSize:moderateScale(14)}]}>{endTime}</Text>
          </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:moderateScale(10,0.25), 
    width:moderateScale(280,0.25), 
    marginRight:moderateScale(10,0.25), 
    backgroundColor:'#f4f4f4', 
    height:moderateScale(140,0.25), 
    padding:moderateScale(10,0.25), 
    borderRadius:moderateScale(8,0.25)
  },
  greenBox: {
    width:moderateScale(90),
    height:moderateScale(30),
    backgroundColor:'#5bc5ba',
    borderRadius:moderateScale(5,0.25),
    marginBottom:moderateScale(5,0.25),
    alignItems:'center',
    justifyContent:'center'
  },
  redBox: {
    width:moderateScale(90),
    height:moderateScale(30),
    backgroundColor:'#fa265b',
    borderRadius:moderateScale(5,0.25),
    marginBottom:moderateScale(5,0.25),
    alignItems:'center',
    justifyContent:'center'
  },
  spacing: {
    fontSize:moderateScale(16), 
    color:'#b4b4b4',
    marginTop:moderateScale(40,0.25), 
    letterSpacing:moderateScale(8,0.25)
  },
  boxDate: {
    flexDirection:'row',
     marginTop:moderateScale(16,0.25),
    justifyContent:'space-between'
  }
})