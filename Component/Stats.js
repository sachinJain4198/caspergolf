import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { View, StyleSheet, Text, StatusBar, Button, Touchable, TouchableOpacity, Image, ScrollView } from 'react-native';
import { scale, verticalScale, moderateScale } from '../Component/Scale';

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
                        <TouchableOpacity style={styles.playView}>
                            <Text style={styles.playText}>Play</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line1}></View>
                    <View style={styles.view2}>
                        <TouchableOpacity style={styles.bag}>
                        <Image source={require('../images/bag.png')} style={styles.bagImg}/>
                        </TouchableOpacity>
                        <View style={styles.practice}>
                        <Image source={require('../images/practice.png')} style={styles.pracImg}/>
                        </View>
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
        margin: moderateScale(10),
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: moderateScale(5),
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
        margin: moderateScale(18)
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
        height: verticalScale(80),
    },
    practice: {
        // width: scale(170),
        // height: verticalScale(165),
        marginTop: moderateScale(16),
        width:'50%',
        // backgroundColor:'red'
    },
    bag: {
        width:'50%',
        // backgroundColor:'blue'
        // width: scale(160),
        // height: verticalScale(200),
        // marginLeft:moderateScale(10),
        // borderColor: '#00000029',
        // borderWidth: 0.5,
    },
    view2: {
        flexDirection: 'row',
        height:verticalScale(180),
        // backgroundColor:'red'
        // marginLeft:moderateScale()
    },
    playText: {
        alignSelf: 'center',
        color: '#F2F2F2',
        marginBottom: moderateScale(3),
        fontSize: 14,
        fontWeight: '700'
    },
    playView: {
        backgroundColor: '#24B775',
        position: 'absolute',
        right: moderateScale(5),
        margin: moderateScale(15),
        width: scale(80),
        height: verticalScale(35),
        borderRadius: 45,
        justifyContent: 'center'
    },
    bellImg: {
        width: scale(20),
        height: verticalScale(20),
        alignSelf: 'center'
    },
    bellView: {
        position: 'absolute',
        right: moderateScale(110),
        marginTop: moderateScale(15),
        width: scale(35),
        height: verticalScale(35),
        backgroundColor: '#F2F2F2',
        borderRadius: 50,
        justifyContent: 'center'
    },
    statsText: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: moderateScale(15),
        marginTop: moderateScale(20)
    },
    innerView: {
        height: verticalScale(50),
        backgroundColor: 'white',
        flexDirection: 'row'
    },

    saveView: {
        position: 'absolute',
        top: moderateScale(270),
        right: moderateScale(20),
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
    line1: {
        marginTop: moderateScale(10),
        borderColor: '#00000029',
        borderWidth: 0.5,
        overflow: 'hidden',
        shadowColor: '#00000029',
        shadowOpacity: 1,
      },
      bagImg:{
          width:scale(165),
          height:verticalScale(180)
      },
      pracImg:{
          width:scale(180),
          height:verticalScale(150)
      }
});