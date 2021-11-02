import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import GlobalStyle from '../../../components/GlobalStyle'
import _ from 'lodash'
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler'
import IonIcons from 'react-native-vector-icons/Ionicons';

class ScheduleCard extends Component {

  handlePress = ({locationName, starDate, endDate,desc, dates, imageUrl}) => {
    // Alert.alert("halooo")
    let payload = {
      locationName: locationName,
      starDate: starDate,
      endDate: endDate,
      desc: desc,
      dates:dates,
      imageUrl:imageUrl
    }
    this.props.navigation.navigate("ScheduleDetail", {payload});
  }
  render() {
    let item = _.get(this.props,'item', '' )
    console.log("itemku", item)
    let offDay = _.get(this.props.item,'offDay', false )
    let locationName = _.get(this.props.item,'place', '' )
    let dateNow = moment().unix('x')
    let starDate = _.get(this.props.item,'startTime', '--:--' )
    let endDate = _.get(this.props.item,'endTime', '--:--' )
    let desc = _.get(this.props.item,'desc', '17:00' )
    let dates = _.get(this.props.item,'date', '1635784535' )
    let startTimes = _.get(this.props.item,'startTime', '1635784535' )
    let imageUrl = _.get(this.props.item,'imageUrl', '' )
    let startTime = moment(startTimes).format("hh:mm")
    let endTimes = _.get(this.props.item,'endTime', '1635784535' )
    let endTime = moment(endTimes).format("hh:mm")
    let date = _.get(this.props.item,'date', '1635835716' )
    let day = moment(date).format('ddd').toUpperCase()
    let dayNumber = moment(date).format('DD').toUpperCase()
    return (
       <TouchableOpacity onPress={() => 
        this.handlePress({
          locationName:locationName,
          starDate:starDate,
          endDate:endDate,
          desc:desc,
          dates:dates,
          imageUrl:imageUrl
       })}>
        <View style={styles.container}>
            <View style={styles.boxDate}>
              <Text style={[GlobalStyle.styles.textBold, {fontSize:moderateScale(14,0.25)}]}> {day} </Text>
              <Text style={[GlobalStyle.styles.textBold, {fontSize:moderateScale(20,0.25), marginTop:moderateScale(10,0.25)}]}>{dayNumber}</Text>
            </View>
            
            {
              offDay === true ?
              <View style={styles.cardOffDay}>
                <Text style={[GlobalStyle.styles.textBold], {justifyContent:'center',fontWeight:'bold', alignSelf:'center'}}>NO SCHEDULE</Text>
              </View>
              :
              <View style={styles.cardBox}>
                <Text style={GlobalStyle.styles.textBold}>{locationName}</Text>

                <View style={styles.date}>
                  <IonIcons 
                    name={"time-outline"}
                    color={'black'}
                    size={moderateScale(18)}
                    style={{justifyContent:'center',alignSelf:'center', marginRight:moderateScale(1,0.25)}}
                  />
                  <Text> {startTime} -</Text>
                  <Text> {endTime} </Text>
                  {
                    dateNow === date && // condition for Today
                      <View style={styles.today}>
                        <Text style={[GlobalStyle.styles.textWhiteBold, {fontSize:moderateScale(11)}]}> TODAY </Text>
                      </View>
                  }
                </View>
              </View>
            }
        </View>
      </TouchableOpacity> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginBottom:moderateScale(15,0.25)
    // backgroundColor:'red'
  },
  boxDate: {
    width:'15%',
    alignItems:'center'
    // backgroundColor:'blue'
  },
  cardBox: {
    width:'85%',
    backgroundColor:'#f4f4f4',
    paddingVertical:moderateScale(16,0.25),
    paddingHorizontal:moderateScale(10,0.25),
    borderRadius:moderateScale(8,0.25)
  },
  date: {
    flexDirection:'row',
    marginTop:moderateScale(8,0.25),
    alignItems:'center'
  },
  today: {
    padding:moderateScale(3,0.25),
    marginLeft:moderateScale(5,0.25), 
    backgroundColor:'#fa265b', 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:moderateScale(5,0.25)
  },
  cardOffDay:{
    width:'85%',
    height:moderateScale(80,0.25),
    backgroundColor:'#ffff',
    borderRadius:moderateScale(8,0.25),
    borderWidth:2,
    borderColor:'#f4f4f4',
    justifyContent:'center',
    alignSelf:'center',
    elevation:1,
    borderStyle: 'dashed',
  }
})

export default ScheduleCard