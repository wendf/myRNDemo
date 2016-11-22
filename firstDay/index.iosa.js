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
        <Text style={styles.text} >
          1
        </Text>
        <Text style={styles.text} >
          2
        </Text>
        <Text style={styles.text} >
          3
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#ffffff',
    backgroundColor: '#000000',
    textAlign: 'center',
    width: 40,
    height: 40,
    margin: 20
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('myRNDemo', () => myRNDemo);
