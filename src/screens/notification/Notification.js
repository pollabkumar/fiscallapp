import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Notificationnn from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { nottification } from '../../demoData/Notification/notification';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get('window')

const Notification = () => {
  const navigation = useNavigation();
  const [statusBarStyle, setStatusBarStyle] = useState();
  const [allnotifiction, setallnotifiction] = useState(nottification);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#4e8ef9"
        barStyle={statusBarStyle}
      />

      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#4e8ef9',
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10

        }}>
        <View style={{ flexDirection: 'row', }}>

          {/* <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}>
              <Icon2
                name="ios-arrow-back-outline"
                style={{ fontSize: width / 18, color: "#fff", textAlign: "center", height: 40, width: 30, paddingTop: 10 }}
              />
            </TouchableOpacity>
          </View> */}
            <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={{ justifyContent: "center",paddingLeft: responsiveWidth(1),marginTop:2,}}>
                        <TouchableOpacity
                             style={{backgroundColor:"#fff",height:22,width:22,borderRadius:20,justifyContent:"center",textAlign: "center"}}
                            onPress={() => navigation.goBack()}>
                            <Icon2
                                name="ios-arrow-back-outline"
                                style={{ fontSize: width / 22, color: "#4e8ef9", textAlign: "center",justifyContent:"center"  }}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
          <View style={{ justifyContent: "center", paddingLeft: responsiveWidth(2) }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                color: '#fff',
                fontWeight: '400',
                fontWeight: '400',
                alignItems: "center"
              }}>
              Fiscale
            </Text>
          </View>
        </View>


        <View style={{ justifyContent: "center", paddingTop: 5, paddingRight: responsiveWidth(0.085) }}>
          <View style={{}}>
            <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.95), }}>Rupam</Text>

          </View>
          <Text style={{ color: "#fff", fontSize: responsiveFontSize(1.29) }}>Member</Text>
        </View>

      </View>


      <View style={{ marginHorizontal: 11, marginTop: 5 }}>
        <View
          style={{
            backgroundColor: '#e0e0e0',
            flexDirection: 'row',
            width: '100%',
            borderColor: 'grey',
            padding: 7,
            paddingHorizontal: 6,
            borderRadius: 11,
            alignItems: 'center',
            justifyContent: "space-between"
          }}>
          <View View style={{ flexDirection: 'row', }}>
            <View style={{ justifyContent: "center" }}>
              <Icon
                style={{ color: '#000', fontSize: responsiveFontSize(1.85) }}
                name="format-list-checkbox"
              />
            </View>
            <View style={{ marginHorizontal: 3, justifyContent: "center" }}>
              <Text style={{ color: '#000', fontSize: responsiveFontSize(1.85) }}>Notifications</Text>
            </View>
          </View>

        </View>
      </View>

      {/* <View style={{ marginHorizontal: 9, paddingTop: 6 }}>

        <View style={{ backgroundColor: "#e0e0e0", borderRadius: 15, flexDirection: "row", paddingVertical: 5, paddingHorizontal: 7 }}>
          <View style={{ backgroundColor: "#fff", width: 25, height: 25, justifyContent: "center", borderRadius: 15 }}>
            <Notificationnn
              name="notifications-circle-outline"
              style={{ fontSize: width / 17, color: "#f1ce48", textAlign: "center", }}
            />
          </View>
          <View style={{ paddingLeft: 5, justifyContent: "center", }}>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.85) }}>ITR last date 31.07.2023</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#e0e0e0", borderRadius: 15, flexDirection: "row", paddingVertical: 5, paddingHorizontal: 7, marginTop: 5 }}>
          <View style={{ backgroundColor: "#fff", width: 25, height: 25, justifyContent: "center", borderRadius: 15 }}>
            <Notificationnn
              name="notifications-circle-outline"
              style={{ fontSize: width / 17, color: "#f1ce48", textAlign: "center", }}
            />
          </View>
          <View style={{ paddingLeft: 5, justifyContent: "center", }}>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.85) }}>Close all Pending jobs by weekend</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#e0e0e0", borderRadius: 15, flexDirection: "row", paddingVertical: 5, paddingHorizontal: 7, marginTop: 5 }}>
          <View style={{ backgroundColor: "#fff", width: 25, height: 25, justifyContent: "center", borderRadius: 15 }}>
            <Notificationnn
              name="notifications-circle-outline"
              style={{ fontSize: width / 17, color: "#f1ce48", textAlign: "center", }}
            />
          </View>
          <View style={{ paddingLeft: 5, justifyContent: "center", }}>
            <Text style={{ color: "#000", fontSize: responsiveFontSize(1.85), }}>Close all Pending jobs by weekend</Text>
          </View>
        </View>

      </View> */}


     
            <FlatList
            data={allnotifiction} 
            // style={{marginBottom:10}} 
            renderItem={({item})=>(  
              <View style={{ marginHorizontal: 9, paddingTop: 6 }}>
              <View style={{ backgroundColor: "#e0e0e0",
               borderRadius: 15, 
               flexDirection: "row", 
               paddingVertical: 5, 
               paddingHorizontal: 7,
               
               }}>
                <View style={{ backgroundColor: "#fff", width: 25, height: 25, justifyContent: "center", borderRadius: 15 }}>
                  <Notificationnn
                    name="notifications-circle-outline"
                    style={{ fontSize: width / 17, color: "#f1ce48", textAlign: "center", }}
                  />
                </View>
                <View style={{ paddingLeft: 5, justifyContent: "center", }}>
                  <Text style={{ color: "#000", fontSize: responsiveFontSize(1.85) }}>{item.mssg}</Text>
                </View>
              </View> 
            </View>
            )}/>
             
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})