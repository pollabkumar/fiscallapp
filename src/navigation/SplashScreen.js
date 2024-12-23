import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
   TouchableOpacity
  } from 'react-native';
import React, { useEffect, useState } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
    const navigation = useNavigation();
    const [statusBarStyle, setStatusBarStyle] = useState();

    useEffect(()=>{
      setTimeout(()=>{
       navigation.navigate("Login")    
      },2000)
    })
  return (
    <View style={{flex:1}}>
     
      {/* <StatusBar  backgroundColor="transparent" /> */}
      {/* <StatusBar
                animated={true}
                backgroundColor="#207acf"
                barStyle={statusBarStyle}
            /> */}
             {/* <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/> */}

      <View>
        <Image 
        style={{width:'100%', height: '100%'}}
        source={require('../assets/picture/l.jpg')}/>
      </View>
      <View style={{position:"absolute",
          height:"100%",
          width:"100%",
          alignItems:"center",
          justifyContent:"center"}}>
      <TouchableOpacity
       onPress={()=>navigation.navigate("Login")}
      style={{
        // backgroundColor:"#1d3f5d",
        backgroundColor:"#1d3f5d",
        paddingVertical:10,
        paddingHorizontal:19,
        borderRadius:30,
        borderBottomWidth:2,
        borderBottomColor:"#ffd500",  
      }}>
        <Image 
        style={{width:responsiveWidth(55),height:responsiveHeight(4),}}
        source={require("../assets/picture/connect-logo.png")}/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})