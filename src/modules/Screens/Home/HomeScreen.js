import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Screen from '../../components/Screen'
import CardHolder from './Components/CardHolder'
import ScheduleBox from  './Components/ScheduleBox'
import Schedule from './Components/Schedule'
import ButtonAttendance from './Components/ButtonAttendance'
import axios from 'axios';
import _ from 'lodash'

 class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state={
      data:[],

    }
  }

  componentDidMount() {
      this.getDataLocation()
  }

  // should use serviceUtils 
  getDataLocation(){
    let getLocation = 'https://618011c58bfae60017adf97d.mockapi.io/attendances/attendance'
      axios.get(getLocation)
        .then(res => {
          console.log("[HomeScreen] getDataLocation res", res)
          this.setState({
            data:res.data
          })
        })
        .catch(err => {
          console.log("[HomeScreen] getDataLocation res", err)
        })
  }

  render() {
      let data = _.get(this.state,'data', '')
      console.log("apa ini", data)
    return (
      <Screen
        trasparentHeader={false}
      >
        <CardHolder
          data= {data}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Schedule
            data={data}
            navigation={this.props.navigation}
          />
          <ScheduleBox
            data={data}
            navigation={this.props.navigation}
          />
          <ButtonAttendance
            navigation={this.props.navigation}
          />
        </ScrollView>
      </Screen>
    )
  }
}

export default HomeScreen