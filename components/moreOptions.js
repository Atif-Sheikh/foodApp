import React, { Component } from 'react';
import Container from './container'
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native';

import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button';
import CheckBox from './checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from 'react-navigation'
class MoreOptions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        };
    };
    static headerOptions = {
        header: null
    };
    static tabBarOptions = {
        tabs: null,
    };
    onSelect = (index, value) => {
        this.setState({value: index});
    };
    render() {
        var radio_props = [
            { label: 'Large ', value: 0 },
            { label: 'Medium', value: 1 },
            { label: 'Small ', value: 2 }
        ];
        return (
            <View style={styles.container}>
            <ScrollView>
                    {/* <View style={{marginLeft: '3%', flex: 1, width: '94%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{marginRight: '1%', height: 40, flex: 1, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
                            <Text>Delivery</Text>
                        </View>
                        <View style={{marginLeft: '1%', height: 40, flex: 1, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
                            <Text>Pickup</Text>
                        </View>
                    </View> */}
                    <View style={{marginTop: 5, alignSelf: 'center', paddingLeft: 10, width: '95%', alignItems: 'center', height: 60, backgroundColor: '#fafafa', flexDirection: 'row'}}>
                        <Text>home</Text>
                        <Text style={{marginLeft: '10%'}}>2965 Hugh Street Thursday Vendit</Text>
                    <Ionicons style={{marginLeft: '20%', fontSize: 20, color: 'grey'}} name="ios-arrow-dropdown" />                                
                    </View>
                    <Text style={{fontSize: 20, marginLeft: 10}}>Chinese Food </Text>

                    <View style={styles.box}>
                        <View style={styles.img}>
                            <Image style={{ width: 60, height: 60 }}
                                source={require('./images/icon.png')}
                            />
                        </View>
                        <View style={styles.middlTxt}>
                            <Text style={styles.txtSize} > 6 pcs Sushi and 6 pcs sashimi and 8 pcs california roll </Text>
                            <Text> 6 pcs Sushi and 6 pcs sashimi and 8 pcs california roll </Text>
                        </View>
                        <View style={styles.rightTxt}>
                            <Text  > $2.34 </Text>
                        </View>
                    </View>

                    <View style={styles.scndBox}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('ChikenPalace')}
                            style={styles.button}
                        >
                            <Text style={styles.txt}>View Options </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.img}>
                            <Image style={{ width: 60, height: 60 }}
                                source={require('./images/icon.png')}
                            />
                        </View>
                        <View style={styles.middlTxt}>
                            <Text style={styles.txtSize} > 6 pcs Sushi and 6 pcs sashimi and 8 pcs california roll </Text>
                            <Text  > 6 pcs Sushi and 6 pcs sashimi and 8 pcs california roll </Text>
                        </View>
                        <View style={styles.rightTxt}>
                            <Text  > $2.34 </Text>


                        </View>

                    </View>
                    <View style={styles.checkBox}>
                    <Text  >Select a size  </Text>
                        <RadioGroup
                            onSelect = {(index, value) => this.onSelect(index, value)}
                            size={16}
                            thickness={2}
                            color='#f5a623'
                            selectedIndex={this.state.value}
                        >
                        {
                            radio_props.map((value, index) => {
                                return <RadioButton key={index.toString()}>
                                    <Text>{value.label}</Text>
                                </RadioButton>
                            })
                        }
                        </RadioGroup>
                    </View>
                    <View style={styles.checkBox} >
                        <Text>Add choices to items  </Text>
                        <View>

                        </View>
                        <CheckBox checkedColor='#f5a623'
                            title='First topping'
                            checked={true}
                            titleRight={'$5.00'}
                        >
                            <Text></Text>
                        </CheckBox>
                        <CheckBox
                            title='Second Topping'
                            titleRight={'$5.00'}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fafafa', alignSelf: 'center', width: 340, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 2, flexDirection: 'row', marginLeft: '20%'}}>
                            <TouchableOpacity>
                                <Icon style={{marginLeft: 10, marginTop: 3}} name='minus' />
                            </TouchableOpacity>
                            <Text style={{marginLeft: 10}}>1</Text>
                            <TouchableOpacity>
                                <Icon style={{marginLeft: 10, marginTop: 3}} name='plus' />                            
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <View style={{ flex: 3, backgroundColor: '#f5a623', margin: 5, borderRadius: 2, marginTop: 15, padding: 15, alignSelf: 'flex-end'}}>
                                <Text style={styles.txt}>add to cart </Text>                                
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 20, marginLeft: 20, marginTop: 20}}>Chinnese Food</Text>
                    <View style={{marginTop: 5, paddingBottom: 30, paddingTop: 10, paddingLeft: 10, backgroundColor: '#fafafa', width: '95%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flex: 1}}>
                            <Image style={{ width: 60, height: 60, }}
                                source={require('./images/icon.png')}
                            />
                        </View>
                        <View style={{flex: 4}}>
                            <Text>6 pcs Sushi and 6 pcs sashimi and 8 pcs california roll</Text>
                        </View>
                    </View>
                    <View style={{marginTop: '1%', flexDirection: 'row', backgroundColor: '#fafafa', alignSelf: 'center', width: 340, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 2, flexDirection: 'row', marginLeft: '20%'}}>
                            <TouchableOpacity>
                                <Icon style={{marginLeft: 10, marginTop: 3}} name='minus' />
                            </TouchableOpacity>
                            <Text style={{marginLeft: 10}}>1</Text>
                            <TouchableOpacity>
                                <Icon style={{marginLeft: 10, marginTop: 3}} name='plus' />                            
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChikenPalace')}
                            >
                            <View style={{ flex: 3, backgroundColor: '#f5a623', margin: 5, borderRadius: 2, marginTop: 15, padding: 15, alignSelf: 'flex-end'}}>
                                <Text style={styles.txt}>add to cart </Text>                                
                            </View>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
        </View>
        );
    }
}
export default createMaterialTopTabNavigator({
    Delivery: MoreOptions,
    Pickup: MoreOptions
  },
    {
      tabBarOptions: {
        activeTintColor: '#f5a623',
        inactiveTintColor: 'gray',
        tabStyle: {
          backgroundColor: '#fafafa'
        },
        style: {
          backgroundColor: '#fafafa',
          width: '90%',
          margin: 10,
          marginLeft: '5%'
        }
      },
  
    }
  )
  
const styles = StyleSheet.create({

    box:
        {
            // justifyContent: 'center',
            // alignItems: 'center',
            // backgroundColor: '#F5FCFF',
            flexDirection: 'row',
            margin: 5,
            marginTop: 5,

            paddingLeft: 10,
            backgroundColor: '#fafafa',
            height: 87,
            width: 340
        },
    checkBox: {
        // backgroundColor: '#F5FCFF',
        margin: 5,
        marginTop: 5,
        backgroundColor: '#fafafa',
        // height: 87,
        width: 340,
        paddingLeft: 10
    },
    img: {
        flex: 2,
        paddingTop: 15,
    },
    middlTxt: {
        flex: 6,
        paddingTop: 8
    },
    rightTxt: {
        flex: 1,
        paddingBottom: 15
    },
    txtSize: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    tabs: {
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        backgroundColor: '#E0E0E0',
        height: 87,
        width: 340
    },
    heading: {
        fontSize: 20
    },
    button: {
        backgroundColor: '#f5a623',
        margin: 5,
        borderRadius: 2,
        marginTop: 15,
        padding: 15,

    },
    scndBox: {
        // backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        alignSelf: 'center',
        width: '95%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

