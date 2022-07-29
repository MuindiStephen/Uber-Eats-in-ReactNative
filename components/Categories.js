import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

// // items , key and value
const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View style={{backgroundColor:'white', margin:5, borderRadius:10, paddingBottom:5, alignItems:'center'}}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:30, marginLeft:20, marginRight:5}}>
        <View style={{paddingRight:10, alignItems:'center'}}>
          <Image source={items[0].image} style={{width:50, height:40, resizeMode:'contain'}}/> 
          <Text style={{fontSize:14, fontWeight:'900'}}>{items[0].text}</Text>
        </View>
        <View style={{paddingLeft:10}}>
          <Image source={items[1].image} style={{width:50, height:40, resizeMode:'contain'}}/>
          <Text style={{fontSize:14, fontWeight:'900'}}>Soft Drinks</Text>
        </View>
        <View style={{paddingLeft:10}}>
          <Image source={items[2].image} style={{width:50, height:40, resizeMode:'contain'}}/>
          <Text style={{fontSize:14, fontWeight:'900'}}>Bakery Items</Text>
        </View>
        <View style={{paddingLeft:10}}>
          <Image source={items[3].image} style={{width:50, height:40, resizeMode:'contain'}}/>
          <Text style={{fontSize:14, fontWeight:'900'}}>Fast Foods</Text>
        </View>
        
      </ScrollView>
    </View>
  
  )
}