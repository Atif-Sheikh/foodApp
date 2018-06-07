import { createStackNavigator } from 'react-navigation';
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImgIcon from '../images/profile.jpg';
import ProfileEdit from '../Profile';
import ProfileEdit2 from '../Profile1';
const { width, height } = Dimensions.get("window");

class MainProfile extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('ProfileEdit')}>
            <View
              style={{
                width: 120,
                height: 120,
                marginTop: 25,
                borderRadius: 10,
                borderColor: "#f5f5f5",
                borderWidth: 5,
                backgroundColor: "#f5f5f5",
                marginBottom: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
            <Image source={ImgIcon} style={{width: 120, height: 120, borderRadius: 5}} /> 
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor: '#f5f5f5', width: 120, height: 40, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#a1a0a5'}}>Jhon Smith</Text>           
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 0,
              marginBottom: 1,
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
            }}
          >
            <View style={{ flex: 6, marginBottom: 10 }}>
              <Text style={{ fontSize: 20, color: '#a1a0a5'}}>Address Book</Text>
            </View>
            <TouchableOpacity>
                <View style={{ flex: 1 }}>
                <Ionicons style={{ fontSize: 20}} name='ios-add' />
                </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 0,
              marginBottom: 1,
              backgroundColor: "#f5f5f5",
              justifyContent: "center",
              width: "90%",
              height: 60,
              paddingLeft: 10,
              paddingTop: 10
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{color: '#a1a0a5' }}>Home</Text>
              <Text style={{ color: '#a1a0a5'}}>FL, Forth Laudale Avenue</Text>
            </View>
          </View>
          <View
            style={{
              padding: 0,
              marginBottom: 1,
              marginTop: 10,
              backgroundColor: "#f5f5f5",
              justifyContent: "center",
              width: "90%",
              height: 60,
              paddingLeft: 10,
              paddingTop: 10                            
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: '#a1a0a5'}}>Home</Text>
              <Text style={{ color: '#a1a0a5'}}>FL, Forth Laudale Avenue</Text>
            </View>
          </View>
          </View>
      </KeyboardAwareScrollView>
    );
  }
}

const Navigations = createStackNavigator({
  profile: MainProfile,
  ProfileEdit,
  ProfileEdit2,
});

export default () => <View style={{marginTop: -24, flex: 1}}>
  <Navigations/>
</View>