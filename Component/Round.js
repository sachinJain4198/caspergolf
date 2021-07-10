import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import ModalDropdown from 'react-native-modal-dropdown';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';

import LeftArrow from '../images/svg/leftArrow.svg'
class Round extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hidePass1: true,
            mobNum: '',
            confirmResult: null,
            textInputValue: '',
            date: "2016-05-15",
            journeyText: '',
            journeyDate: null,
        }
    }

    componentDidMount() {

    }

    onDOBDatePicked = (date) => {
        this.setState({
            dobDate: date,
            dobText: moment(date).format('DD-MMM-YYYY')
        });
    }

    onJourneyDatePress = () => {
        let journeyDate = this.state.journeyDate;

        if (!journeyDate || journeyDate == null) {
            journeyDate = new Date();
            this.setState({
                journeyDate: journeyDate
            });
        }

        //To open the dialog
        this.refs.journeyDialog.open({
            date: journeyDate,
            minDate: new Date() //To restirct past date
        });

    }


    onJourneyDatePicked = (date) => {
        this.setState({
            journeyDate: date,
            journeyText: moment(date).format('DD MMM, YYYY')
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}

                />
                <View style={styles.innerview}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <View  style={styles.image}><LeftArrow /></View></TouchableOpacity>
                    <Text style={styles.logintext}>Enter a Past Round</Text>
                </View>
                <Text style={styles.commonText}>Course</Text>
                <View style={styles.commonView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Select your course" />
                    <Image source={require('../images/search.png')} style={styles.searchImg} resizeMode='contain' />

                </View>
                <Text style={styles.commonText1}>Select a Tee</Text>
                <View style={styles.commonView}>
                    <ModalDropdown
                        style={styles.modaldropdown}
                        defaultValue="Select a Tee"
                        dropdownStyle={styles.dropdownStyle}
                        dropdownTextStyle={styles.dropdownTextStyle}
                        textStyle={styles.textStyle}
                        options={['option 1', 'option 2']} />
                </View>

                <Text style={styles.commonText1}>Select a Tee</Text>
                <View style={styles.gender}>
                    <TouchableOpacity style={styles.male}>
                        <Text style={styles.femaletext}>18 Holes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.male}>
                        <Text style={styles.femaletext}>Front 9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.male}>
                        <Text style={styles.femaletext}>Back 9</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.score}>My Score</Text>
                <View style={styles.scoreView}>
                    <TextInput
                        style={styles.scoreText}
                        placeholder="Enter total score" />

                </View>

                <Text style={styles.score}>Date</Text>
                <View style={styles.dateView}>
                    <TouchableOpacity onPress={this.onJourneyDatePress.bind(this)} >
                        <View style={styles.datePickerBox}>
                            <Text style={styles.datePickerText}>{this.state.journeyText}</Text>
                            <Image source={require('../images/calendar.jpeg')} style={styles.calendarImg} />
                        </View>
                    </TouchableOpacity>
                    <DatePickerDialog ref="journeyDialog" onDatePicked={this.onJourneyDatePicked.bind(this)} />
                </View>



                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Practice')}>
                    <Text style={styles.signtext}>Save</Text>
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
        height: moderateScale(40),
        backgroundColor: '#24B775',
        margin: verticalScale(18),
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute',
        bottom: 10
    },
    logintext: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        marginTop: verticalScale(35),
        marginLeft: '20%'
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
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    email: {
        color: '#24B775',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    
    image: {
        marginTop: verticalScale(35),
        width: scale(20),
        height: scale(20),
        marginLeft: verticalScale(20),
    },
    innerview: {
        flexDirection: 'row',
        marginTop: verticalScale(20)
    },
    gender: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 5,
    },
    male: {
        width: '26%',
        borderWidth: 1,
        borderRadius: 5,
        height: 44,
        borderColor: '#D8D8D8'
    },
    femaletext: {
        alignSelf: 'center',
        color: '#707070',
        margin: 10
    },
    signtext: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 14,
        fontFamily: "Poppins-Medium",
    },
    commonText: {
        marginLeft: 20,
        marginTop: 35,
        color: '#707070'
    },
    commonText1: {
        marginLeft: 20,
        marginTop: 20,
        color: '#707070'
    },
    commonView: {
        width: '90%',
        height: 40,
        borderRadius: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: '#D8D8D8',
        borderWidth: 1, marginTop: 5
    },
    textInput: {
        color: '#707070',
        justifyContent: 'flex-start',
        margin: 1, marginLeft: 10
    },
    searchImg: {
        width: 16,
        height: 16,
        position: 'absolute',
        bottom: 12,
        right: 12
    },
    score: {
        marginLeft: 20,
        marginTop: 20,
        color: '#707070'
    },
    scoreView: {
        width: '90%',
        height: 40,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 5,
        marginLeft: 20,
        flexDirection: 'row',
        borderColor: '#D8D8D8',
        borderWidth: 1,
        marginRight: 20
    },
    scoreText: {
        color: '#707070',
        justifyContent: 'flex-start',
        margin: 1,
        marginLeft: 10
    },
    container1: {
        flex: 1,
        paddingTop: 10,

    },
    modaldropdown: {
        marginLeft: 15,
        marginTop: 10,
    },
    dropdownStyle: {
        width: '83%',
        backgroundColor: '#FFFFFF'
    },
    dropdownTextStyle: {
        backgroundColor: '#FFFFFF'
    },
    textStyle: {
        color: '#707070'
    },
    dateView: {
        width: '90%',
        height: 40,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 5,
        marginLeft: 20,
        borderColor: '#D8D8D8',
        marginRight: 20,
        borderWidth: 1
    },
    datePickerBox: {
        marginTop: 1,
        borderColor: '#ABABAB',
        padding: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: 38,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    datePickerText: {
        fontSize: 14,
        marginLeft: 5,
        marginTop: 6,
        color: '#121212',
    },
    calendarImg: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 10
    }
});

export default Round;

