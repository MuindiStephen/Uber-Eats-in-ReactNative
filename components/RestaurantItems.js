import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons} from '@expo/vector-icons';


export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
    {
      name: "Serenade",
      image_url:
        "https://media-cdn.tripadvisor.com/media/photo-s/1d/f5/78/04/serenade-restaurant-bar.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Elia Lounge",
      image_url:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2cJJ66J5o79gPt-i6tiq8sUqp9rWgwvlngNmov8vxPd2tpxVfLqvOSvkBjyS7EqAj7I&usqp=CAU",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    
  ];
  

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
      {localRestaurants.map((restaurant, index) => (
    <View key={index} 
      style={{padding:15, backgroundColor:'white', marginBottom:10}}>
          <RestaurantImage image={restaurant.image_url}/>
          <RestaurantInfo name={restaurant.name}
                          rating={restaurant.rating}/>
      </View>
      ))}

    </TouchableOpacity>
  )
}

const RestaurantImage = (props) => (
<View>
  <Image source={{uri: props.image}} style={{ alignSelf: 'center',
    borderRadius:10, width:'100%', height:180}}/>
    <TouchableOpacity style={{position:'absolute', right:20, top:5}}>
      <MaterialCommunityIcons name="heart-outline" size={30} color="white" style={{alignSelf:'center', marginTop:10,}}
      />
      </TouchableOpacity>
</View> 

);

const RestaurantInfo = (props) => (
  <View>
    <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:10,
     marginRight:10}}>
      <Text style={{fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{fontSize:14}}>30-45 • min</Text>
      <Text style={{fontWeight:'800',backgroundColor:'gray', borderRadius:30}}>{props.rating}</Text>
    </View>
    <View>
    </View>
  </View>
)