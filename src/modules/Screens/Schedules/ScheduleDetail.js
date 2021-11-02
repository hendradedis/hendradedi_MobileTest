import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import Screen from '../../components/Screen'
import GlobalStyle from '../../components/GlobalStyle'
import { moderateScale } from 'react-native-size-matters'
import FastImage from "react-native-fast-image";
import _ from 'lodash'
import StaticHeader from '../../components/StaticHeader'
import moment from 'moment';
import IonIcons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen')

const LocationCard = ({locationName, desc, imageUrl}) => {
  let descs = ' Main Lobby, Your street , buy and enjoy the taste'
  return(
    <View style={styles.locationCard}>
      <View style={{width:'30%'}}>
        {
          imageUrl === ''?
         <View style={{justifyContent:'center', alignItems:'center'}}>
           <ActivityIndicator
               size={'large'}
               color={'#ffff'}
               style={{justifyContent:'center', alignSelf:'center'}}
             />  
         </View> 
          :  
          <FastImage
            source={{uri:imageUrl}}
            style={styles.imageStyle}
          />
        }
      </View>

    <View style={{width:'70%'}}>
      <Text style={[GlobalStyle.styles.textBold, {marginBottom:moderateScale(8,0.25)}]}>{locationName}</Text>
      <Text style={[GlobalStyle.styles.textNormal, {lineHeight:moderateScale(16,0.25)}]}>{desc + descs }</Text>

      <TouchableOpacity style={styles.buttonMap}>
        <Text style={GlobalStyle.styles.textNormalRed}>View Maps</Text>
      </TouchableOpacity>
    </View>  
    </View>
  )
}

class ScheduleDetail extends Component {
  
  render() {
    const {navigation, route} = this.props
    // let id = _.get(route.params, "payload.id", 1)
    let description = 'Main Lobby, Apartement meditaria garden residence 1(Bogenvice jakarta barat)'
    let locationName = _.get(route.params.payload,'locationName', '' )
    let desc = _.get(route.params.payload,'desc', description )
    let startDate = _.get(route.params.payload,'starDate', '--:--')
    let endDate = _.get(route.params.payload,'endDate', '--:--')
    let imageUrl = _.get(route.params.payload,'imageUrl', '--:--')
    let startTime = moment(startDate).format("hh:mm")
    let endTime = moment(endDate).format("hh:mm")
    let dataClockOut = _.get(route.params.payload,'dataClockOut', '--:--') // if dataClockOut available from BE
    let dataClockIn = _.get(route.params.payload,'dataClockIn', '--:--') // if dataClockIn available from BE
    let dates = _.get(route.params.payload,'dates', '--:--')
    let date = moment(dates).format('DD MMM YYYY')
    return (
      <Screen>
        <StaticHeader
          iconRight={false}
          title={date}
          navigation={this.props.navigation}
        />
        {
          locationName === '' ?
          <View style={{ justifyContent:'center', alignItems:'center', height:'80%', flex:1}}>
            <ActivityIndicator
              size={'large'}
              color={'#ffff'}
              style={{justifyContent:'center', alignSelf:'center'}}
            />  
         </View>  
         :
        <View style={styles.container}>
          <Text style={[GlobalStyle.styles.textBold, {paddingTop:moderateScale(25,0.25)}]}>STORE</Text>
          <LocationCard
            locationName= {locationName}
            imageUrl = {imageUrl}
            desc={desc}
          />

          {/* <View style={{width:width, padding:moderateScale(12,0.25), flexDirection:'row'}}> */}
            <Text style={[GlobalStyle.styles.textBold, {paddingTop:moderateScale(25,0.25)}]}>Time Schedule</Text>

            <View style={styles.boxDate}>
              <IonIcons 
                name={"time-outline"}
                color={'black'}
                size={moderateScale(18)}
                style={{justifyContent:'center',alignSelf:'center', marginRight:moderateScale(5,0.25)}}
              />
              <Text style={[GlobalStyle.styles.textBold, {fontSize:14}]}>{startTime + " - "}</Text>
              <Text style={[GlobalStyle.styles.textBold, {fontSize:14}]}>{endTime}</Text>
            </View>
          {/* </View> */}

          
        <Text style={[GlobalStyle.styles.textBold, {paddingTop:moderateScale(25,0.25)}]}>CLOCK IN</Text>
          <View style={styles.boxDate}>
            <IonIcons 
              name={"qr-code-outline"}
              color={'black'}
              size={moderateScale(18)}
              style={{justifyContent:'center',alignSelf:'center', marginRight:moderateScale(6,0.25)}}
            />
            <Text style={[GlobalStyle.styles.textBold, {fontSize:14}]}>{dataClockIn}</Text>
          </View>
          
          <Text style={[GlobalStyle.styles.textBold, {paddingTop:moderateScale(25,0.25)}]}>CLOCK OUT</Text>
            <View style={styles.boxDate}>
              <IonIcons 
                name={"qr-code-outline"}
                color={'black'}
                size={moderateScale(18)}
                style={{justifyContent:'center',alignSelf:'center', marginRight:moderateScale(6,0.25)}}
              />
              <Text style={[GlobalStyle.styles.textBold, {fontSize:14}]}>{dataClockOut}</Text>
            </View>

        </View>
        }
      </Screen>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal:moderateScale(16,0.25),
    // backgroundColor:'blue'
  },
  locationCard: {
    flexDirection:'row',
    width:"100%",
    marginTop:moderateScale(10,0.25), 
    borderRadius:moderateScale(8,0.25), 
    height:moderateScale(120,0.25), 
    backgroundColor:'#f4f4f4', 
    marginRight:moderateScale(16,0.25),
    padding:moderateScale(10,0.25)
  },
  imageStyle: {
    width:moderateScale(75, 0.25),
    height:moderateScale(75,0.25),
    borderRadius:moderateScale(8,0.25),
    paddingRight:moderateScale(10,0.25)
  },
  buttonMap: {
    borderWidth:moderateScale(1), 
    borderColor:'#fa265b', 
    borderRadius:moderateScale(25,0.25), 
    padding:moderateScale(5,0.25), 
    width:moderateScale(80,0.25), 
    alignItems:'center', 
    marginTop:moderateScale(10,0.25)
  },
  boxDate: {
    width:'100%',
    height:moderateScale(60,0.25),
    marginTop:moderateScale(10,0.25), 
    paddingHorizontal:moderateScale(16,0.25), 
    flexDirection:'row', 
    backgroundColor:'#f4f4f4', 
    borderRadius:moderateScale(8),
    // justifyContent:'center',
    alignItems:'center'
  }
})

export default  ScheduleDetail