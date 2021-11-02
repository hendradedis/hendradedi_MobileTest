import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyle from '../../../components/GlobalStyle';
import _ from 'lodash'
import IonIcons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';


class CardHolder extends Component {
  render() {
    let profileDum = 'https://img.okezone.com/content/2020/01/13/320/2152302/ketika-mark-zuckerberg-ngeluh-jadi-bos-facebook-GmBbUyRsiC.jpg'
    let profile = _.get(this.props,'title', profileDum )
    let title = _.get(this.props,'title', 'LIVE ATTENDANCE' )
    let dateNow = moment().format('dddd, DD MMM YYYY')
    let hourNow = moment().format('hh:mm')
    return (
      <View style={styles.container}>
        <View style={styles.footer}>
          <Image
            source={{uri:profile}}
            style={styles.profile}
          />
          <Text style={[GlobalStyle.styles.textBold, {alignSelf:'center'}]}> {title}</Text>

          <IonIcons 
              name={"notifications-outline"}
              color={'black'}
              size={moderateScale(25)}
              style={{justifyContent:'center',alignSelf:'center'}}
            />
          {/* <Icon
           size={24} color="white" name="movie" 
          /> */}
        </View>
        
          <View style={styles.dates}>
            <Text style={[GlobalStyle.textBold, {fontSize:moderateScale(45,0.25)}]}>{hourNow}</Text>
            <Text style={[GlobalStyle.textBold, {fontSize:moderateScale(11,0.25)}]}>{dateNow}</Text>
          </View>  

        <Image
          source={require('../../../../assets/bottomImage.png')}
          style={styles.imgBottom}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:"#fedc05",
    height:'32%',
    paddingTop:moderateScale(10,0.25),
    borderBottomRightRadius:moderateScale(25,0.25),
    borderBottomLeftRadius:moderateScale(25,0.25),
    flexDirection:'column'
  },
  footer: {
    flexDirection:'row',
    justifyContent:'space-around',
    height:moderateScale(50,0.25),
    // backgroundColor:'red'
  },
  imgBottom: {
    width:'100%',
    height:moderateScale(50,0.25),
    position:'absolute',
    bottom:0,
    borderBottomLeftRadius:moderateScale(25,0.25),
    borderBottomRightRadius:moderateScale(25,0.25),
  },
  profile: {
    height:moderateScale(50),
    width:moderateScale(50),
    borderRadius:moderateScale(50/2)
  },
  dates: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:moderateScale(26,0.25),
    alignSelf:'center'
  }

})

export default CardHolder