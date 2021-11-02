import React, { Component } from 'react'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, ActivityIndicator,LogBox } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import GlobalStyle from '../../components/GlobalStyle'
import Screen from '../../components/Screen'
import ScheduleCard from './components/ScheduleCard'
import _ from 'lodash'
import axios from 'axios';
import StaticHeader from '../../components/StaticHeader'
import moment from 'moment';

const dummy = [
  {
    "createdAt": "2021-11-01T10:01:29.394Z",
    "place": "Mediterania Apartement",
    "desc": "725 Cruickshank Keys",
    "startTime": 1635833898,
    "endTime": 1635833898,
    "date": 1635833898,
    "id": "1",
    "imageUrl": 'https://technobusiness.id/wp-content/uploads/2021/04/Flash-Coffee.jpg'
  },
    {
    "offDay" : true,
    "createdAt": "2021-11-01T06:15:09.302Z",
    "date": 1635833898,
    "id": "2"
  },
]

const LoadingHolder = () => {
  var myloop = [];
  for (let i = 0; i < 10; i++) {
    myloop.push(
      <View style={[styles.loadingHolder, {marginTop:moderateScale(10,0.25)}]}>
          <ActivityIndicator
            size={'large'}
            color={'#fedc05'}
            style={{justifyContent:'center', alignSelf:'center'}}
          />  
        </View> 
    );
  }
  return(
    <View style={{flexDirection:'column', marginTop:moderateScale(5,0.25)}}>
      {myloop}    
    </View>
  )
}

class ScheduleScreen extends Component {

  constructor(props) {
    super(props)
    this.state={
      data:'',
      isLoading:true
    }
  }

componentDidMount() {
  this.getDataLocation()
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}

getDataLocation(){
  let getLocation = 'https://618011c58bfae60017adf97d.mockapi.io/attendances/attendance'
    axios.get(getLocation)
      .then(res => {
        console.log("[HomeScreen] getDataLocation res", res)
        let data = res.data
        let dataConcat = dummy.concat(data)
        this.setState({
          data: dataConcat,
          isLoading:false
        })
      })
      .catch(err => {
        console.log("[HomeScreen] getDataLocation res", err)
        setTimeout(() => {
            Alert.alert("something wrong")
        }, 900);
      })
}

  render() {
    let data = _.get(this.state,"data", '')
    console.log("datakuh", data)
    let dateNow = moment().unix('x')
    let date = _.get(this.state.data[1],'date', '1635784535' )
    let month = moment(date).format('MMM YYYY').toUpperCase()
    return (
      <Screen
      trasparentHeader={false}
      >
      <StaticHeader
        title={"UPCOMING SCHEDULE"}
        iconRight={true}
        navigation={this.props.navigation}
      />
        <SafeAreaView style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={{paddingVertical:moderateScale(16,0.25)}}>
              <Text style={GlobalStyle.styles.textBold}> {month} </Text>
            </View>
            
            <View>
              {
                this.state.isLoading === true ?
                <LoadingHolder/>
             :
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) => {
                  return(
                    <ScheduleCard
                    item={item}
                    navigation={this.props.navigation}
                  />
                  )}
                }
                style={{marginBottom:moderateScale(50,0.25)}}
                keyExtractor={(item, index) => String(item + index)}
              />
              }
            </View>
          </ScrollView>
        </SafeAreaView>
      </Screen> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding:moderateScale(10,0.25)
  },
  loadingHolder: {
    justifyContent:'center',
    backgroundColor:'#f4f4f4',
    borderRadius:moderateScale(8,0.25), 
    height:moderateScale(70), 
    width:'100%', 
    alignItems:'center'
  }
})
export default ScheduleScreen