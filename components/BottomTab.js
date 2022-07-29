import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



export default function BottomTab() {
  return (
    <View style={
      {
        flexDirection: 'row',
        margin:7,
        paddingRight:10,
        justifyContent: 'space-between',
        marginHorizontal:20,
        
      }
    }>
    
    <Icon icon="home" text="Home"/>
    <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
  
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={props.icon} size={25} style={{
        marginBottom:2,
        alignSelf:'center',
        color:'#a83e08'
      }}/>
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
  );