import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modalbox';

export default class WelcomePage extends React.Component {
  handleInputFocused = () => {
    alert('pressed destination');
  };
  handleAddHomePressed = () => {
    alert('pressed add home');
  };
  handleAddWorkPressed = () => {
    alert('pressed add work');
  };
  render() {
    return (
      <View>
        <Text style={[styles.userWelcomeText]}>Hi Sruthi, </Text>
        <Text style={[styles.headingText]}>Where are you going?</Text>
        <TouchableOpacity
          style={[styles.inputFieldView]}
          onPress={this.handleInputFocused}>
          <Text style={[styles.inputFieldLabel]}>Enter Destination</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bookmarkbutton]}
          onPress={this.handleAddHomePressed}>
          <Text>Add Home</Text>
        </TouchableOpacity>
        <View style={styles.greyLine} />
        <TouchableOpacity
          style={[styles.bookmarkbutton]}
          onPress={this.handleAddWorkPressed}>
          <Text>Add Work</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userWelcomeText: {
    fontSize: 16,
    color: '#7a7a7a',
    fontFamily: 'sans-serif',
    marginBottom: 10,
  },
  headingText: {
    fontFamily: 'sans-serif-medium',
    fontSize: 18,
    color: '#141414',
    marginBottom: 24,
  },
  inputFieldView: {
    borderColor: '#d0d0d0',
    borderWidth: 1,
    height: 56,
  },
  inputFieldLabel: {
    color: '#b0b0b0',
    fontFamily: 'sans-serif',
    fontSize: 18,
    padding: 16,
  },
  bookmarkbutton: {
    padding: 26,
    flexDirection: 'row',
  },
  greyLine: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
    marginLeft: 70,
  }
});
