import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
export default class Notifications extends Component {
  static headerOptions = {
    headerTitle: 'Notifications'
  };
  state = {
    notifications: [
      { label: "Order Accepted", subLabel: "By: Chicken Palace" },
      { label: "Order Accepted", subLabel: "By: Chicken Palace" },
      { label: "Order Accepted", subLabel: "By: Chicken Palace" },
      { label: "Order Accepted", subLabel: "By: Chicken Palace" },
      { label: "Order Accepted", subLabel: "By: Chicken Palace" },
      { label: "Order Accepted", subLabel: "By: Chicken Palace" },
      { label: "Order Accepted", subLabel: "By: Chicken Palace" },
      { label: "Order Accepted", subLabel: "By: Chicken Palace" }
    ]
  };
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({item: {label, subLabel}}) => (
    <TouchableOpacity>
      <View style={{ paddingVertical: 10, paddingHorizontal: 30, backgroundColor: '#fafafa' }}>
        <Text>{label}</Text>
        <Text>{subLabel}</Text>
      </View>
    </TouchableOpacity>
  )
  render() {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#fff'}}></View>}
          data={this.state.notifications}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
