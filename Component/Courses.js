import React from 'react';

import { View, StyleSheet, Text, TextInput, StatusBar, ScrollView, TouchableOpacity, Image, TouchableNativeFeedback } from 'react-native';
import { scale, verticalScale, moderateScale } from '../Component/Scale';
import Modal from 'react-native-modal';


export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalvisible: false,
            text: '',
        };

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar
                        hidden={true}
                    />

                    <View style={styles.courseView}>
                        <Text style={styles.courseText}>COURSES</Text>
                        <View style={styles.imageView}>
                            <Image source={require('../images/bell.png')} style={styles.bellImg} resizeMode='contain' />
                        </View>
                        <View style={styles.playView}>
                            <Text style={styles.playText}>Play</Text>
                        </View>
                    </View>
                    <Image source={require('../images/golficon.jpeg')} style={styles.golfImg} />
                    <View style={styles.saveView}>
                        <Text style={styles.saveText}>Save more with premium</Text>
                        <Text style={styles.save}>Save up to 20 on tee times.</Text>
                    </View>

                    <Image source={require('../images/map.jpeg')} style={styles.mapImg} />
                    <View style={styles.innerview1}>
                        <TextInput
                            style={styles.textinput}
                            placeholder="Search by name, city or state" />
                        <Image source={require('../images/search.png')} style={styles.searchImg} resizeMode='contain' />

                    </View>
                    <View style={styles.innerView2}>
                        <Text style={styles.commonText1}>Bhalswa Golf Course</Text>
                        <View style={styles.commonView2}>
                            <Image source={require('../images/location.jpeg')} style={styles.locationImg} resizeMode='contain' />
                            <Text style={styles.commonText2}>4.1 miles</Text>
                            <Image source={require('../images/star.png')} style={styles.starImg} resizeMode='contain' />
                            <Text style={styles.commonText3}>4.0</Text>
                        </View>
                    </View>
                    <View style={styles.alwaysView}>
                        <Text style={styles.commonText1}>Airways Golf Club</Text>
                        <View style={styles.commonView2}>
                            <Image source={require('../images/location.jpeg')} style={styles.locationImg} resizeMode='contain' />
                            <Text style={styles.commonText2}>3.8 miles</Text>
                            <Image source={require('../images/star.png')} style={styles.starImg} resizeMode='contain' />
                            <Text style={styles.commonText3}>4.0</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', position: 'absolute', top: '250%', width: '50%', marginLeft: 40, height: 50, borderRadius: 5, }}>
                        <Text style={styles.commonText1}>Admiral Baker Golf Course</Text>
                        <View style={styles.commonView2}>
                            <Image source={require('../images/location.jpeg')} style={styles.locationImg} resizeMode='contain' />
                            <Text style={styles.commonText2}>3.8 miles</Text>
                            <Image source={require('../images/star.png')} style={styles.starImg} resizeMode='contain' />
                            <Text style={styles.commonText3}>4.0</Text>
                        </View>
                    </View>

                    <View style={styles.mapView}>
                        <View style={styles.golfView}>
                            <Image source={require('../images/golf.png')} style={styles.newImg} resizeMode='contain' />
                            <Text style={styles.newText}>Tee Times {'\n'} Nearby</Text>
                        </View>
                        <View style={styles.newView}>
                            <Image source={require('../images/hot-sale.png')} style={styles.newImg} resizeMode='contain' />
                            <Text style={styles.newText}>Tee Times {'\n'} Deals</Text>
                        </View>
                        <View style={styles.sameView}>
                            <Image source={require('../images/calendaricon.png')} style={styles.newImg} resizeMode='contain' />
                            <Text style={styles.newText}>Tee Times {'\n'} Reservations</Text>
                        </View>
                        <View style={styles.sameView}>
                            <Image source={require('../images/favorite.png')} style={styles.newImg} resizeMode='contain' />
                            <Text style={styles.newText}>Followed {'\n'} Courses</Text>
                        </View>

                    </View>
                    <View style={styles.interest}>
                        <Text>Courses You May Be Interested In</Text>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>

                </View>
                <ScrollView
                    style={styles.scrollview}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}>
                    <TouchableOpacity style={styles.view1}>
                        <View style={styles.view2}>
                            <Image source={require('../images/home.jpeg')} style={styles.commonImg} />
                            <Text style={styles.commonText}>Airways Golf Club</Text>
                            <View style={styles.view3}>
                                <Image source={require('../images/location.jpeg')} style={styles.image1} />
                                <Text style={styles.colorText}>5440 E Shields Ave,...</Text>
                            </View>
                        </View>
                        <View style={styles.nextview2}>
                            <Image source={require('../images/home.jpeg')} style={styles.commonImg} />
                            <Text style={styles.commonText}>Airways Golf Club</Text>
                            <View style={styles.view3}>
                                <Image source={require('../images/location.jpeg')} style={styles.image1} />
                                <Text style={styles.colorText}>5440 E Shields Ave,...</Text>
                            </View>
                        </View>
                        <View style={styles.nextview2}>
                            <Image source={require('../images/home.jpeg')} style={styles.commonImg} />
                            <Text style={styles.commonText}>Airways Golf Club</Text>
                            <View style={styles.view3}>
                                <Image source={require('../images/location.jpeg')} style={styles.image1} />
                                <Text style={styles.colorText}>5440 E Shields Ave,...</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.view4}>
                    <Text>Private Courses Nearby</Text>
                    <TouchableNativeFeedback onPress={() => this.setState({ modalvisible: true })}>
                        <Image source={require('../images/filter.png')} style={styles.filter} />
                    </TouchableNativeFeedback>
                </View>

                <ScrollView
                    style={styles.scrollview1}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}>
                    <TouchableOpacity style={styles.view1}>
                        <View style={styles.view2}>
                            <Image source={require('../images/home.jpeg')} style={styles.commonImg} />
                            <Text style={styles.commonText}>Airways Golf Club</Text>
                            <View style={styles.view3}>
                                <Image source={require('../images/location.jpeg')} style={styles.image1} />
                                <Text style={styles.colorText}>5440 E Shields Ave,...</Text>
                            </View>
                        </View>
                        <View style={styles.nextview2}>
                            <Image source={require('../images/home.jpeg')} style={styles.commonImg} />
                            <Text style={styles.commonText}>Airways Golf Club</Text>
                            <View style={styles.view3}>
                                <Image source={require('../images/location.jpeg')} style={styles.image1} />
                                <Text style={styles.colorText}>5440 E Shields Ave,...</Text>
                            </View>
                        </View>
                        <View style={styles.nextview2}>
                            <Image source={require('../images/home.jpeg')} style={styles.commonImg} />
                            <Text style={styles.commonText}>Airways Golf Club</Text>
                            <View style={styles.view3}>
                                <Image source={require('../images/location.jpeg')} style={styles.image1} />
                                <Text style={styles.colorText}>5440 E Shields Ave,...</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <Modal
                    visible={this.state.modalvisible}
                    style={styles.modal}
                >
                    <View style={styles.modalView}>
                        <View style={styles.innerView}>
                            <Text style={styles.sortText}>Sort By</Text>
                            <TouchableNativeFeedback onPress={() => this.setState({ modalvisible: false })}>
                                <Image source={require('../images/cancel.png')} style={styles.cancel} ></Image>
                            </TouchableNativeFeedback>

                        </View>

                        <View style={styles.mainView}></View>
                        <TouchableOpacity style={styles.commmonTouch}>
                            <Text style={styles.commonColor}>Private Courses Nearby</Text>
                            <View style={styles.commonline}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.commmonTouch}>
                            <Text style={styles.commonColor}>Public Courses Nearby</Text>
                            <View style={styles.commonline}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.commmonTouch}>
                            <Text style={styles.commonColor}>By Overall Rating</Text>
                            <View style={styles.commonline}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.commmonTouch}>
                            <Text style={styles.commonColor}>By Level of Difficulty</Text>
                            <View style={styles.commonline}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.commmonTouch}>
                            <Text style={styles.commonColor}>By Conditions</Text>
                            <View style={styles.commonline}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.commmonTouch}>
                            <Text style={styles.commonColor}>By Green Speed</Text>
                            <View style={styles.commonline}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.commmonTouch}>
                            <Text style={styles.commonColor}>Youth On Course partners</Text>
                            <View style={styles.commonline}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.signtext}>Apply</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        bottom: moderateScale(0),
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
    commonColor: {
        color: '#000000', 
        fontWeight: "700"
    },
    commmonTouch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: moderateScale(15),
        marginRight: moderateScale(15),
        marginTop: moderateScale(10)
    },
    commonline: {
        backgroundColor: '#FFFFFF',
        width: scale(20),
        height: verticalScale(20),
        borderRadius: 20,
        borderColor: '#0000004F',
        borderWidth: 1
    },
    mainView: {
        height: 1,
        backgroundColor: '#D4D4D4',
        margin: moderateScale(10),
        marginTop: moderateScale(15)
    },
    cancel: {
        width: scale(15),
        height: verticalScale(15),
        position: 'absolute',
        left: moderateScale(330),
        top: moderateScale(5)
    },
    sortText: {
        alignSelf: 'center',
        fontWeight: "700"
    },
    innerView: {
        flexDirection: 'row',
        marginTop: moderateScale(10),
        justifyContent: 'center',
        height: verticalScale(20)
    },
    modalView: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '55%',
        position: 'absolute',
        top: '48%',
        borderRadius: 40
    },
    modal: {
        marginLeft: moderateScale(0),
        marginRight: moderateScale(0),
        backgroundColor: 'rgba(100,100,100, 0.9)'
    },
    scrollview1: {
        marginLeft: moderateScale(10),
        marginTop: moderateScale(10),
        flex: 1
    },
    view1: {
        flexDirection: 'row'
    },
    view2: {
        flexDirection: 'column',
        width: scale(205),
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        height: verticalScale(200),
        justifyContent: 'space-evenly',
        marginLeft: moderateScale(15)
    },
    nextview2: {
        flexDirection: 'column',
        width: scale(205),
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        height: verticalScale(200),
        justifyContent: 'space-evenly',
        marginLeft: moderateScale(50)
    },
    commonImg: {
        width: scale(204),
        height: verticalScale(140),
    },
    commonText: {
        marginLeft: moderateScale(10),
        width: scale(120)
    },
    view3: {
        flexDirection: 'row',
        marginLeft: moderateScale(15)
    },
    image1: {
        width: scale(20),
        height: verticalScale(20)
    },
    colorText: {
        color: '#707070'
    },
    filter: {
        width: scale(20),
        height: verticalScale(20),
        marginLeft: moderateScale(180)
    },
    view4: {
        flexDirection: 'row',
        margin: moderateScale(10),
        marginTop: moderateScale(10)
    },
    image2: {
        width: scale(20),
        height: verticalScale(20)
    },
    view5: {
        marginLeft: moderateScale(30),
        flexDirection: 'column',
        width: '70%',
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    view6: {
        flexDirection: 'column',
        width: '50%',
        borderRadius: 10,
        backgroundColor: '#FFFFFF'
    },
    scrollview: {
        marginLeft: moderateScale(10),
        marginTop: moderateScale(460),
        flex: 1
    },
    courseView: {
        height: verticalScale(50),
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    courseText: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: moderateScale(15),
        marginTop: moderateScale(20)
    },
    imageView: {
        position: 'absolute',
        right: moderateScale(110),
        marginTop: moderateScale(15),
        width: scale(35),
        height: verticalScale(35),
        backgroundColor: '#F2F2F2',
        borderRadius: 50,
        justifyContent: 'center'
    },
    bellImg: {
        width: scale(20),
        height: verticalScale(20),
        alignSelf: 'center'
    },
    playView: {
        backgroundColor: '#24B775',
        position: 'absolute',
        right: moderateScale(10),
        margin: moderateScale(15),
        width: scale(80),
        height: verticalScale(35),
        borderRadius: 45,
        justifyContent: 'center'
    },
    playText: {
        alignSelf: 'center',
        color: '#F2F2F2',
        marginBottom: moderateScale(3),
        fontSize: 14,
        fontWeight: '700'
    },
    golfImg: {
        width: '95%',
        margin: moderateScale(10),
        height: verticalScale(80),
        borderRadius: 5
    },
    saveView: {
        position: 'absolute',
        bottom: moderateScale(40),
        marginLeft: moderateScale(20)
    },
    saveText: {
        color: 'white',
        fontSize: 14
    },
    save: {
        color: 'white'
    },
    mapImg: {
        width: '100%',
        marginTop: moderateScale(10),
        height: '230%'
    },
    innerview1: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: '100%',
        width: '90%',
        height: verticalScale(40),
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: moderateScale(10),
        marginLeft: moderateScale(10),
        flexDirection: 'row'
    },
    textinput: {
        color: '#707070',
        justifyContent: 'flex-start',
        margin: moderateScale(2),
        marginLeft: moderateScale(10)
    },
    searchImg: {
        width:scale(16),
        height:verticalScale(16),
        position: 'absolute',
        bottom:moderateScale(12),
        right: moderateScale(12)
    },
    innerView2: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: '150%',
        width: '50%',
        marginLeft:moderateScale(40),
        height:verticalScale(50),
        borderRadius: 5
    },
    commonText1: {
        marginLeft:moderateScale(10),
        marginTop:moderateScale(10)
    },
    commonView2: {
        flexDirection: 'row',
        marginLeft:moderateScale(10)
    },
    alwaysView: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: '200%',
        width: '50%',
        marginLeft: moderateScale(40),
        height:verticalScale(50),
        borderRadius: 5,
        right: moderateScale(30)
    },
    locationImg: {
        width: scale(15),
        height: verticalScale(15)
    },
    commonText2: {
        color: '#707070',
        fontSize: 12
    },
    starImg: {
        width: scale(15),
        height: verticalScale(15),
        position: 'absolute',
        right: moderateScale(30)
    },
    commonText3: {
        color: '#707070',
        fontSize: 12,
        position: 'absolute',
        right: moderateScale(10),
        alignSelf: 'center'
    },
    mapView: {
        backgroundColor: '#FFFFFF',
        width: '95%',
        height: verticalScale(100),
        position: 'absolute',
        top: '300%',
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    golfView: {
        flexDirection: 'column',
        margin: moderateScale(15)
    },
    newImg: {
        width:scale(30),
        height:verticalScale(30),
        alignSelf: 'center',
    },
    newText: {
        marginTop: moderateScale(10),
        fontSize: moderateScale(10),
        marginLeft: moderateScale(10)
    },
    newView: {
        flexDirection: 'column',
        marginTop: moderateScale(15),
        marginBottom: moderateScale(15),
        marginLeft: moderateScale(5),
        marginRight: moderateScale(5)
    },
    sameView: {
        flexDirection: 'column',
        marginTop: moderateScale(15),
        marginBottom: moderateScale(15),
        marginLeft: moderateScale(10),
        marginRight: moderateScale(5)
    },
    interest: {
        position: 'absolute',
        top: '365%',
        flexDirection: 'row',
        margin: moderateScale(10),
        marginTop: moderateScale(10)
    },
    seeAll: {
        marginLeft: moderateScale(90)
    }
});