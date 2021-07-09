import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View, ScrollView, TouchableOpacity, TextInput, StatusBar, TouchableNativeFeedback
} from 'react-native';
import { Card } from 'react-native-elements';
import Modal from 'react-native-modal';
import { verticalScale } from 'react-native-size-matters';


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

          <Card>
            <View style={styles.cardView}>
              <Image source={require('../images/home.jpeg')} style={styles.homeImg} />
              <View style={styles.innetText}>
                <Text>Martin Kaymer</Text>
                <Text style={{ color: '#707070' }}>4h ago</Text>
              </View>
            </View>

            {/* <Card.Divider /> */}
            <Card.Image source={require('../images/home.jpeg')} style={{ marginTop: 10 }}>
            </Card.Image>
            <Text style={{ marginTop: 5, color: '#707070' }}>
              Ready to dive into your stats and understand where and how to most efficiently improve your game? Below is your to-do list for the week.    </Text>
          </Card>
          <View style={styles.sameCard}>
            <Image source={require('../images/heart.png')} style={styles.heartImg}></Image>
            <Text style={styles.unlikeText}>Unlike</Text>
            <Image source={require('../images/comment.png')} style={styles.commentImg} resizeMode='contain'></Image>
            <Text style={styles.unlikeText}>Comment</Text>
          </View>
          <Card>
            <View style={styles.cardView}>
              <Image source={require('../images/home.jpeg')} style={styles.homeImg} />
              <View style={styles.roganText}>
                <Text>Reagan Roth at <Text style={{ color: '#24B775' }}>Arrowhead</Text>.</Text>
                <Text style={{ color: '#707070' }}>1 day ago</Text>
              </View>
            </View>

            {/* <Card.Divider /> */}
            <Card.Image source={require('../images/home.jpeg')} style={{ marginTop: 10 }}>
            </Card.Image>
            <Text style={{ marginTop: 5, color: '#707070' }}>
              Want to know why golf has struggled to grow? The answer is simple: It's a difficult sport to play – and even harder to learn.    </Text>
            <TouchableOpacity style={styles.notesView} onPress={() => this.setState({ modalvisible: true })}>
              <Image source={require('../images/notes.png')} style={styles.notesImg} resizeMode='contain'></Image>
            </TouchableOpacity>
          </Card>

          <View style={styles.sameCard}>
            <Image source={require('../images/heart.png')} style={styles.heartImg}></Image>
            <Text style={styles.unlikeText}>Unlike</Text>
            <Image source={require('../images/comment.png')} style={styles.commentImg} resizeMode='contain'></Image>
            <Text style={styles.unlikeText}>Comment</Text>
          </View>


          <Modal
            //  animationType={'fade'}
            //  transparent={true}
            visible={this.state.modalvisible}
            style={styles.modal}
          >
            {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}
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
  innerView: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  casper: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 20
  },
  view1: {
    position: 'absolute',
    right: 110,
    marginTop: 15,
    width: 35,
    height: 35,
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
    justifyContent: 'center'
  },
  bellImg: {
    width: 20,
    height: 20,
    alignSelf: 'center'
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
  playText: {
    alignSelf: 'center',
    color: '#F2F2F2',
    marginBottom: 3,
    fontSize: 14,
    fontWeight: '700'
  },
  cardView: {
    flexDirection: 'row'
  },
  homeImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#24B775'
  },
  innetText: {
    flexDirection: 'column',
    marginLeft: 10
  },
  sameCard: {
    flexDirection: 'row',
    marginTop: 10
  },
  heartImg: {
    width: 20,
    height: 20,
    marginLeft: 20
  },
  unlikeText: {
    marginLeft: 10,
    color: '#707070'
  },
  commentImg: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  roganText: {
    flexDirection: 'column',
    marginLeft: 10
  },
  notesView: {
    position: 'absolute',
    bottom: '8%',
    right: 10,
    backgroundColor: '#24B775',
    width: '18%',
    height: '20%',
    borderRadius: 80
  },
  notesImg: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: 13,
    marginLeft: 5
  },
  modal: {
    marginLeft: 0,
    marginRight: 0,
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
    marginTop: 10,
    justifyContent: 'center',
    height: 20
  },
  modalText: {
    alignSelf: 'center',
    fontWeight: "700"
  },
  cancelImg: {
    width: 14,
    height: 14,
    position: 'absolute',
    left: 350,
    top: 5
  },
  line: {
    height: 0.2,
    backgroundColor: '#D4D4D4',
    margin: 10,
    marginTop: 15
  },
  modalTextView: {
    marginLeft: 10
  },
  lastView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70,
    right: 20,
    justifyContent: 'space-evenly'
  },
  comment: {
    width: 20,
    height: 20,
    margin: 10
  },
  imageView: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#F5F5F5'
  }
});

export default Home;