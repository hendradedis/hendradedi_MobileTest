import React, { Component } from 'react'
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View, ActivityIndicator, LogBox } from 'react-native'
import _ from 'lodash'
import GlobalStyle from '../../../components/GlobalStyle'
import { moderateScale } from 'react-native-size-matters'
import CardSchedule from './CardSchedule'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios';

const dummy = [
  {
    "createdAt": "2021-11-01T10:01:29.394Z",
    "place": "Waelchi Ridge",
    "desc": "725 Cruickshank Keys",
    "startTime": 1635784585,
    "endaTime": 1635784585,
    "date": 1635784585,
    "id": "1"
  },
    {
    "createdAt": "2021-11-01T06:15:09.302Z",
    "place": "Mathias Extensions",
    "desc": "74650 Chyna Drives",
    "startTime": 1635784525,
    "endaTime": 1635784525,
    "date": 1635784525,
    "id": "2"
  },
]

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

    <View style={[styles.loadingHolder, {marginLeft:moderateScale(10,0.25)}]}>
        <ActivityIndicator
          size={'large'}
          color={'#fedc05'}
          style={{justifyContent:'center', alignSelf:'center'}}
        />  
      </View>  
    </View>
      
  )
}


class ScheduleBox extends Component {

  constructor(props) {
    super(props)
    this.state={
      data:null,
      isLoading:true
    }
  }

  componentDidMount() {
    this.getDataLocation()
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}

// should use serviceUtils 
getDataLocation(){
  let getLocation = 'https://618011c58bfae60017adf97d.mockapi.io/attendances/attendance'
    axios.get(getLocation)
      .then(res => {
        console.log("[HomeScreen] getDataLocation res", res)
        this.setState({
          data:res.data,
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

  handlePress =() => {
    this.props.navigation.navigate("Schedule");
  }

  render() {
    let title = _.get(this.props,'title', 'NEXT SCHEDULES' )
    let data = _.get(this.state,"data", '')
    console.log("dataku", data)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={[GlobalStyle.styles.textBold]}> {title} </Text>

            <TouchableOpacity onPress={() => this.handlePress()}>
              <Text style={[GlobalStyle.styles.textNormalRed, {fontSize:moderateScale(15, 0.25), marginRight:moderateScale(14,0.25)}]}> See all </Text>
            </TouchableOpacity> 

        </View>
          {
            this.state.isLoading === true ?
              <LoadingHolder/>
           :
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item}) => {
                return(
                  <CardSchedule
                    item={item}
                  /> 
                )}
              }
              keyExtractor={(item, index) => String(item + index)} 
            />
          }
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    marginLeft:moderateScale(14,0.25),
    marginTop:moderateScale(25,0.25)
  },
  title: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  loadingHolder: {
    justifyContent:'center',
    backgroundColor:'#f4f4f4',
    borderRadius:moderateScale(8,0.25), 
    height:moderateScale(140), 
    width:moderateScale(280), 
    alignItems:'center'
  }
})

export default ScheduleBox