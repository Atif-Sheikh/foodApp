import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get("window");

export default class Profile extends Component {
  static navigationOptions = {
    header : null 
  }
  componentDidMount(){
    this.props.navigation.setParams({headerTitle: 'Profile'})
  }
  render() {
    return (
      <KeyboardAwareScrollView style={{ flex: 1, marginTop: -24 }}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <View
            style={{
              width: 120,
              height: 120,
              marginTop: 25,
              borderRadius: 10,
              borderColor: "#f5f5f5",
              borderWidth: 5,
              backgroundColor: "#f5f5f5",
              marginBottom: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
           <Ionicons style={{fontSize: 70, alignSelf: 'center'}} color='lightgrey' name="ios-camera" />            
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 1,
              backgroundColor: "#f5f5f5",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              paddingLeft: 10,
              height: 30
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>First Name</Text>
            </View>
            <View style={{ flex: 2 }}>
              <TextInput
                style={{
                  width: 200,
                  marginBottom: 5,
                  color: "#f5a623",
                  fontWeight: "bold"
                }}
                placeholder="text input"
                placeholderTextColor="#a1a0a5"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <Text style={{ width: "85%", fontWeight: "bold", color: "#f5a623" }}>
            This field must have more than 2 chars.
          </Text>

          <View
            style={{
              flexDirection: "row",
              padding: 0,
              marginBottom: 1,
              backgroundColor: "#f5f5f5",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              paddingLeft: 10,
              height: 30
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>Last Name</Text>
            </View>
            <View style={{ flex: 2 }}>
              <TextInput
                style={{
                  width: 200,
                  marginBottom: 5,
                  fontWeight: "bold"
                }}
                placeholder="text input"
                placeholderTextColor="#a1a0a5"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 0,
              marginBottom: 1,
              backgroundColor: "#f5f5f5",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              paddingLeft: 10,
              height: 30
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>Phone</Text>
            </View>
            <View style={{ flex: 2 }}>
              <TextInput
                style={{
                  width: 200,
                  marginBottom: 5,
                  fontWeight: "bold"
                }}
                placeholder="text input"
                placeholderTextColor="#a1a0a5"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 0,
              marginBottom: 1,
              backgroundColor: "#f5f5f5",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              paddingLeft: 10,
              height: 30
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>Email</Text>
            </View>
            <View style={{ flex: 2 }}>
              <TextInput
                style={{
                  width: 200,
                  marginBottom: 5,
                  fontWeight: "bold"
                }}
                placeholder="text input"
                placeholderTextColor="#a1a0a5"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProfileEdit2')} style={{ width: "90%" }}>
            <View
              style={{
                marginTop: 25,
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: "100%",
                backgroundColor: "#f5a623",
                padding: 10
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  width: "100%"
                }}
              >
                Save
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
