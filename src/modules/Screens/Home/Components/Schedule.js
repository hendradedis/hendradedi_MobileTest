import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import _ from 'lodash'
import moment from 'moment';
import GlobalStyle from '../../../components/GlobalStyle'
import { moderateScale } from 'react-native-size-matters'
import IonIcons from 'react-native-vector-icons/Ionicons';


const LoadingHolder = () => {
  return(
    <View style={{flexDirection:'row', marginTop:moderateScale(5,0.25)}}>
    <View style={styles.loadingHolder}>
        <ActivityIndicator
          size={'large'}
          color={'#fedc05'}
          style={{justifyContent:'center', alignSelf:'center'}}
        />  
      </View> 
 
    </View>
      
  )
}

class Schedule extends Component {
  render() {
    let title = _.get(this.props,'title', 'TODAY SCHEDULES' )
    let data = _.get(this.props,"data", '')
    let locationName = _.get(this.props.data[0], 'place', '')
    let startTimes = _.get(this.props.data[0],'startTime', '1635784535' )
    let startTime = moment(startTimes).format("hh:mm")
    let endDates = _.get(this.props.data[0],'endTime', '1635784535' )
    let endDate = moment(endDates).format("hh:mm")

    let clockIn = _.get(this.props.data[0],'clockIn', '--:--' )
    let clockOut = _.get(this.props.data[0],'clockOut', '--:--' )
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={[GlobalStyle.styles.textBold]}> {title} </Text>
          <Text style={[GlobalStyle.styles.textNormalRed, {fontSize:moderateScale(15,0.25)}]}> Refresh </Text>
        </View>
        {
          this.props.data === null ?
            <LoadingHolder/>
         :
        <View style={styles.card}>
            <Text style={[GlobalStyle.styles.textBold, {fontSize:moderateScale(14)}]}>{locationName}</Text>
            <View style={{flexDirection:'row', marginTop:moderateScale(2)}}>
              <IonIcons 
                name={"time-outline"}
                color={'black'}
                size={moderateScale(18)}
                style={{justifyContent:'center',alignSelf:'center', marginRight:moderateScale(5,0.25)}}
              />
              <Text style={[GlobalStyle.styles.textNormal, {fontSize:moderateScale(14)}]}>{startTime} - </Text>
              <Text style={[GlobalStyle.styles.textNormal, {fontSize:moderateScale(14)}]}>{endDate}</Text>
            </View>

            <View style={styles.boxDate}>

            <View style={{flexDirection:'column'}}>
              <View style={styles.greenBox}>
                <Text style={[GlobalStyle.styles.textWhiteBold, {fontSize:moderateScale(14)}]}>CLOCK IN</Text>
              </View>
              <Text style={[GlobalStyle.styles.textNormal, {fontSize:moderateScale(20,0.25), justifyContent:'center', alignSelf:'center'}]}>{clockIn}</Text>
            </View>
            
                <Text style={styles.spacing}>-----------</Text>

              <View style={{flexDirection:'column'}}>
                <View style={styles.redBox}>
                  <Text style={[GlobalStyle.styles.textWhiteBold, {fontSize:moderateScale(14)}]}>CLOCK OUT</Text>
                </View>
                  <Text style={[GlobalStyle.styles.textNormal, {fontSize:moderateScale(20,0.25), justifyContent:'center', alignSelf:'center'}]}>{clockOut}</Text>
              </View>
            </View>
        </View>
        }
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    marginHorizontal:moderateScale(14,0.25),
    marginTop:moderateScale(25,0.25),
  },
  title: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  card: {
    backgroundColor:'#f4f4f4',
    width:'100%',
    flexDirection:'column',
    height:moderateScale(140,0.25),
    borderRadius:moderateScale(10,0.25),
    marginTop:moderateScale(10,0.25),
    padding:moderateScale(10,0.25)
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
  },
  loadingHolder: {
    justifyContent:'center',
    backgroundColor:'#f4f4f4',
    borderRadius:moderateScale(8,0.25), 
    height:moderateScale(140), 
    width:'100%', 
    alignItems:'center'
  }
})

export default Schedule