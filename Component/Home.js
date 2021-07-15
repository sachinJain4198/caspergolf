import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View, ScrollView, TouchableOpacity, TextInput, StatusBar, TouchableNativeFeedback
} from 'react-native';
import { Card } from 'react-native-elements';
import Modal from 'react-native-modal';
import { scale, verticalScale, moderateScale } from '../Component/Scale';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalvisible: false,
      text: ''
    };
  }
  handletext = (text) => {
    this.setState({ text: text })
  }
  render() {
    return (
      <ScrollView>

        <View style={styles.container}>
          <StatusBar
            hidden={true}

          />

          <View style={styles.innerView}>
            <Text style={styles.casper}>CASPER GOLF</Text>
            <View style={styles.view1}>
              <Image source={require('../images/bell.png')} style={styles.bellImg} resizeMode='contain' />
            </View>
            <View style={styles.playView}>
              <Text style={styles.playText}>Play</Text>
            </View>
          </View>

          <View style={styles.line1}></View>
          <View style={styles.cardView}>
            <Image source={require('../images/home.jpeg')} style={styles.homeImg} />
            <View style={styles.innetText}>
              <Text style={styles.textStyle}>Martin Kaymer</Text>
              <Text style={{ color: '#707070' }}>4h ago</Text>
            </View>
          </View>

          <Card.Image source={require('../images/home.jpeg')} style={{ marginTop: 10 }}>
          </Card.Image>
          <Text style={styles.newText}>
            Ready to dive into your stats and understand where and how to most efficiently improve your game? Below is your to-do list for the week.    </Text>
          <View style={styles.line2}></View>
          <View style={styles.sameCard}>
            <Image source={require('../images/heart.png')} style={styles.heartImg}></Image>
            <Text style={styles.unlikeText}>Unlike</Text>
            <Image source={require('../images/comment.png')} style={styles.commentImg} resizeMode='contain'></Image>
            <Text style={styles.unlikeText}>Comment</Text>
          </View>

          <View style={styles.cardView}>
            <Image source={require('../images/home.jpeg')} style={styles.homeImg} />
            <View style={styles.roganText}>
              <Text>Reagan Roth at <Text style={{ color: '#24B775' }}>Arrowhead</Text>.</Text>
              <Text style={{ color: '#707070' }}>1 day ago</Text>
            </View>
          </View>


          <Card.Image source={require('../images/home.jpeg')} style={{ marginTop: 10 }}>
          </Card.Image>
          <Text style={styles.newText}>
            Want to know why golf has struggled to grow? The answer is simple: It's a difficult sport to play – and even harder to learn.    </Text>
          <View style={styles.line2}></View>
          <TouchableOpacity style={styles.notesView} onPress={() => this.setState({ modalvisible: true })}>
            <Image source={require('../images/notes.png')} style={styles.notesImg} resizeMode='contain'></Image>
          </TouchableOpacity>


          <View style={styles.sameCard}>
            <Image source={require('../images/heart.png')} style={styles.heartImg}></Image>
            <Text style={styles.unlikeText}>Unlike</Text>
            <Image source={require('../images/comment.png')} style={styles.commentImg} resizeMode='contain'></Image>
            <Text style={styles.unlikeText}>Comment</Text>
          </View>


          <Modal
            visible={this.state.modalvisible}
            style={styles.modal}
          >
            <View style={styles.modalView}>
              <View style={styles.modalInner}>
                <Text style={styles.modalText}>Create Post</Text>
                <TouchableNativeFeedback onPress={() => this.setState({ modalvisible: false })}>
                  <Image source={require('../images/cancel.png')} style={styles.cancelImg} ></Image>
                </TouchableNativeFeedback>

              </View>
              <View style={styles.line}></View>
              <TextInput
                style={styles.modalTextView}
                placeholder="Write something..."
                value={this.state.text}
                onChangeText={this.handletext}
              />
              <View style={styles.lastView}>
                <View style={styles.imageView}>
                  <Image source={require('../images/comment.png')} style={styles.comment} resizeMode='contain'></Image>
                </View>
                <View style={styles.imageView}>
                  <Image source={require('../images/comment.png')} style={styles.comment} resizeMode='contain'></Image>
                </View>
                <View style={styles.imageView}>
                  <Image source={require('../images/comment.png')} style={styles.comment} resizeMode='contain'></Image>
                </View>

              </View>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.signtext}>Post</Text>
              </TouchableOpacity>
            </View>
          </Modal>

        </View>

      </ScrollView>

    );
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
  innerView: {
    height: verticalScale(50),
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  casper: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: moderateScale(15),
    marginTop: moderateScale(20)
  },
  view1: {
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
    right: moderateScale(5),
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
  cardView: {
    flexDirection: 'row',
    marginTop: moderateScale(30)

  },
  homeImg: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#24B775',
    marginLeft: moderateScale(20)
  },
  innetText: {
    flexDirection: 'column',
    marginLeft: moderateScale(10)
  },
  sameCard: {
    flexDirection: 'row',
    marginTop: moderateScale(10)
  },
  heartImg: {
    width: scale(20),
    height: verticalScale(20),
    marginLeft: moderateScale(20)
  },
  unlikeText: {
    marginLeft: moderateScale(10),
    color: '#707070'
  },
  commentImg: {
    width: scale(20),
    height: verticalScale(20),
    marginLeft: moderateScale(10)
  },
  roganText: {
    flexDirection: 'column',
    marginLeft: moderateScale(10)
  },
  notesView: {
    position: 'absolute',
    bottom: '8%',
    right: moderateScale(10),
    backgroundColor: '#24B775',
    width: '16%',
    height: '9%',
    borderRadius: 80
  },
  notesImg: {
    width: scale(30),
    height: verticalScale(30),
    alignSelf: 'center',
    marginTop: moderateScale(15),
    marginLeft: moderateScale(5)
  },
  modal: {
    marginLeft: moderateScale(0),
    marginRight: moderateScale(0),
    backgroundColor: 'rgba(100,100,100, 0.9)',
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '80%',
    position: 'absolute',
    top: '23%',
    borderRadius: 40
  },
  modalInner: {
    flexDirection: 'row',
    marginTop: moderateScale(10),
    justifyContent: 'center',
    height: verticalScale(20)
  },
  modalText: {
    alignSelf: 'center',
    fontWeight: "700"
  },
  cancelImg: {
    width: scale(14),
    height: verticalScale(14),
    position: 'absolute',
    left: moderateScale(330),
    top: moderateScale(5)
  },
  line: {
    height: moderateScale(0.2),
    backgroundColor: '#D4D4D4',
    margin: moderateScale(10),
    marginTop: moderateScale(15)
  },
  modalTextView: {
    marginLeft: moderateScale(10)
  },
  lastView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: moderateScale(70),
    right: moderateScale(20),
    justifyContent: 'space-evenly'
  },
  comment: {
    width: scale(20),
    height: verticalScale(20),
    margin: moderateScale(10)
  },
  imageView: {
    backgroundColor: 'red',
    width: scale(40),
    height: verticalScale(40),
    borderRadius: 50,
    backgroundColor: '#F5F5F5'
  },
  textStyle: {
    fontWeight: "700"
  },
  newText: {
    marginTop: moderateScale(5),
    color: '#707070',
    alignSelf: 'center',
    margin: moderateScale(15)
  },
  line1: {
    marginTop: moderateScale(10),
    borderColor: '#00000029',
    borderWidth: 0.5,
    overflow: 'hidden',
    shadowColor: '#00000029',
    shadowOpacity: 1,
  },
  line2: {
    height: 1,
    backgroundColor: '#EDEDED',
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10)
  },
});

export default Home;