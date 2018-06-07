import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("window");

export default class SignUp extends Component {
  static navigationOptions = {
    headerTitle: 'Login',
};
  render() {
    return (
      <KeyboardAwareScrollView>
        <View
          style={{ height: height-100, top: '-10%', justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: "#f5a623",
              fontWeight: "bold",
              fontSize: 30,
              marginBottom: 50
            }}
          >
            Welcome
          </Text>
          <View>
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
            <Text style={{ color: "#f5a623", fontSize: 10, marginBottom: 10 }}>
              This field must have a valid format
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 250,
                backgroundColor: "#fff",
                color: "#f5a623",
                marginBottom: 5,
                paddingLeft: 15,
                borderRadius: 2                                               
              }}
              placeholder="Password"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
              secureTextEntry
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
              placeholder="Repeat Password"
              placeholderTextColor="#a1a0a5"
              underlineColorAndroid="transparent"
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <View
              style={{
                marginTop: 25,
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 250,
                backgroundColor: "#f5a623"
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontWeight: "bold"
                }}
              >
                signup
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
                  signup With Facebook
                </Text>
              </View>
            </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
