import { SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { View } from 'react-native'
import Searchbar from '../components/Searchbar'
import Categories from '../components/Categories'
import RestaurantItems from '../components/RestaurantItems'
import BottomTab from '../components/BottomTab'
import { localRestaurants } from '../components/RestaurantItems'

//Yelp api key for the app
//https://www.yelp.com/developers/v3/manage_app_access
const YELP_API_KEY = 'bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx';

export default function Home() {
  
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  //This function is used to get the data from the Yelp API
  const GetRestaurantsFromYelp = () => {

    //YELP fusion API url
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Nairobi`; //right from City

    const apiOptions = { 
      // setting http header value as BEARER API
      headers: {
        //To authenticate or authorize API calls with the API Key, //ensure there's communication
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses
        )
      );
  };

  //hooks
  useEffect(() => {
    GetRestaurantsFromYelp();
  },[]);

  return (
    <SafeAreaView style={{backgroundColor:'#eee', flex:1}}>
      <View style={{backgroundColor:'white', padding:15}}>
      <HeaderTabs/>
      <Searchbar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Categories/>
          <RestaurantItems localRestaurants={localRestaurants} />
      </ScrollView>
      {/* <Divider width={1} /> */}
      <BottomTab/>

    </SafeAreaView>
  )
}

