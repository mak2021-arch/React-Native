/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
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
    const {fname, lname, password} = this.state;
    if (fname == '') {
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
      <View>
       <ImageBackground source={require('../Movies/images/register_top.png')}
         resizeMode="cover" style={styles.image}>
        <Text>
          {this.state.Error}
        </Text>
        </ImageBackground>
        </View>
        
        <View style={styles.container}>
        <TextInput
          placeholder="full Name"
          style={styles.myText}
          onChangeText={fname => this.setState({fname})}
        />

        <TextInput
          placeholder="E-Mail"
          style={styles.myText}
          onChangeText={lname => this.setState({lname})}
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
          style={{backgroundColor: '#FF8C00', padding: 15, width: 350, borderRadius: 40, justifyContent:'center',alignItems:'center'}}>
          <Text style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 'bold',
            }}>SIGNUP</Text>
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
  myText: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    padding: 10,
    width: '90%',
    borderRadius : 40,
  },
  image: {
  position:'absolute',
  left: 0,
  top: 0,
  right: 0,
  },

});
