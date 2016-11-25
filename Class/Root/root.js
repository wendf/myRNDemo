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
  NavigatorIOS,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';

import view1 from '../components/view1';
import textInput from '../components/textInput';

class root extends Component{
  render(){
    return(
      <NavigatorIOS ref="nav" style={styles.container} translucent={false} initialRoute={{
        component: HomeScene,
        title: '导航',
      }}/>
    );
  }
}
class HomeScene extends Component{
  onPress() {
      this.props.navigator.push({
          title: '从TouchableOpacity导航到该页面',
          component: view1
      });
  }
  textinput(){
    this.props.navigator.push({
      title:'TextInput',
      component: textInput
    });
  }
    render() {
        return (
            <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Text>欢迎使用NavigatorIOS Demo. 点击导航!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.textinput.bind(this)}>
                    <Text style = {styles.textinput}>点击进入TextInput</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column'
    },
    scene: {
        padding: 10,
        paddingTop: 74,
        flex: 1
    },
    textinput: {
      paddingTop:50,
    }
});
// export default root;
module.exports = root;
