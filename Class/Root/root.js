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

    render() {
        return (
            <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Text>欢迎使用NavigatorIOS Demo. 点击导航!</Text>
                </TouchableOpacity>
            </View>
        );
    }
    onPress() {
        this.props.navigator.push({
            title: '从TouchableOpacity导航到该页面',
            component: view1
        });
    }
}

const styles = StyleSheet.create({
  container: {
        flex: 1
    },
    scene: {
        padding: 10,
        paddingTop: 74,
        flex: 1
    }

});
// export default root;
module.exports = root;
