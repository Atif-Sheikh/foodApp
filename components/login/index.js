import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { width, height } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <KeyboardAwareScrollView>
        <View
          style={{
            height:height,
            backgroundColor: "#f5a623",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 50,
                marginBottom: 120
              }}
            >
              eatplus
            </Text>
          </View>
          <View style={{top: '-6%'}}>
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#fff",
                marginBottom: 5,
                color: "#f5a623",
                paddingLeft: 15,
                borderRadius: 2
              }}
              placeholder="Email Address"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#fff",
                color: "#f5a623",
                paddingLeft: 15,
                borderRadius: 2                
              }}
              placeholder="Password"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
              secureTextEntry
            />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <View
                style={{
                  marginTop: 25,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                  width: 250,
                  backgroundColor: "#fff",
                  borderRadius: 2                
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#f5a623",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                  width: 250,
                  backgroundColor: "#fff",
                  marginTop: 5,
                  flexDirection: 'row'
                }}
              >
                <Icon name="facebook" size={15} style={{marginRight: 10}} color="#f5a623" />
                <Text
                  style={{
                    textAlign: "center",
                    color: "#f5a623",
                    fontWeight: "bold",
                    borderRadius: 2                
                  }}
                >
                  Login With Facebook
                </Text>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                color: "#fff",
                marginTop: 15,
                alignSelf: "center"
              }}
            >
              or
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: 15,
                  alignSelf: "center",
                  marginTop: 10
                }}
              >
                signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
