/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 //  Navigator组件
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
  TouchableOpacity,
} from 'react-native';
//initialRoute:数据
//renderScene:UI
//push pop


class myRNDemo extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    const routes = [
      {title: '第一页', index:0},
      {title: '第二页', index:1}
    ];
    return(
      <Navigator
        initialRoute={routes[0]}
        renderScene={(route, navigator) =>
          <TouchableOpacity onPress={()=> {
              if (route.index == 0) {
                // 第一页导航到第二页
                navigator.push(routes[1]);
              }else {
                navigator.pop();
              }
            }
          }>
          <Text>这是 {route.title}</Text>
          </TouchableOpacity>
        }
        style={{padding: 100}}
      />

    );
  }
}

const styles = StyleSheet.create({
  input:{
    height:50,
    borderWidth:1,
    margin:5,
    paddingLeft:5,
    borderColor:'#ccc',
    borderRadius:4
  }


});

AppRegistry.registerComponent('myRNDemo', () => myRNDemo);
