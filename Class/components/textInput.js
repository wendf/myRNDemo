
//  TextInput组件：基础知识

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

class textInput extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      name:'onChangeText测试'
    }
  }
  render() {
    return (
      <View>
         <Text style={{color:'#00F', marginLeft:5, marginTop:30}}>
             请输入姓名
         </Text>
         <TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} placeholder='请输入用户名' placeholderTextColor='#F00'/>
         <TextInput style={styles.input} autoCorrect={false} autoFocus={true} returnKeyType='next'
         maxLength={500} multiline={true}/>
         <Text style={{color:'#00F', marginLeft:5, marginTop:10}}>
             请输入数字
         </Text>
         <TextInput style={styles.input} keyboardType = 'numeric'/>
         <Text style={{color:'#00F', marginLeft:5, marginTop:10}}>
             请输入电话号
         </Text>
         <TextInput style={styles.input} keyboardType = 'phone-pad'/>
         <Text style={{color:'#00F', marginLeft:5, marginTop:10}}>
             WebSearch
         </Text>
         <TextInput style={styles.input} keyboardType = 'web-search' selectionColor='#0FF' selectTextOnFocus={true}/>

         <TextInput style={styles.input} placeholder='请输入密码' secureTextEntry={true}/>
         <TextInput style={styles.input} editable={true} clearButtonMode='always' clearTextOnFocus={true} defaultValue='hello'/>
         <TextInput style={styles.input} onChange={this.onChange} defaultValue='onChange测试'/>
         <TextInput style={styles.input} onChangeText={this.onChangeText.bind(this)} defaultValue='onChangeText测试'/>
         <Text style={{marginLeft:5, marginTop:10}} onPress={this.showName.bind(this)}>
             获取输入的值
         </Text>
      </View>
    );
  }
  onChange()
  {
    console.info('onChange');
  }
  onChangeText(text)
  {
    console.info(text);
    this.setState(
        {
          name:text
        }
    )
  }
  showName(){
    console.info(this.state.name);
  }


}
//  flexbox布局
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

module.exports = textInput;
