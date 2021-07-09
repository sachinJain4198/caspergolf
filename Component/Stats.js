import React from 'react';
import { View, StyleSheet, Text, StatusBar, Button, Touchable, TouchableOpacity, Image, ScrollView } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class Stats extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar
                        hidden={true}

                    />
                    <View style={styles.innerView}>
                        <Text style={styles.statsText}>Stats</Text>
                        <View style={styles.bellView}>
                            <Image source={require('../images/bell.png')} style={styles.bellImg} resizeMode='contain' />
                        </View>
                        <View style={styles.playView}>
                            <Text style={styles.playText}>Play</Text>
                        </View>
                    </View>
                    <View style={styles.view2}>
                        <Image source={require('../images/bag.png')} style={styles.bag} />
                        <Image source={require('../images/practice.png')} style={styles.practice} />
                    </View>


                    <Image source={require('../images/statspage.jpeg')} style={styles.stats} />
                    <View style={styles.saveView}>
                        <Text style={styles.saveText}>Enter a Past Round</Text>
                        <Text style={styles.save}>Quickly enter scores from past {'\n'} rounds get an updated Handicap</Text>
                    </View>
                    <View style={styles.view1}>
                        <Image source={require('../images/handbag.png')} style={styles.commonImg} />
                        <Image source={require('../images/scroe.png')} style={styles.commonImg} />
                    </View>
                    <View style={styles.view1}>
                        <Image source={require('../images/advance.png')} style={styles.commonImg} />
                        <Image source={require('../images/compare.png')} style={styles.commonImg} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    loginButton: {
        position: 'absolute',
        width: '90%',
        height: verticalScale(40),
        backgroundColor: '#24B775',
        bottom: 0,
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 18
    },
    signtext: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 15
    },
    view1: {
        flexDirection: 'row'
    },
    commonImg: {
        width: '50%'
    },
    stats: {
        alignSelf: 'center',
        width: '95%',
        borderRadius: 5,
        height: 80,
    },
    practice: {
        width: 180,
        height: 165,
        marginTop: 16,
        marginRight: 2
    },
    bag: {
        width: 190,
        height: 200
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    playText: {
        alignSelf: 'center',
        color: '#F2F2F2',
        marginBottom: 3,
        fontSize: 14,
        fontWeight: '700'
    },
    playView: {
        backgroundColor: '#24B775',
        position: 'absolute',
        right: 10,
        margin: 15,
        width: 80,
        height: 35,
        borderRadius: 45,
        justifyContent: 'center'
    },
    bellImg: {
        width: 20,
        height: 20,
        alignSelf: 'center'
    },
    bellView: {
        position: 'absolute',
        right: 110,
        marginTop: 15,
        width: 35,
        height: 35,
        backgroundColor: '#F2F2F2',
        borderRadius: 50,
        justifyContent: 'center'
    },
    statsText: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 15,
        marginTop: 20
    },
    innerView: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row'
    },

    saveView: {
        position: 'absolute',
        top: 270,
        right: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    saveText: {
        color: 'white',
        fontSize: 14,
        fontWeight: "700"
    },
    save: {
        color: 'white'
    },
});