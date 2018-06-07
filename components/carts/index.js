import React, { Component } from 'react';
import { View, Text, Touchable, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button';

export default class Cart extends Component {
    static navigationOptions = {
        headerTitle: 'Cart'
    };
    render(){
        return (
            <View style={{flex: 1, marginBottom: 10}}>
            <ScrollView>
                <View style={{flex: 1, alignItems: 'center', marginTop: 2, marginBottom: 5}}>
                    <Text>29-03-2018</Text>
                </View>
                <View style={{alignSelf: 'center', paddingLeft: 10, width: '95%', alignItems: 'center', height: 60, backgroundColor: '#fafafa', flexDirection: 'row'}}>
                   <Ionicons style={{marginLeft: 10, fontSize: 20, color: '#f5a623'}} color='lightgrey' name="ios-arrow-dropdown" />            
                    <Text style={{marginLeft: 20}}>CHICKEN PALACE</Text>          
                </View>
                <View style={{marginTop: 5, alignSelf: 'center', paddingLeft: 10, width: '95%', alignItems: 'center', height: 60, backgroundColor: '#fafafa', flexDirection: 'row'}}>
                    <Text style={{marginLeft: 20, flex: 2}}>Saved</Text>
                    <View style={{marginRight: 10, borderRadius: 2, alignItems: 'center', justifyContent: 'center', flex: 2, width: '25%', height: 25, backgroundColor: '#f5a623'}}>
                        <Text>reorder</Text>
                    </View>
                </View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 5, marginBottom: 5}}>
                    <Text>29-03-2018</Text>
                </View>
                <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={{fontSize: 18}}>CHICKEN PALACE</Text>
                </View>
                <View style={{justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingLeft: 10, width: '95%', alignSelf: 'center', height: 60, backgroundColor: '#fafafa', flexDirection: 'row'}}>
                    <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons style={{ fontSize: 20, color: '#a1a0a5'}} color='lightgrey' name="ios-time" />            
                        <Text style={{marginLeft: 10}}>3:17 PM</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text>Delivery</Text>
                    </View>
                </View>
                <View style={{marginTop: 5, alignSelf: 'center', paddingLeft: 10, width: '95%', alignItems: 'center', height: 60, backgroundColor: '#fafafa', flexDirection: 'row'}}>
                    <Text>home</Text>
                    <Text style={{marginLeft: '10%'}}>2965 Hugh Street Thursday Vendit</Text>
                   <Ionicons style={{marginLeft: '20%', fontSize: 20, color: 'grey'}} name="ios-arrow-dropdown" />                                
                </View>
                <View style={{paddingTop: 10, marginTop: 10, alignSelf: 'center', paddingLeft: 10, width: '95%', height: 'auto', backgroundColor: '#fafafa'}}>
                    <Text>1  6pcs sushi & 6pcs sashimi and 8pcs california roll $12.34</Text>
                    <View style={{marginTop: 20}}>
                        <Text>
                            Toppings
                        </Text>
                        <View style={{flex: 1, marginLeft: 10, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                            <Text style={{flex: 4}}>First topping</Text>
                            <Text style={{flex: 1}}>$1.50</Text>
                        </View>
                        <View style={{flex: 1, marginLeft: 10, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                            <Text style={{ flex: 4}}>Second topping</Text>
                            <Text style={{flex: 1}}>$2.60</Text>
                        </View>
                        <Text style={{marginTop: 20}}>1  6pcs sushi & 6pcs sashimi and 8pcs california roll $12.34</Text>
                        <Text style={{marginTop: 20}}>1  6pcs sushi & 6pcs sashimi and 8pcs california roll $12.34</Text>                                        
                    </View>
                    <View style={{marginTop: 20}}>
                    <RadioGroup
                        size={18}
                        thickness={1}
                        color='#a1a0a5'
                    >
                        <RadioButton>
                            <Text>Lorem ipsum dolor sit amet.</Text>
                        </RadioButton>
                        <RadioButton>
                            <Text>Lorem ipsum dolor sit amet.</Text>                        
                        </RadioButton>
                    </RadioGroup>
                    </View>
                    <View style={{flex: 1}}>
                        <TextInput style={{paddingLeft: 10, width: '90%', backgroundColor: '#fff', alignSelf: 'center', height: 50}} placeholder='add a comment' />
                        <Text style={{alignSelf: 'flex-end', marginRight: 20, marginBottom: 10}}>comment</Text>
                    </View>
                </View>
                <View style={{paddingBottom: 20, marginTop: 5, alignSelf: 'center', paddingLeft: 20, width: '95%', alignItems: 'center', height: 'auto', backgroundColor: '#fafafa'}}>
                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10, alignItems: 'center'}}>
                        <Text style={{flex: 4}}>payment method</Text>
                        <Text style={{flex: 1}}>cash</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10, alignItems: 'center'}}>
                        <Text style={{flex: 4}}>subtotal</Text>
                        <Text style={{flex: 1}}>$32.23</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10, alignItems: 'center'}}>
                        <Text style={{flex: 4}}>tax</Text>
                        <Text style={{flex: 1}}>$2.31</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10, alignItems: 'center'}}>
                        <Text style={{flex: 4}}>total</Text>
                        <Text style={{flex: 1}}>$34.53</Text>
                    </View>
                </View>
                <View style={{marginTop: 5, alignSelf: 'center', paddingLeft: 10, width: '95%', alignItems: 'center', height: 60, backgroundColor: '#fafafa', flexDirection: 'row'}}>
                    <Text style={{marginLeft: 20, flex: 2}}>Complete</Text>
                    <View style={{marginRight: 10, borderRadius: 2, alignItems: 'center', justifyContent: 'center', flex: 2, width: '25%', height: 35, backgroundColor: '#f5a623'}}>
                        <Text>reorder</Text>
                    </View>
                </View>
            </ScrollView>
            </View>
        );
    };
};