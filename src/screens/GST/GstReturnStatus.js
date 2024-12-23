import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Remarkicon from 'react-native-vector-icons/dist/SimpleLineIcons';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { gstData } from '../../demoData/deshboardPage/DashboardDemoPage';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get('window')
const GstReturnStatus = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const [getalldata, setgetalldata] = useState(gstData);
    const navigation = useNavigation();
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
                            <Text style={{ color: '#000', fontSize: responsiveFontSize(1.85) }}>GST Return Status</Text>
                        </View>
                    </View>

                </View>
            </View>
                <FlatList
                data={getalldata}
                renderItem={({ item }) => (
                    <View style={{ marginHorizontal: responsiveWidth(3), marginTop: 5 }}>
                        <View style={{

                            paddingHorizontal: responsiveWidth(2.35),
                            width: "100%",
                            paddingVertical: responsiveHeight(1),
                            borderRadius: 15,
                            backgroundColor: "#e6e6e966",
                            borderColor: "#ffc516",
                            // borderWidth:1
                            borderWidth: 0.8

                        }}>

                            <View style={{
                                borderBottomWidth: 0.65,
                                paddingBottom: 5,
                                borderBottomColor: "#000",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.80), fontWeight: 500 }}>{item.name}</Text>
                                </View>
                                <TouchableOpacity style={{
                                    backgroundColor: "#aecf80",
                                    paddingHorizontal: 17,
                                    borderRadius: 15,
                                    paddingVertical: 4,
                                    justifyContent: "center"
                                }}>
                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.60) }}>{item.status}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ paddingTop: 6 }}>
                                <View style={{}}>
                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.78) }}>GSTIN : {item.gst}</Text>
                                </View>
                                <View style={{ paddingTop: 6 }}>
                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.78) }}>Return Pending for : {item.date}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", paddingTop: 7 }}>
                                <View style={{ paddingTop: 3 }}>
                                    <Remarkicon
                                        style={{ fontSize: responsiveFontSize(1.78), color: "#f1ce48", paddingLeft: 3 }}
                                        name="note" />
                                </View>
                                <View style={{ width: "95%", paddingLeft: 3 }}>
                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.78) }}>{item.msg}</Text>
                                </View>

                            </View>

                            <TouchableOpacity style={{ backgroundColor: "#f1ce48", borderRadius: 20, alignItems: "center", paddingVertical: 6, marginTop: 10, marginHorizontal: 10 }}>
                                <Text style={{ alignItems: "center", color: "#000", fontSize: responsiveFontSize(1.85) }}>PAY YOUR GST FEES</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                )} />
        </View>
    )
}

export default GstReturnStatus

const styles = StyleSheet.create({})