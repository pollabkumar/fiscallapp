import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Remarkicon from 'react-native-vector-icons/dist/SimpleLineIcons';
const { width, height } = Dimensions.get('window')
import { ViewData } from '../../demoData/deshboardPage/DashboardDemoPage'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const ViewPage = () => {
    const navigation = useNavigation();
    const [statusBarStyle, setStatusBarStyle] = useState();
    const [allgetdata, setallgetdata] = useState(ViewData);
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
                    style={{ justifyContent: "center",paddingLeft: responsiveWidth(1) ,marginTop:2}}>
                        <TouchableOpacity
                             style={{backgroundColor:"#fff",height:22,width:22,borderRadius:20,justifyContent:"center",textAlign: "center"}}
                            onPress={() => navigation.goBack()}>
                            <Icon2
                                name="ios-arrow-back-outline"
                                style={{ fontSize: width / 22, color: "#4e8ef9", textAlign: "center",justifyContent:"center"  }}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <View style={{ justifyContent: "center", paddingLeft: responsiveWidth(2)}}>
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
                <View style={{ justifyContent: "center", paddingTop: 5 }}>
                    <View style={{}}>
                        <Text style={{ color: "#fff", fontSize: width / 25, }}>Rupam</Text>

                    </View>
                    <Text style={{ color: "#fff", fontSize: width / 35, }}>Member</Text>
                </View>


            </View>

            <FlatList
                data={allgetdata}
                renderItem={({ item }) => (
                    <View style={{ marginHorizontal: 12, marginTop: 5 }}>
                        <View style={{

                            paddingHorizontal: 8,
                            width: "100%",
                            paddingVertical: 10,
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
                                    <Text style={{ color: "#000", fontSize: width / 25, fontWeight: 500 }}>Job ID:{item.jobid}</Text>
                                </View>
                                <TouchableOpacity style={{
                                    backgroundColor: "#aecf80",
                                    paddingHorizontal: 17,
                                    borderRadius: 15,
                                    paddingVertical: 4,
                                    justifyContent: "center"
                                }}>
                                    <Text style={{ color: "#000", fontSize: width / 31 }}>{item.status1}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ paddingTop: 8 }}>
                                <View style={{}}>
                                    <Text style={{ color: "#000",fontSize: responsiveFontSize(1.77) }}>{item.deatils}</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: "row", paddingTop: 7, borderBottomWidth: 0.65, paddingBottom: 5, }}>
                                <View style={{ paddingTop: 3 }}>
                                    <Remarkicon
                                        style={{ fontSize: 16, color: "#ffc516", paddingLeft: 3 }}
                                        name="note" />
                                </View>
                                <View style={{ width: "95%", paddingLeft: 3 }}>
                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.77) }}>{item.msg}</Text>
                                </View>

                            </View>

                            <View style={{ paddingTop: 5, paddingLeft: 5 }}>
                                <Text style={{ color: "#000" }}>{item.date}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default ViewPage

const styles = StyleSheet.create({})
