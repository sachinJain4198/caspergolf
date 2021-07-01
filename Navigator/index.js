import React, { Component } from 'react';
import {StackApp} from './StackNavigator';
import NavigationService from './NavigationService';

class AppNavigator extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <StackApp
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}

export default AppNavigator;
