import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Checkk from 'react-native-vector-icons/AntDesign';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';
import Gst from 'react-native-vector-icons/FontAwesome5';
import Doller from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from '../navigation/StackNavigator'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import axios from 'axios'

function drawer(props) {
  const navigation = useNavigation();
  const [approveAuth, setApproveAuth] = useState();
  const[data,setdata]=useState('')
  const[apploaddata ,setapploaddata]=useState("")
  // const { authContext, loginState, dispatch } = useContext(AuthContext);

  const closeMenu = () => {
    props.setdrawer(false);
  };

  const onMove = () => {
    props.setdrawer(false);
  };
  // const logoutHandler = () => {
  //   authContext.signOut();
  // };

  // const showdataa =async () => {
  //   let mr = await AsyncStorage.getItem('user');
  //   const modifiedUser = JSON.parse(mr);
  //   setdata(modifiedUser)
  //   console.log('drawer', modifiedUser);
  //    }







  // useEffect(()=>{
  //   showdataa()
  //   userAppload()
  // },[])
  
  return (
    <>
      {props.drawer && (
        <Animatable.View
          animation="fadeInLeft"
          duration={100}
          style={styles.mainDrawerArea}>
          <View style={styles.drawerArea}>
            <View
              style={{
                backgroundColor:"#4e8ef9",
                flexDirection: 'row',
                alignItems: 'center',
                // marginTop: 1,
                paddingVertical: 10,
                paddingHorizontal: 8,
                // height:120
              }}>
                <View
                  style={{
                    borderRadius: 50,
                    overflow: 'hidden',
                    marginLeft: 3
                  }}>
                  <Image
                    style={{height: 70, width: 70}}
                    source={require('../assets/user.jpg')}
                  
                  />
                </View>
                <View style={{padding:5}}>
                 <View>
                 <Text style={{color:"#fff",fontSize:13,fontWeight:"800"}}>user id : 123</Text>
                 </View>
                 <View>
                  <Text style={{color:"#fff",fontSize:13,fontWeight:"800"}}>Pollab Kumar</Text>
                 </View>

                 </View>
             
            </View>

            <View style={{backgroundColor: '#fff', marginLeft: 5}}>
              <View style={styles.menuBlock}>
               
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}
                  style={styles.eachMenu}>
                  <Notification
                    name="notifications-none"
                    size={19}
                    color="#4e8ef9"
                  />
                  <Text style={styles.menuText}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('CompletedJob')}
                  style={styles.eachMenu}>
                  <Checkk
                    name="checkcircleo"
                    size={17}
                    color="#4e8ef9"
                  />
                  <Text style={styles.menuText}>Completed Jobs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('GstReturnStatus')}
                  style={styles.eachMenu}>
                  <Doller
                    name="dollar"
                    size={17}
                    color="#4e8ef9"
                  />
                  <Text style={styles.menuText}>GST Return Status</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Payment')}
                  style={styles.eachMenu}>
                  <Gst
                    name="file-invoice-dollar"
                    size={17}
                    color="#4e8ef9"
                  />
                  <Text style={styles.menuText}>Payment History</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  // onPress={() => navigation.navigate('Profile')}
                  style={styles.eachMenu}>
                  <Logout
                    name="logout"
                    size={17}
                    color="#4e8ef9"
                  />
                  <Text style={styles.menuText}>Log Out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.nonDrawer}
            onPress={() => props.setdrawer(false)}></TouchableOpacity>
        </Animatable.View>
      )}
    </>
  );
}

export default drawer;

const styles = StyleSheet.create({
  mainDrawerArea: {
    height: windowHeight,
    backgroundColor: '#f9f9f966',
    width: windowWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    zIndex: 30,
  },
  nonDrawer: {width: '20%', height: '100%'},
  drawerArea: {backgroundColor: '#fff', width: '75%', height: '100%'},
  drawerAreaHead: {backgroundColor: 'blue', minHeight: 110},
  UserBLock: {flexDirection: 'row', marginTop: -60, paddingLeft: 10},
  userName: {
    fontWeight: '700',
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#fff',
    letterSpacing: 2,
  },
  userEmail: {fontWeight: '500', fontSize: 12, color: '#fff'},
  menuBlock: {paddingTop: 10},
  eachMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: '500',
    color: '#000',
  },
});
