import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';




export default class Container extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.screenProps.navigate('MoreOptions')}>
        <View style={styles.container}>

          <View style={styles.box}>

            <Image style={{ width: 60, height: 60, }}
              source={require('./images/icon.png')}
            />

            <View style={styles.txt}>
              <Text style={styles.txtSize} > {this.props.text} </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  box:
    {
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#F5FCFF',
      flexDirection: 'row',
      margin: 5,
      marginTop: 10,
      marginLeft: '5%',
      paddingTop: 15,
      paddingLeft: 10,
      backgroundColor: '#fafafa',
      height: 87,
      width: '90%'
    },
  img: {
    flex: 1
    ,
    flexDirection: 'row'
  },
  txt: {
    alignItems: 'center',
    paddingTop: 11,

  },
  txtSize: {
    fontSize: 20
  },
  tabs: {
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    backgroundColor: '#E0E0E0',
    height: 87,
    width: 340
  }
});
