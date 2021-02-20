import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SettingScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            emailId: '',
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            docId: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <MyHeader 
                title={"Settings"}
                />
            <View style={styles.center}>
            <TextInput
                placeholder={'First Name'}
                style={styles.textInput1}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                });}}>
                </TextInput>
                <TextInput
                placeholder={'Last Name'}
                style={styles.textInput1}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                });}}>
                </TextInput>
                <TextInput
                placeholder={'Address'}
                multiline={true}
                style={styles.textInput2}
                onChangeText={(text) => {
                  this.setState({
                    address: text,
                });}}>
                </TextInput>
                <TextInput
                placeholder={'Phone Number'}
                keyboardType={'numeric'}
                style={styles.textInput1}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                });}}>
                </TextInput>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
                </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput1: {
    borderWidth: 2,
    width: '60%',
    height: 50,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
    marginLeft: 30,
  },
  textInput2: {
    borderWidth: 2,
    width: '60%',
    height: 70,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
    marginLeft: 30,
  },
  saveButton: {
    backgroundColor: '#94ebaf',
    width: 100,
    height: 50,
    alignText: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  text: {
    fontSize: 15, 
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
