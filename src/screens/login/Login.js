import { StyleSheet, Image, View, TextInput, Text, ScrollView, TouchableOpacity,StatusBar,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import SplashScreen from '../../navigation/SplashScreen';
const { width, height } = Dimensions.get('window')

console.log(height, 'width')
const Login = () => {
  const [statusBarStyle, setStatusBarStyle] = useState();
  const [data, setdata] = useState(true);
  const navigation = useNavigation();

  // useEffect(()=>{
  //   setTimeout(()=>{
  //       <SplashScreen/>    
  //   },2000)
  // })
  return (
    // <View style={{ flex: 1 }}>
    //   <StatusBar
    //     animated={true}
    //     backgroundColor="#5991ce"
    //     barStyle={statusBarStyle}
    //   />

    //   <ScrollView >
    //     <View style={{}}>
    //       <Image
    //         source={require('../../assets/loginpage.jpg')}
    //         style={{ height:400,width: "100%", borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}
    //       // resizeMode="center"
    //       />
    //     </View>


    //     <View style={{ marginHorizontal: 10, paddingTop: 10, margin: 5 }}>
    //       <View style={{ marginTop: 20 }}>
    //         <Text style={{ color: 'black', fontSize :width / 26, fontWeight: '500' }}>
    //           Enter Phone Number
    //         </Text>
    //       </View>
    //       <View style={{
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         borderBottomWidth: 0.29,
    //         borderBottomColor: '#000',
    //         paddingTop: 10,
    //         paddingLeft: 5
    //       }}>
    //         <View style={{}}>
    //           <Icon1
    //             name="mobile-phone"
    //             style={{
    //               color: 'black',
    //               fontSize :width / 18,
    //             }}
    //           />
    //         </View>
    //         <View style={{width:"100%"}}>
    //           <TextInput
    //             placeholder='Phone Number'
    //             placeholderTextColor="#000"
    //             maxLength={10}
    //             keyboardType="numeric"
    //             style={{
    //               padding: 5,
    //               fontSize :width / 27,
    //               color: '#000',
    //               fontWeight: '300',
    //               paddingLeft: 8,
    //               // backgroundColor:"red",
    //               // width: 250,
    //             }}
    //           />
    //         </View>
    //       </View>
    //     </View>



    //     <View style={{ marginHorizontal: 10 }}>
    //       <View style={{ marginTop: 20 }}>
    //         <Text style={{ color: 'black', fontSize :width / 26 , fontWeight: '500' }}>
    //           Enter Your Password
    //         </Text>
    //       </View>
    //       <View style={{
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         borderBottomWidth: 0.29,
    //         borderBottomColor: '#000',
    //         paddingTop: 10,
    //         paddingLeft: 5
    //       }}>
            
    //         <View style={{}}>
    //           <Icon2
    //             name="locked"
    //             style={{
    //               color: 'black',
    //               fontSize :width / 25,
    //             }}
    //           />
    //         </View>

    //         <View style={{ width:"80%"}}>
    //           <TextInput
    //             placeholder='password'
    //             placeholderTextColor="#000"
    //             secureTextEntry={data}
    //             style={{
    //               padding: 5,
                 
    //               fontSize :width / 27,
    //               color: '#000',
    //               fontWeight: '300',
    //               paddingLeft: 8,
    //               // backgroundColor:"red",
    //               // width: 250,
    //             }}
    //           />
    //         </View>



    //         <View style={{ position: 'absolute', right: 5,top:25}}>
    //           <Icon
    //             name={data ? 'eye' : 'eye-off'}
    //             onPress={() => setdata(!data)}
    //             style={{
    //               color: 'black',
    //               fontSize: 13,
    //               //  backgroundColor:"red",
    //               width: 30,
    //               height: 30,
    //               alignItems: 'center',
    //               justifyContent: 'center',
               
    //             }}
    //           />
    //         </View>


    //       </View>
    //     </View>


    //     <View style={{ marginTop: 20, marginHorizontal: 10, }}>
    //       <TouchableOpacity 
    //       onPress={()=>navigation.navigate("Dashboard")}
    //       style={{
    //         backgroundColor: "#4e8ef9",
    //         padding: 10,
    //         alignItems: "center",
    //         borderRadius: 20,
    //         marginTop: 20
    //       }}>
    //         <Text style={{ color: "#000", fontSize :width / 26 }}>Sign In </Text>
    //       </TouchableOpacity>
    //       <View style={{flexDirection:"row"}}>
    //         <View>
    //         <Text style={{ color: "#000", fontSize :width / 35, paddingLeft: 10, paddingTop: 5 }}>Dont have an account? </Text>
    //         </View>
    //        <TouchableOpacity style={{justifyContent:"center",paddingTop:5}}>
    //         <Text style={{color: "#4e8ef9", fontSize :width / 35 , alignItems:"center",justifyContent:"center" }}> Sign In</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>

    //   </ScrollView>
    // </View>
    <View style={{ flex: 1 }}>
    <StatusBar
      animated={true}
      backgroundColor="#5991ce"
      barStyle={statusBarStyle}
    />

    <ScrollView >
      <View style={{}}>
        <Image
          source={require('../../assets/loginpage.jpg')}
          style={{ height:verticalScale(395),width: "100%", borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }}
        resizeMode="center"
        />
      </View>


      <View style={{ marginHorizontal: 15, paddingTop: 10, margin: 5 }}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'black', fontSize :scale(13), fontWeight: '500' }}>
            Enter Phone Number
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.29,
          borderBottomColor: '#000',
          paddingTop: 10,
          paddingLeft: 5
        }}>
          <View style={{}}>
            <Icon1
              name="mobile-phone"
              style={{
                color: 'black',
                fontSize :scale(19),
              }}
            />
          </View>
          <View style={{width:"100%"}}>
            <TextInput
              placeholder='Phone Number'
              placeholderTextColor="#000"
              maxLength={10}
              keyboardType="numeric"
              style={{
                padding: 5,
                fontSize :scale(12),
                color: '#000',
                fontWeight: '300',
                paddingLeft: 8,
                // backgroundColor:"red",
                // width: 250,
              }}
            />
          </View>
        </View>
      </View>



      <View style={{ marginHorizontal: 15 }}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'black', fontSize :scale(13) , fontWeight: '500' }}>
            Enter Your Password
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.29,
          borderBottomColor: '#000',
          paddingTop: 10,
          paddingLeft: 5
        }}>
          
          <View style={{}}>
            <Icon2
              name="locked"
              style={{
                color: 'black',
                fontSize :scale(13),
              }}
            />
          </View>

          <View style={{ width:"80%"}}>
            <TextInput
              placeholder='password'
              placeholderTextColor="#000"
              secureTextEntry={data}
              style={{
                padding: 5,
               
                fontSize :scale(12),
                color: '#000',
                fontWeight: '300',
                paddingLeft: 8,
                // backgroundColor:"red",
                // width: 250,
              }}
            />
          </View>



          <View style={{ position: 'absolute', right: 5,top:25}}>
            <Icon
              name={data ? 'eye' : 'eye-off'}
              onPress={() => setdata(!data)}
              style={{
                color: 'black',
                fontSize: 13,
                //  backgroundColor:"red",
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
             
              }}
            />
          </View>


        </View>
      </View>


      <View style={{ marginTop: 20, marginHorizontal: 10,marginBottom:10 }}>
      <View style={{flexDirection:"row",marginTop:15}}>
          <View>
          <Text style={{ color: "#000", fontSize :width / 35, paddingLeft: 10, paddingTop: 5 }}>Dont have an account? </Text>
          </View>
         <TouchableOpacity style={{justifyContent:"center",paddingTop:5}}>
          <Text style={{color: "#4e8ef9", fontSize :width / 35 , alignItems:"center",justifyContent:"center" }}> Sign In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("Dashboard")}
        style={{
          backgroundColor: "#4e8ef9",
          padding: scale(10),
          alignItems: "center",
          borderRadius: 20,
          marginTop: 5
        }}>
          <Text style={{ color: "#000", fontSize :scale(14) }}>Sign In </Text>
        </TouchableOpacity>
        {/* <View style={{flexDirection:"row"}}>
          <View>
          <Text style={{ color: "#000", fontSize :width / 35, paddingLeft: 10, paddingTop: 5 }}>Dont have an account? </Text>
          </View>
         <TouchableOpacity style={{justifyContent:"center",paddingTop:5}}>
          <Text style={{color: "#4e8ef9", fontSize :width / 35 , alignItems:"center",justifyContent:"center" }}> Sign In</Text>
          </TouchableOpacity>
        </View> */}
      </View>

    </ScrollView>
  </View>
  )
}

export default Login

const styles = StyleSheet.create({})