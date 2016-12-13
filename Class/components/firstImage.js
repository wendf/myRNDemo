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

      
      <View style={styles.view}>
            <Image style = {styles.image} source = {require('../../images/food.jpg')}/>
            <Image
              style = {styles.image2}
              source={{uri: 'https://pic2.zhimg.com/641f400041926d8dc80df9faa3e7b6c5_b.jpg'}}
              />
      </View>
    );
  }
}

//  flexbox布局
const styles = StyleSheet.create({
  image: {
    resizeMode:'stretch',
    marginTop: 10,
  },
  image2: {
    marginTop: 10,
    marginLeft:10,
    width:300,
    height:200,
  },
  view:{
    flex: 1,
    alignItems: 'center',
    marginTop:10,
  }
});
module.exports = firstImage;
