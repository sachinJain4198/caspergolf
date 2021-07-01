import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

function navigate(routeName, params) {
    console.log('navigatee callled')
    navigator.dispatch(
        NavigationActions.navigate({routeName,params})
    );
}

function dispatch(routeName) {
    console.log('dispatch callled')
    navigator.dispatch(
        routeName
    );
}

function goBack(key) {
    console.log('goback callled')
    navigator.dispatch(
        NavigationActions.back({
            key: key
        })
    );
}


// add other navigation functions that you need and export them

export default {
    navigate,
    dispatch,
    goBack,
    setTopLevelNavigator
};
