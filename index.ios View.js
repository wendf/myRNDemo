/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//View
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';

 class myRNDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.center]}>
          <Text style={styles.font}>机票</Text>
        </View>
        <View style={[styles.item, styles.lineLeftRight]}>
          <View style={[styles.center,{flex:1},styles.lineCenter]}>
            <Text style={styles.font}>火车票</Text>
          </View>
          <View style={[styles.center,{flex:1},styles.lineCenter]}>
            <Text style={styles.font}>买票</Text>
          </View>
        </View>
        <View style={[styles.item, styles.lineLeftRight]}>
          <View style={[styles.center,{flex:1},styles.lineCenter]}>
            <Text style={styles.font}>火车票</Text>
          </View>
          <View style={[styles.center,{flex:1},styles.lineCenter]}>
            <Text style={styles.font}>买票</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item:{
    flex:1,
    height:80,
    borderColor:'blue',
    borderWidth:1,
    backgroundColor:'#ff0067'
  },
  container: {
    borderWidth:1,
    borderColor:'red',
    flexDirection:'row',
    marginTop:40,
    marginLeft:20,
    marginRight:20,
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff'
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  }
});

AppRegistry.registerComponent('myRNDemo', () => myRNDemo);
