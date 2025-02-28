import React, { useState, useContext, useEffect, useRef } from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    Pressable,
    Dimensions,
} from 'react-native';

import colors from '../../../../theme/colors';
import { WSImages } from '../../../../ui/Images';
//import {Socialhandler} from './Socialhandler';
import Modal from "react-native-modal";
import WebView from 'react-native-webview';
import rfSpacing from '../../../../theme/rfSpacing';


export const FullLineChartComp = ({ isModalVisible, toggleModalOut, htmlCode }: any) => {
    return (
        <View style={{ flex: 1 }}>
            <Modal
                style={{ backgroundColor: "white", margin: 0 }}
                isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <View style={styles.imageWraper}>
                        <Pressable
                            onPress={toggleModalOut}
                        >
                            <Image source={WSImages.arrowB} style={{
                                height: rfSpacing['4xl'],
                                width: rfSpacing['4xl'],
                            }} />
                        </Pressable>
                    </View>

                    <WebView
                        source={{ html: htmlCode }}
                        originWhitelist={['*']}
                        style={{ flex: 1 }}
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    imgStyle: {
        width: rfSpacing['3H'],
        height: rfSpacing['2H'],
        alignSelf: 'center',
        //   marginTop: rfSpacing['4xl'],
        //   borderRadius: rfSpacing.m,
    },
    imageWraper: {
        marginHorizontal: rfSpacing.l,
        marginTop: rfSpacing.l,
        backgroundColor: colors.fetWhite,
        padding: rfSpacing.xxl,
        flexDirection: 'row',
    },
    textHeadDiv: {
        marginTop: rfSpacing.m,
    },
    textDiv: {
        //  bordrWidth: rfSpacing.m,
        marginVertical: rfSpacing.m,
    },
    txtStyle: {
        color: colors.grey,
        fontSize: rfSpacing.l,
        marginHorizontal: rfSpacing.xxl,
        marginVertical: rfSpacing.xs,
    },
    headStyle: {
        color: colors.fetGreen,
        fontSize: rfSpacing['3xl'],
        fontWeight: '700',
        marginHorizontal: rfSpacing.xxl,
    },
});
