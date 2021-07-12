import React, { useState, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import Google from '../images/svg/google.svg'
import Facebook from '../images/svg/facebook.svg'
export default function SocialButton(props) {

    return (
        <>
            {props.type == "google" ?
                <Google style={styles.socialButton} />
                :
                <>{props.type == "facebook" ?
                    <Facebook style={styles.socialButton} />
                    : <View></View>}</>
            }
        </>
    );
}

const styles = StyleSheet.create({
    socialButton: {
        height: 44,
        flex: 1,
        flexDirection: 'row',
        width: 160,
        maxWidth: "40%",
    },
});