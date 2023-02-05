import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={headerStyle.header}>
     <View >
     <Text style={headerStyle.circle}>Header</Text>
     </View>
    </View>
  )
}

const headerStyle = StyleSheet.create({
    header:{
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#658864'
    },
    circle:{
        border: 2,
        borderColor: '#FDA769',
        width: 50,
        height: 30,
        borderRadius: 50,
    }

})