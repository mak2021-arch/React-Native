/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <Picker mode="dropdown">
          <Picker.Item label="Height" value="5 ft" />
          <Picker.Item label="5 ft" value="5 ft" />
          <Picker.Item label="6 ft" value="6 ft" />
          <Picker.Item label="7 ft" value="7 ft" />
        </Picker>
      </View>
      <View style={styles.container}>
        <Picker mode="dropdown">
          <Picker.Item label="Weight" value="5 ft" />
          <Picker.Item label="5 ft" value="5 ft" />
          <Picker.Item label="6 ft" value="6 ft" />
          <Picker.Item label="7 ft" value="7 ft" />
        </Picker>
      </View>
      <View style={styles.container}>
        <Picker mode="dropdown">
          <Picker.Item label="Diet Type" value="5 ft" />
          <Picker.Item label="5 ft" value="5 ft" />
          <Picker.Item label="6 ft" value="6 ft" />
          <Picker.Item label="7 ft" value="7 ft" />
        </Picker>
      </View>
      <View style={styles.container}>
        <Picker mode="dropdown">
          <Picker.Item label="Allergies" value="5 ft" />
          <Picker.Item label="5 ft" value="5 ft" />
          <Picker.Item label="6 ft" value="6 ft" />
          <Picker.Item label="7 ft" value="7 ft" />
        </Picker>
      </View>
      <View style={styles.container}>
        <Picker mode="dropdown">
          <Picker.Item label="Medical Condition" value="5 ft" />
          <Picker.Item label="5 ft" value="5 ft" />
          <Picker.Item label="6 ft" value="6 ft" />
          <Picker.Item label="7 ft" value="7 ft" />
        </Picker>
      </View>
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
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#bdc3c7',
    textAlign: 'center',
    overflow: 'hidden',
  },

  box: {
    flex: 1,
    justifyContent: 'space-between',
    padding: '10',
  },
});

export default App;
