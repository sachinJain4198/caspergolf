import React, { useState, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
export default function SocialButton(props) {

    return (
        <>
            {props.type == "google" ?
                <View style={styles.socialButton}>
                    <Image
                        style={styles.socialButtonImage}
                        source={require('../images/google.png')}
                    />
                    <Text style={{ ...styles.socialIconText, color: "#666666" }}>
                        Google
                    </Text>

                </View>
                :
                <>{props.type == "facebook" ?
                    <View style={{ ...styles.socialButton, backgroundColor: "#3B5999" }}>
                        <Image
                            style={styles.socialButtonImage}
                            source={require('../images/facebook.png')}
                        />
                        <Text style={{ ...styles.socialIconText, color: "#FFFFFF" }}>
                            Facebook
                        </Text>

                    </View>
                    : <View></View>}</>
            }
        </>
    );
}

const styles = StyleSheet.create({
    socialButtonImage: {
        width: 20,
        height: 20,
        marginRight: 10,
    },

    socialButton: {
        height: 44,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        width: 160,
        maxWidth: "40%",
    },
});