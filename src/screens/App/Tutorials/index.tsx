import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
//import VideoPlayer from 'react-native-video-player';
import HeaderCommon from '../../../ui/HeaderCommon';
import BlueButton from '../../../ui/BlueButton';
import styles from '../../Auth/Login/styles';
const VIMEO_ID = '179859217';

export default class Tutorial extends Component {
  constructor() {
    super();

    this.state = {
      video: {width: undefined, height: undefined, duration: undefined},
      thumbnailUrl: undefined,
      videoUrl: undefined,
    };
  }

  componentDidMount() {
    global
      .fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        }),
      );
  }

  render() {
    return (
      <>
        <HeaderCommon
          //    leftIcon={menu}
          //  leftCallBack={() => Alert.alert('Add Pressed')}
          showLeftIcon={false}
          title={'Tutorial'}
          isAddOrPdfHeader={false}
          //    addOrPdfIcon={add}
          //     addOrPdfPress={() => Alert.alert('Add Pressed')}
          isSearchHeader={false}
          // searchIcon={search}
          // searchPhrase={SearchPhrase}
          // setSearchPhrase={setSearchPhrase}
        />
        {/* <VideoPlayer
          endWithThumbnail
          //    thumbnail={{uri: this.state.thumbnailUrl}}
          video={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          videoWidth={this.state.video.width}
          videoHeight={this.state.video.height}
          duration={
            this.state.video.duration
          }
          ref={r => (this.player = r)}
        /> */}

        <View style={styles.lognDivPlayer}>
          <BlueButton
            text="Stop"
            //     disabled={!isValid}
            onPress={()=>this.player.stop()}
          />
        </View>
        <View style={styles.lognDivPlayer}>
          <BlueButton
            text="Pause"
            //     disabled={!isValid}
            onPress={()=>this.player.pause()}
          />
        </View>
        <View style={styles.lognDivPlayer}>
          <BlueButton
            text="Resume"
            //     disabled={!isValid}
            onPress={()=>this.player.resume()}
          />
        </View>

        {/* <Button onPress={() => this.player.stop()} title="Stop" /> */}
        {/* <Button onPress={() => this.player.pause()} title="Pause" />
        <Button onPress={() => this.player.resume()} title="Resume" /> */}
      </>
    );
  }
}
// import React, {useState, useContext, useEffect, useRef} from 'react';
// import {StyleSheet, Image, View, Text, Dimensions} from 'react-native';

// import aboutpic from '../../../assets/_Drawer/aboutpic.jpg';
// import HeaderCommon from '../../../ui/HeaderCommon';
// import colors from '../../../theme/colors';
// import rfSpacing from '../../../theme/rfSpacing';
// import VideoPlayer from 'react-native-video-player';
// export const Tutorial = ({navigation}: any) => {
//   return (
//     <View style={{flex: 1}}>
//       <HeaderCommon
//         //    leftIcon={menu}
//         //  leftCallBack={() => Alert.alert('Add Pressed')}
//         showLeftIcon={false}
//         title={'Tutorial'}
//         isAddOrPdfHeader={false}
//         //    addOrPdfIcon={add}
//         //     addOrPdfPress={() => Alert.alert('Add Pressed')}
//         isSearchHeader={false}
//         // searchIcon={search}
//         // searchPhrase={SearchPhrase}
//         // setSearchPhrase={setSearchPhrase}
//       />
//       <VideoPlayer
//         video={{
//           uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//         }}
//         videoWidth={200}
//         videoHeight={200}
//    //     ref={r => player = r}
//        // thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundVideo: {
//     position: 'absolute',
//     top: 150,
//     left: 20,
//     bottom: 0,
//     right: 20,
//   },
//   imgStyle: {
//     width: rfSpacing['3H'],
//     alignSelf: 'center',
//     marginTop: rfSpacing['4xl'],
//     borderRadius: rfSpacing.m,
//     height: rfSpacing['2H'],
//   },

//   textHeadDiv: {
//     marginTop: rfSpacing.m,
//   },
//   textDiv: {
//     bordrWidth: rfSpacing.m,
//     marginVertical: rfSpacing.m,
//   },
//   txtStyle: {
//     color: colors.grey,
//     fontSize: rfSpacing.l,
//     marginHorizontal: rfSpacing.xxl,
//   },
//   headStyle: {
//     color: colors.fetGreen,
//     fontSize: rfSpacing['3xl'],
//     fontWeight: '700',
//     marginHorizontal: rfSpacing.xxl,
//   },
// });
