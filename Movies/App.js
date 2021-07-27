/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
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
      name: '',
      email: '',
      number: '',
      password: '',
    };
  }
  myFun = () => {
    const {name, email, number, password} = this.state;
    if (name == '') {
      this.setState({Error: 'please fill your Full Name'});
    } else if (email == '') {
      this.setState({Error: 'please fill your E-Mail'});
    } else if (number == '') {
      this.setState({Error: 'please fill your Mobile Number'});
    } else if (number.length < 10) {
      this.setState({Error: 'Please Enter standard 10 digit number'});
    } else if (password == '') {
      this.setState({Error: 'please fill your desired Password'});
    } else if (password.length < 6) {
      this.setState({Error: 'password  must be more than 6 letters'});
    } else {
      this.setState({Error: 'Sign up successfully'});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../Movies/images/register_top.png')}
          resizeMode="stretch"
          style={styles.image}>
        </ImageBackground>
        <Image source={require('../Movies/images/image123.png')} style={styles.logo}>
        </Image>
        <Text>{this.state.Error}</Text>

        <View style={styles.textbox}>
        <TextInput
          placeholder="Full Name"
          style={styles.myText}
          onChangeText={name => this.setState({name})}
        />
        <TextInput
          placeholder="E-Mail"
          style={styles.myText}
          onChangeText={email => this.setState({email})}
        />

        <TextInput
          placeholder="Mobile Number"
          style={styles.myText}
          onChangeText={number => this.setState({number})}
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
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            SIGNUP
          </Text>
        </TouchableOpacity>

        <Text>Or</Text>
        <TouchableOpacity
          onPress={this.myFun}
          style={{
            borderWidth: 0.2,
            margin: 10,
            padding: 10,
            width: '90%',
            borderRadius: 40,
          }}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 17,
            }}>
            SignUp with Google
          </Text>
        </TouchableOpacity>
      </View>
       <Text style={{
          bottom:'20',
       }}>Already have an account ? </Text>
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
    textbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
   image: {
    //flex: 1,
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
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
