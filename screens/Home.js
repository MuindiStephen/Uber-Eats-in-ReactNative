import { SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { View } from 'react-native'
import Searchbar from '../components/Searchbar'
import Categories from '../components/Categories'



export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor:'#eee', flex:1}}>
      <View style={{backgroundColor:'white', padding:15}}>
      <HeaderTabs/>
      <Searchbar/>
      </View>
      <Categories/>
    </SafeAreaView>
  )
}

