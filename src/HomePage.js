import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import PtrPage from './PtrPage';

export default class HomePage extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                <Text onPress={()=>{
                    this.props.navigator.push({
                        component: PtrPage
                    })
                }}>push ptr_page</Text>
            </View>
        );
    }
}