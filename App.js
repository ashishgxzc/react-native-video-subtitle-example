/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Video, { TextTrackType } from 'react-native-video';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Video 
          controls
          ref={videoRef => (this.videoRef = videoRef)}
          useTextureView={false}
          source={{ uri:  '' }} // <---- your video url. user require() for local files 
          resizeMode="contain"           // Fill the whole screen at aspect ratio.
          style={styles.fullScreen}
          selectedTextTrack={{
            type: 'title',
            value: 'English',
          }}
          textTracks={[
            {
              index: 0,
                title: "English",
                language: "en",
                type: TextTrackType.SRT, // subitle file type
                uri: '' // subititle file url
            },
        ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
