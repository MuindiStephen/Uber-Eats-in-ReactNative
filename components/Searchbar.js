import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Searchbar() {
  return (
    <View style={{flexDirection:'row'}}>
        <GooglePlacesAutocomplete
        placeholder='Search'
        styles={{
            textInput:{
                marginTop:10,
                borderRadius:20,
                backgroundColor:'#eee',
                fontWeight:'700'
            },
            textInputContainer:{
               flexDirection:'row',
               backgroundColor: '#eee',
               alignItems:'center',
               borderRadius:50,
               marginTop:10
            },
        }}
        
        renderLeftButton ={() => <View style={{marginLeft:10}}>
            <Ionicons name='location-sharp' size={24}/>
        </View>}
        
        renderRightButton = {() =>
        <View style={{flexDirection:'row',
        alignItems:'center',
        marginRight:10,
        backgroundColor:'white',
        borderRadius:35,
        padding:9,
        }}>
          <AntDesign name='clockcircle' size={24} style={{marginRight:10}}/>
              <Text>Search</Text>
        </View>}/>
    </View>
  )
}