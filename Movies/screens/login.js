/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

    myFun = () => {
    const {email, password} = this.state;
    if (email == '') {
      this.setState({Error: 'please fill correct email'});
    } else if (password == '') {
      this.setState({Error: 'please fill the password'});
    } else if (password.length < 6) {
      this.setState({Error: 'Enter correct minimum 6 digit password'});
    } else {
      this.setState({Error: 'You are Logged in successfully'});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../images/register_top.png')}
          resizeMode="stretch"
          style={styles.image}>
        </ImageBackground>
        <Image source={require('../images/image logo.png')}>
        </Image>
        <Text>{this.state.Error}</Text>

        <TextInput
          placeholder="E-Mail"
          style={styles.myText}
          onChangeText={email => this.setState({email})}
        />

        <TextInput
          placeholder="Password"
          style={styles.myText}
          onChangeText={password => this.setState({password})}
        />

        <TouchableOpacity
          onPress={this.myFun}
          style={{
            backgroundColor: '#FF8C00',
            borderWidth: 1,
            margin: 10,
            padding: 10,
            width: '90%',
            borderRadius: 40,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    height: '65%',
    top: 0,
    left: 0,
    right:0,
  },

 logo:{
    top: 65,
    justifyContent: 'center',
    alignContent:'center',
    height: 170,
    width: 170,
  },
  myText: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    padding: 10,
    width: '90%',
    borderRadius: 40,
  },
});
