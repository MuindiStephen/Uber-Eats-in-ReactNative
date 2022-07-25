import { View, Text} from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'


export default function HeaderTabs(props) {

    const [activeTab, setActiveTab] = useState("Delivery");  //default value
      return (
    <View style={{flexDirection:'row', paddingTop:30, alignSelf: 'center'}}>
      <Text></Text>
      <Text></Text>
      <HeaderButton text="Delivery" 
        btnColor="black" 
        textColor="white"
        activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      <HeaderButton text="Pickup" 
        btnColor="white" 
        textColor="black" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />

    </View>
  );
}

const HeaderButton = (props) => (
        <TouchableOpacity style={{
            backgroundColor:props.activeTab === props.text ? "black" : "white", 
            paddingHorizontal:16,
            paddingVertical:6,
            borderRadius:30,
     }}
     onPress={() =>props.setActiveTab(props.text)}>
            <Text style={{
                color:props.activeTab === props.text ? "white" : "black",
                fontSize:30, 
                fontWeight:"900"}}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
);

