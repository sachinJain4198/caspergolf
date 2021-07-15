import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from '../Component/Scale';


class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hidePass1: true,
            mobNum: '',
            confirmResult: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}

                />
                <View style={styles.innerview}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../images/left-arrow.png')} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={styles.logintext}>Practice Log</Text>
                </View>
                <View style={styles.commonView}>
                    <View style={styles.common}>
                        <Image source={require('../images/golf-champion.png')} style={styles.commonImg} />
                    </View>
                    <Text style={styles.commonText}>Putting</Text>
                    <View style={styles.sameView}>
                        <Image source={require('../images/right-arrow.png')} style={styles.rightArrow} />
                    </View>
                </View>

                <View style={styles.commonView1}>
                    <View style={styles.common}>
                        <Image source={require('../images/golfer.png')} style={styles.commonImg} />
                    </View>
                    <Text style={styles.commonText}>Short Game</Text>
                    <View style={styles.sameView}>
                        <Image source={require('../images/right-arrow.png')} style={styles.rightArrow} />
                    </View>
                </View>

                <View style={styles.commonView1}>
                    <View style={styles.common}>
                        <Image source={require('../images/player.png')} style={styles.commonImg} />
                    </View>
                    <Text style={styles.commonText}>Full Swing</Text>
                    <View style={styles.sameView}>
                        <Image source={require('../images/right-arrow.png')} style={styles.rightArrow} />
                    </View>
                </View>

                <View style={styles.commonView1}>
                    <View style={styles.common}>
                        <Image source={require('../images/golf-player.png')} style={styles.commonImg} />
                    </View>
                    <Text style={styles.commonText}>Indoor Drill</Text>
                    <View style={styles.sameView}>
                        <Image source={require('../images/right-arrow.png')} style={styles.rightArrow} />
                    </View>
                </View>

                <View style={styles.commonView1}>
                    <View style={styles.common}>
                        <Image source={require('../images/contract.png')} style={styles.commonImg} />
                    </View>
                    <Text style={styles.commonText}>Notes</Text>
                    <View style={styles.sameView}>
                        <Image source={require('../images/right-arrow.png')} style={styles.rightArrow} />
                    </View>
                </View>

                <View style={styles.commonView1}>
                    <View style={styles.common}>
                        <Image source={require('../images/history.png')} style={styles.commonImg} />
                    </View>
                    <Text style={styles.commonText}>History</Text>
                    <View style={styles.sameView}>
                        <Image source={require('../images/right-arrow.png')} style={styles.rightArrow} />
                    </View>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.signtext}>Practice makes perfect! Record your time spent on the practice green and driving range, and view summary stats to see how you're progressing over time.</Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: '10%',
    },
    loginButton: {
        width: '90%',
        height: moderateScale(60),
        margin: verticalScale(18),
        borderRadius: 5,
        justifyContent: 'center',
    },
    logintext: {
        marginTop: verticalScale(30),
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        fontSize: 24,
        fontFamily: "Poppins-SemiBold"
    },
    passtext: {
        fontSize: 15,
        width: '90%',
        margin: moderateScale(15),
        height: verticalScale(44),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        marginTop: 30
    },
    lastext: {
        fontSize: 15,
        width: '90%',
        marginLeft: moderateScale(15),
        height: verticalScale(44),
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#D8D8D8',
        marginRight: moderateScale(15),

    },
    simpletext: {
        alignSelf: 'center',
        marginTop: verticalScale(10),
        color: '#000000',
        fontWeight: "bold"
    },
    email: {
        color: '#24B775'
    },
    image: {
        marginTop: verticalScale(35),
        width: scale(20),
        height: scale(20),
        marginLeft: verticalScale(20),
    },
    innerview: {
        flexDirection: 'row',
        marginTop: verticalScale(10)
    },
    gender: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: moderateScale(10),
    },
    male: {
        width: '26%',
        borderWidth: 1,
        borderRadius: 5,
        height: verticalScale(44),
        borderColor: '#D8D8D8'
    },
    femaletext: {
        alignSelf: 'center',
        color: '#707070',
        margin: moderateScale(10)
    },
    signtext: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 12
    },
    commonView: {
        flexDirection: 'row',
        width: '95%',
        height: verticalScale(65),
        backgroundColor: '#FFFFFF',
        margin: moderateScale(10),
        borderRadius: 5,
        marginTop: moderateScale(20),
        shadowColor: '#00000014',
        shadowOpacity: 0.8,
        elevation: 10
    },
    commonView1: {
        flexDirection: 'row',
        width: '95%',
        height: verticalScale(65),
        backgroundColor: '#FFFFFF',
        margin: moderateScale(10),
        borderRadius: 5,
        shadowColor: '#00000014',
        shadowOpacity: 0.8,
        elevation: 10
    },
    common: {
        backgroundColor: '#dcf1f7',
        alignSelf: 'center',
        width: '18%',
        height: verticalScale(65),
        borderRadius: 5,
        justifyContent: 'center'
    },
    commonImg: {
        alignSelf: 'center'
    },
    commonText: {
        alignSelf: 'center',
        color: '#000000',
        marginLeft: moderateScale(10),
        fontWeight: "700"
    },
    sameView: {
        width: scale(30),
        height: verticalScale(30),
        backgroundColor: '#707070',
        borderRadius: 50,
        position: 'absolute',
        right: moderateScale(2),
        margin: moderateScale(15)
    },
    rightArrow: {
        width: scale(20),
        height: verticalScale(20),
        margin: moderateScale(5)
    }
});

export default Practice;

