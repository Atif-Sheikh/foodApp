import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
export default class Login1 extends Component {
  state = {
    notifications: [
      { label: "Home", subLabel: "FL,Forth Laudale Avenue" },
      { label: "Home", subLabel: "FL,Forth Laudale Avenue" }
    ]
  };
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({ item: { label, subLabel } }) => (
    <TouchableOpacity>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 30,
          backgroundColor: "#f5f5f5"
        }}
      >
        <Text style={{ color: "#f5a623", fontWeight: "bold" }}>{label}</Text>
        <Text>{subLabel}</Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <Image
          source={require("./image.png")}
          style={{
            width: 100,
            height: 100,
            marginTop: 50,
            borderRadius: 10,
            borderColor: "#f5a623",
            borderWidth: 5
          }}
        />
        <Text style={{ backgroundColor: "#f5f5f5", padding: 10 }}>
          John Cena
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 20
          }}
        >
          <Text style={{ color: "#f5a623", fontSize: 18 }}>Address </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "#f5a623",
                fontSize: 18,
                backgroundColor: "#f5f5f5",
                width: 10,
                textAlign: "center"
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '90%'}}>

          <FlatList
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: "#fff" }} />
            )}
            data={this.state.notifications}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
            </View>
      </View>
    );
  }
}
