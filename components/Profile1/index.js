import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { width, height } = Dimensions.get("window");
export default class Profile1 extends Component {
  static navigationOptions = {
    header: null 
  }
  render() {
    return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40
          }}
        >
          <Text
            style={{
              color: "#f5a623",
              fontWeight: "bold",
              fontSize: 30,
              padding: 30
            }}
          >
            New Address
          </Text>
          <View>
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#f5f5f5",
                marginBottom: 5,
                color: "#f5a623",
                padding:5
              }}
              placeholder="Email Address"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
            />
            <Text
              style={{ width: "85%", fontWeight: "bold", color: "#f5a623" , marginBottom:15}}
            >
              This field must have a valid email format
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#f5f5f5",
                marginBottom: 5,
                color: "#f5a623",
                padding:5
              }}
              placeholder="Address"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#f5f5f5",
                marginBottom: 5,
                color: "#f5a623",
                padding:5
              }}
              placeholder="Unit"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#f5f5f5",
                marginBottom: 5,
                color: "#f5a623",
                padding:5
              }}
              placeholder="Postal Code"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#f5f5f5",
                marginBottom: 5,
                color: "#f5a623",
                padding:5
              }}
              placeholder="City"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#f5f5f5",
                marginBottom: 5,
                color: "#f5a623",
                padding:5
              }}
              placeholder="Province"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#f5f5f5",
                marginBottom: 5,
                color: "#f5a623",
                padding:5
              }}
              placeholder="Country"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "67%",
              height: 35,
              marginTop: 40
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "#f5a623", fontWeight: "bold" }}>
                delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#f5a623",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
