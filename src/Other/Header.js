import React, {useState,useMemo } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Drawer from './drawer';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get('window')
const HeaderOnly = props => {
  const navigation = useNavigation();
  const [drawer, setdrawer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
 
  // const memoouse=useMemo(function oneslide(){
  //  return setdrawer(!drawer)
  // },[drawer])
  return (
    <>
      <View style={styles.headerArea}>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity
          onPress={() =>setdrawer(true)}
          style={{width: 35, height: 25,justifyContent:"center"}}>
          <Icon name="menu" size={20} color="#ffc516" />
        </TouchableOpacity>
        <View>
        <Text
          style={{
            color: '#fff',
           fontSize:responsiveFontSize(2.40),
            zIndex: 0,
            justifyContent: 'center',
          }}>
          
          {props && props.name ? props.name : ''}
        </Text>
        </View>

        </View>

        {/* <View style={{justifyContent:"center",paddingTop:5,paddingRight:responsiveWidth(0.085)}}>
                    <View style={{}}>
                    <Text style={{color:"#fff",fontSize:responsiveFontSize(1.95),}}>Rupam</Text>
                    </View>
                    <View style={{}}>
                    <Text style={{color:"#fff",fontSize:responsiveFontSize(1.29)}}>Client</Text>

                    </View>
        </View> */}
             <View style={{flexDirection:"row"}}>
                   {/* <TouchableOpacity 
                    onPress={()=>navigation.navigate("Notification")}
                   style={{paddingRight:5,justifyContent:"center"}}>
                    <Icon2 
                    name='notifications-outline'
                    style={{fontSize: responsiveFontSize(2.50),color:"#ffc516"}}
                    />
                   </TouchableOpacity> */}
                     <View style={{marginRight:responsiveWidth(2)}}>
                   <TouchableOpacity 
                      onPress={()=>navigation.navigate("Notification")}
                   style={{
                    
                  //   position:"absolute",
                  //  justifyContent:"center",
                  //  left:responsiveWidth(3.65)
                   
                   }}>
                     <Text style={{ 
                      backgroundColor: "#f1ce48",
                     paddingHorizontal:3,
                     borderRadius:20,
                     fontSize:responsiveFontSize(1.40),
                     color:"#000",
                     alignItems:"center",
                     position:"absolute",
                     justifyContent:"center",
                     left:responsiveWidth(3.75),
                     top:1
                     
                     }}>6</Text>
                   </TouchableOpacity>
                   <TouchableOpacity 
                    onPress={()=>navigation.navigate("Notification")}
                   style={{justifyContent:"center",paddingTop:responsiveWidth(1)}}>
                    <Icon2 
                    name='notifications-outline'
                    style={{fontSize: responsiveFontSize(3),color:"#ffc516"}}
                    />
                   </TouchableOpacity>    
            </View>
                   <View style={{flexDirection:"column"}}>
                    <View style={{}}>
                    <Text style={{color:"#fff",fontSize:responsiveFontSize(1.95),}}>Rupam</Text>
                    </View>
                    <View style={{}}>
                    <Text style={{color:"#fff",fontSize:responsiveFontSize(1.29)}}>Client
                      </Text>
                    </View>

                   </View>
         </View>

      

        <Drawer drawer={drawer} setdrawer={setdrawer}/>

        {/* <Text
          style={{
            color: '#fff',
            fontSize: 20,
            zIndex: 0,
            justifyContent: 'center',
          }}>
          {' '}
          {props && props.name ? props.name : ''}
        </Text> */}
      </View>
    </>
  );
};

export default HeaderOnly;

const styles = StyleSheet.create({
  headerArea: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: '#4e8ef9',
    elevation: 20,
    position: 'relative',
    zIndex: 20,
    justifyContent:"space-between"
  },
  logo: {width: 130, height: 45, resizeMode: 'stretch'},
  iconHome: {paddingLeft: 15},
  mainBg: {backgroundColor: '#ddd', height: '85%'},
});
