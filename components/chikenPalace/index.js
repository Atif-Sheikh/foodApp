import React, { Component } from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button';

export default class ChikenPalace extends Component {
    static navigationOptions = {
        headerTitle: 'Carts',
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ alignSelf: 'center', flex: 1, width: '95%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginRight: '1%', height: 40, flex: 1, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Delivery</Text>
                        </View>
                        <View style={{ marginLeft: '1%', height: 40, flex: 1, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Pickup</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 5, alignSelf: 'center', paddingLeft: 10, width: '95%', alignItems: 'center', height: 60, backgroundColor: '#fafafa', flexDirection: 'row' }}>
                        <Text>home</Text>
                        <Text style={{ marginLeft: '10%' }}>2965 Hugh Street Thursday Vendit</Text>
                        <Ionicons style={{ marginLeft: '20%', fontSize: 20, color: 'grey' }} name="ios-arrow-dropdown" />
                    </View>
                    <View style={{ marginTop: 5, marginBottom: 5, alignSelf: 'center', paddingLeft: 10, width: '95%', alignItems: 'center', height: 60 }}>
                        <Text>CHICKEN PALACE</Text>
                    </View>
                    <View style={{ paddingTop: 10, marginTop: 10, alignSelf: 'center', paddingLeft: 10, width: '95%', height: 'auto', backgroundColor: '#fafafa' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons style={{ marginLeft: 5, marginRight: 5, fontSize: 20, color: 'grey' }} name='ios-trash' />
                            <Text>6pcs sushi & 6pcs sashimi and 8pcs california roll $12.34</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text>
                                Toppings
                        </Text>
                            <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                                <Text style={{ flex: 4 }}><Ionicons style={{ marginLeft: 5, marginRight: 10, fontSize: 20, color: 'grey' }} name='ios-trash' />First topping</Text>
                                <Text style={{ flex: 1 }}>$1.50</Text>
                            </View>
                            <View style={{ flex: 1, marginLeft: 10, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                                <Text style={{ flex: 4 }}><Ionicons style={{ marginLeft: 5, marginRight: 10, fontSize: 20, color: 'grey' }} name='ios-trash' />Second topping</Text>
                                <Text style={{ flex: 1 }}>$2.60</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons style={{ marginLeft: 5, marginRight: 5, fontSize: 20, color: 'grey' }} name='ios-trash' />
                                <Text>6pcs sushi & 6pcs sashimi and 8pcs california roll $12.34</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons style={{ marginLeft: 5, marginRight: 5, fontSize: 20, color: 'grey' }} name='ios-trash' />
                                <Text>6pcs sushi & 6pcs sashimi and 8pcs california roll $12.34</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <TextInput style={{ paddingLeft: 10, width: '100%', backgroundColor: '#fff', alignSelf: 'center', height: 50 }} placeholder='add a comment' />
                            <Text style={{ alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }}>comment</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', alignSelf: 'center', backgroundColor: '#fafafa' }}>
                        <View style={{ alignSelf: 'center', flex: 1, width: '90%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ marginRight: '1%', height: 40, flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                                <Text>Cash</Text>
                            </View>
                            <View style={{ marginLeft: '1%', height: 40, flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                                <Text>Debit</Text>
                            </View>
                            <View style={{ marginLeft: '1%', height: 40, flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                                <Text>Credit</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20, alignItems: 'center' }}>
                            <Text style={{ flex: 4 }}>Subtotal</Text>
                            <Text style={{ flex: 1 }}>$32.23</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20, alignItems: 'center' }}>
                            <Text style={{ flex: 4 }}>Delivery Fee</Text>
                            <Text style={{ flex: 1 }}>$3.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20, alignItems: 'center' }}>
                            <Text style={{ flex: 4 }}>Tax</Text>
                            <Text style={{ flex: 1 }}>$2.31</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20, alignItems: 'center' }}>
                            <Text style={{ flex: 4 }}>total</Text>
                            <Text style={{ flex: 1 }}>$34.53</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 5, marginBottom: 10, alignSelf: 'center', paddingLeft: 10, width: '95%', alignItems: 'center', height: 60, backgroundColor: '#fafafa', flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 20, flex: 2 }}>ready to place</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                            <View style={{ marginRight: 10, borderRadius: 2, alignItems: 'center', justifyContent: 'center', width: 100, height: '50%', backgroundColor: '#f5a623' }}>
                                <Text>Place</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

