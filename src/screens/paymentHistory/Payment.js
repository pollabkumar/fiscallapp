import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get('window')

const Payment = () => {
    const navigation = useNavigation();
    const [statusBarStyle, setStatusBarStyle] = useState();
  return (
    <View style={{flex:1}}> 
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
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: "center", paddingLeft: responsiveWidth(1), marginTop: 2 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: "#fff", height: 22, width: 22, borderRadius: 20, justifyContent: "center", textAlign: "center" }}
                            onPress={() => navigation.goBack()}>
                            <Icon2
                                name="ios-arrow-back-outline"
                                style={{ fontSize: width / 22, color: "#4e8ef9", textAlign: "center", justifyContent: "center" }}
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
                            <Text style={{ color: '#000', fontSize: responsiveFontSize(1.85) }}>Payment History</Text>
                        </View>
                    </View>

                </View>
          </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})