import moment from 'moment';
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


export class Time extends Component {
 constructor(props){
     super(props)
     this.date=props.time;
 }

    render() {
        const time= moment(this.date || moment.now()).fromNow()
        return (
        <Text note style={{marginTop:10}}>{time}</Text>
        )
    }
}

export default Time


const styles = StyleSheet.create({})
