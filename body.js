import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function Body() {
  return (
    <View style={bodyStyle.BodyContainer}>

      <View style={bodyStyle.box}>
        <View style={bodyStyle.inner}>
        <Text>BOX1</Text>
        </View>
      </View>
      <View style={bodyStyle.box}>
        <View style={bodyStyle.inner}>
        <Text>BOX1</Text>
        </View>
      </View>
      <View style={bodyStyle.box}>
        <View style={bodyStyle.inner}>
        <Text>BOX1</Text>
        </View>
      </View>
      <View style={bodyStyle.box}>
        <View style={bodyStyle.inner}>
        <Text>BOX1</Text>
        </View>
      </View>
     
    </View>
  )
}

const bodyStyle = StyleSheet.create({

    BodyContainer:{
        width: '100%',
        height: '85%',
       // padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box:{
        width: '50%',
        height: '40%',
        padding: 5,
    },
    inner:{
        flex: 1,
        backgroundColor: '#FDA769',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }

})