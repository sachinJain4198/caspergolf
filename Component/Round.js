import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, TextInput } from 'react-native';
import { scale, verticalScale, moderateScale } from '../Component/Scale';
import ModalDropdown from 'react-native-modal-dropdown';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';
import LeftArrow from '../images/svg/leftArrow.svg';

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
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.image}><LeftArrow />
                    </TouchableOpacity>
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



                <TouchableOpacity style={styles.loginButton}>
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
        height: verticalScale(40),
        backgroundColor: '#24B775',
        margin: moderateScale(18),
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute',
        bottom: moderateScale(10)
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
        marginTop: moderateScale(30)
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
        marginTop: moderateScale(10),
        color: '#000000',
        fontWeight: "bold"
    },
    email: {
        color: '#24B775'
    },
    image: {
        marginTop: moderateScale(35),
        width: scale(20),
        height: verticalScale(20),
        marginLeft: moderateScale(20),
    },
    innerview: {
        flexDirection: 'row',
        marginTop: moderateScale(20)
    },
    gender: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: moderateScale(5),
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
        color: 'white',

    },
    commonText: {
        marginLeft: moderateScale(20),
        marginTop: moderateScale(35),
        color: '#707070'
    },
    commonText1: {
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20),
        color: '#707070'
    },
    commonView: {
        width: '90%',
        height: verticalScale(40),
        borderRadius: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: '#D8D8D8',
        borderWidth: 1,
        marginTop: moderateScale(5)
    },
    textInput: {
        color: '#707070',
        justifyContent: 'flex-start',
        margin: moderateScale(1),
        marginLeft: moderateScale(10)
    },
    searchImg: {
        width: scale(16),
        height: verticalScale(16),
        position: 'absolute',
        bottom: moderateScale(12),
        right: moderateScale(12)
    },
    score: {
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20),
        color: '#707070'
    },
    scoreView: {
        width: '90%',
        height: verticalScale(40),
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: moderateScale(5),
        marginLeft: moderateScale(20),
        flexDirection: 'row',
        borderColor: '#D8D8D8',
        borderWidth: 1,
        marginRight: moderateScale(20)
    },
    scoreText: {
        color: '#707070',
        justifyContent: 'flex-start',
        margin: moderateScale(1),
        marginLeft: moderateScale(10)
    },
    container1: {
        flex: 1,
        paddingTop: moderateScale(10),

    },
    modaldropdown: {
        marginLeft: moderateScale(15),
        marginTop: moderateScale(10),
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
        height: verticalScale(40),
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: moderateScale(5),
        marginLeft: moderateScale(20),
        borderColor: '#D8D8D8',
        marginRight: moderateScale(20),
        borderWidth: 1
    },
    datePickerBox: {
        marginTop: moderateScale(1),
        borderColor: '#ABABAB',
        padding: moderateScale(0),
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: verticalScale(38),
        justifyContent: 'center',
        flexDirection: 'row'
    },
    datePickerText: {
        fontSize: 14,
        marginLeft: moderateScale(5),
        marginTop: moderateScale(6),
        color: '#121212',
    },
    calendarImg: {
        width: scale(30),
        height: verticalScale(30),
        position: 'absolute',
        right: moderateScale(10)
    }
});

export default Round;

