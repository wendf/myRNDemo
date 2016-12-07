//  Image组件

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class firstImage extends Component {
  render(){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:0}}>
            <Image style = {styles.image} source = {require('../../images/food.jpg')}/>
      </View>

    );
  }
}

//  flexbox布局
const styles = StyleSheet.create({
  image: {
    resizeMode:'stretch',
  }
});
module.exports = firstImage;
