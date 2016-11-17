/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image

} from 'react-native';

 class myRNDemo extends Component {
  render() {
    return (
      <View style={styles.flexContainer} >
        <Text style={styles.text}>
          你好啊，呵\啊a  a a 呵
        </Text>
      {/*  <Text style={styles.text}>
          2
        </Text>
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#f19317',
    backgroundColor: '#dfdfdf',
    textAlign: 'center',
    margin: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    // alignItems: 'center'
    // flexWrap: 'wrap'
    justifyContent:'space-around'
  }
});

AppRegistry.registerComponent('myRNDemo', () => myRNDemo);
