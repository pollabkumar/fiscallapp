import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import HeaderOnly from '../../Other/Header'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { CardData } from '../../demoData/deshboardPage/DashboardDemoPage'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get('window')
const Dashboard = () => {
    const [statusBarStyle, setStatusBarStyle] = useState();
    const navigation = useNavigation();
    const [carddata, setcarddata] = useState(CardData);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                animated={true}
                backgroundColor="#4e8ef9"
                barStyle={statusBarStyle}
            />

            <HeaderOnly name="Fiscale" />

            <View style={{}}>
                <View style={{
                    backgroundColor: '#e0e0e0',
                    height: responsiveHeight(10),
                    borderBottomLeftRadius: 35,
                    borderBottomRightRadius: 35,
                    borderColor: "#f1ce48",
                    borderWidth: 1,
                    width: "100%"
                }}>
                    <View style={{}}>

                        <View style={{ justifyContent: "center", alignItems: "flex-end", paddingTop: 5, paddingRight: 10, }}>
                            <Text style={{ color: '#4e8ef9', fontSize: responsiveFontSize(1.50), backgroundColor: "#fff", paddingHorizontal: 10, borderRadius: 6 }}> Call us at: 6901945275</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 13 }}>
                        <Text style={{ color: '#4e8ef9', fontSize: responsiveFontSize(2.20), fontWeight: 800 }}> Lets Find jobs opportunity here</Text>
                    </View>
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
                            <Icon2
                                style={{ color: '#000', fontSize: responsiveFontSize(1.85) }}
                                name="format-list-checkbox"
                            />
                        </View>
                        <View style={{ marginHorizontal: 3, justifyContent: "center" }}>
                            <Text style={{ color: '#000', fontSize: responsiveFontSize(1.85) }}>Recent Jobs</Text>
                        </View>
                    </View>

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("RecentJobView")}
                    style={{
                        backgroundColor: "#fff",
                        paddingHorizontal: responsiveWidth(3),
                        borderRadius: 11,
                        paddingVertical: 2
                    }}>
                        <Text style={{ color: "#4e8ef9", fontSize: responsiveFontSize(1.65) }}>View All</Text>
                    </TouchableOpacity>


                </View>
            </View>


           


                <FlatList
                    data={carddata}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: 12, marginTop: 6 }}>
                            <View style={{
                                paddingHorizontal: responsiveWidth(1.85), width: "100%", paddingVertical: responsiveHeight(1), borderRadius: 15,
                                backgroundColor: "#e6e6e966",
                                borderColor: "#ffc516",
                                // borderWidth:1
                                borderWidth: 0.8,

                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    margin: 5,

                                    borderBottomWidth: 0.65,
                                    paddingBottom: 5,
                                    borderBottomColor: "#000"
                                }}>
                                    <View style={{ paddingLeft: 5, }}>
                                        <Text style={{ color: "#000", fontWeight: 500, fontSize: responsiveFontSize(1.77) }}>JOB ID: F240125 </Text>
                                    </View>
                                    <View style={{ backgroundColor: "#aab8c2", paddingHorizontal: 10, borderRadius: 20, paddingVertical: 3 }}>
                                        <Text style={{ color: "#000", fontSize: responsiveFontSize(1.60), fontWeight: 400 }}>Docs Pending</Text>
                                    </View>
                                </View>

                                <View style={{ marginHorizontal: 10 }}>
                                    <Text style={{ color: "#000", fontSize: responsiveFontSize(1.75) }}>Rupam Kumar Sarmah  CCXPS4814D Income Tax Return AY 2023-24</Text>
                                </View>
                                <View style={{ justifyContent: "space-between", flexDirection: "row", marginHorizontal: 7, paddingTop: 15 }}>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("ViewPage")}
                                        style={{
                                            backgroundColor: "#f1ce48",
                                            paddingHorizontal: 17,
                                            borderRadius: 15,
                                            paddingVertical: 4,
                                            justifyContent: "center"

                                        }}>
                                        <Text style={{ color: "#000", alignItems: "center", fontSize: responsiveFontSize(1.65), fontWeight: 500 }}>View</Text>
                                    </TouchableOpacity>

                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ color: "#4e8ef9", justifyContent: "center", fontSize: responsiveFontSize(1.75) }}>Fees due 2000</Text>
                                    </View>
                                    <TouchableOpacity style={{
                                        backgroundColor: "#f1ce48",
                                        paddingHorizontal: 19,
                                        borderRadius: 15,
                                        paddingVertical: 4,
                                        justifyContent: "center"

                                    }}>
                                        <Text style={{ color: "#000", alignItems: "center", fontSize: responsiveFontSize(1.65), fontWeight: 500 }}>Pay</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    )} />

               
                <View style={{ marginHorizontal: 11, paddingTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CompletedJob')}
                        style={{ backgroundColor: '#e0e0e0', paddingVertical: responsiveHeight(1), borderRadius: 15, }}>
                        <Text style={{ color: "#000", paddingLeft: 10, fontSize: responsiveFontSize(1.85), fontWeight: 500 }}>COMPLETED JOBS</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ marginHorizontal: 11, paddingTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notification')}
                        style={{ backgroundColor: '#e0e0e0', paddingVertical: responsiveHeight(1), borderRadius: 15, }}>
                        <Text style={{ color: "#000", paddingLeft: 10, fontSize: responsiveFontSize(1.85), fontWeight: 500 }}>NOTIFICATIONS (6)</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ marginHorizontal: 11, paddingTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('GstReturnStatus')}
                        style={{ backgroundColor: '#e0e0e0', paddingVertical: responsiveHeight(1), borderRadius: 15, }}>
                        <Text style={{ color: "#000", paddingLeft: 10, fontSize: responsiveFontSize(1.85), fontWeight: 500 }}>GST RETURN STATUS </Text>
                    </TouchableOpacity>

                </View>

                <View style={{ marginHorizontal: 11, paddingTop: 10, justifyContent: "center", }}>
                    <TouchableOpacity style={{ backgroundColor: '#e0e0e0', paddingVertical: responsiveHeight(1), borderRadius: 15, alignItems: "center", backgroundColor: "#f1ce48" }}>
                        <Text style={{ color: "#000", paddingLeft: 10, fontSize: responsiveFontSize(1.85), fontWeight: 500 }}>PAY YOUR PENDING FEES</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ marginBottom: 10 }}></View>

        

        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({})