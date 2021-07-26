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
      fname: '',
      lname: '',
      password: '',
    };
  }
  myFun = () => {
    const {name, lname, password} = this.state;
    if (name == '') {
      this.setState({Error: 'please fill the first name'});
    } else if (lname == '') {
      this.setState({Error: 'please fill the last name'});
    } else if (password == '') {
      this.setState({Error: 'please fill the password'});
    } else if (password.length < 5) {
      this.setState({Error: 'password  must be more than 5'});
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
        <Image source={require('../Movies/images/image logo.png')}>
        </Image>
        </ImageBackground>
        <Text>{this.state.Error}</Text>
        <TextInput
          placeholder="full Name"
          style={styles.myText}
          onChangeText={fname => this.setState({fname})}
        />
        <View style={styles.textbox}>
        <TextInput
          placeholder="E-Mail"
          style={styles.myText}
          onChangeText={email => this.setState({email})}
        />

        <TextInput
          placeholder="Mobile No."
          style={styles.myText}
          onChangeText={password => this.setState({password})}
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
            SIGNUP
          </Text>
        </TouchableOpacity>
      </View>
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
    top:50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent:'center',
    alignContent:'center',
    height: 150,
    width: 150,
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
