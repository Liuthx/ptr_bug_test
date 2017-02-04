/**
 * Created by k on 2017/2/4.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import HomePage from './HomePage';

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ component: HomePage }}
                renderScene={this.renderScene}
            />
        );
    }
    renderScene = (route, navigator) => {
        let RouteComponent = route.component;
        return (
            <RouteComponent
                { ...route.passProps }
                navigator={ navigator }
            />
        );
    };
}
