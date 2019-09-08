import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import OutlinedTextInput from './components/outlineTextInput';
export default class App extends React.Component {
  state = {
    kyc: 'bike',
  };

  isFormValid = () => {
    return false;
  };

  toggleKycTabToBike = () => {
    this.setState({ kyc: 'bike' });
  };

  toggleKycTabToCar = () => {
    this.setState({ kyc: 'car' });
  };
  render() {
    return (
      <View style={[styles.wrapper]}>
        <Text style={[styles.title]}>Please fill to offer ride</Text>
        <View style={styles.greyLine} />
        <Text style={[styles.greetUser]}>Hi there,</Text>
        <Text style={[styles.heading]}>Vehicle Registration</Text>
        <View style={[styles.tabRow]}>
          <TouchableOpacity
            style={[styles.circularTabButton, styles.tabButtonSelected]}
            onPress={this.toggleKycTabToCar}
          />
          <TouchableOpacity
            style={[styles.circularTabButton, styles.tabButtonUnSelected]}
            onPress={this.toggleKycTabToBike}
          />
        </View>
        <OutlinedTextInput label="Reg No" />
        {this.state.kyc === 'car' ? (
          <OutlinedTextInput label="Car Model" />
        ) : (
          <View>
            <OutlinedTextInput label="Bike Model" />
            <Text style={[styles.subHeading]}>Extra Helmet:</Text>
            <View style={[styles.helmetSelectionRow]}>
              <TouchableOpacity
                style={[
                  styles.ovalChoiceButton,
                  styles.ovalChoiceButtonSelected,
                ]}
                onPress={this.toggleKycTabToBike}>
                <Text style={[styles.choiceText]}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.ovalChoiceButton,
                  styles.ovalChoiceButtonUnSelected,
                ]}
                onPress={this.toggleKycTabToBike}>
                <Text style={[styles.choiceText]}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <TouchableOpacity
          style={[
            styles.submitButton,
            this.isFormValid() ? styles.validSubmit : styles.inValidSubmit,
          ]}>
          <Text style={[styles.submitText]}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 43,
    padding: 24,
    flex: 1,
  },
  title: {
    color: '#494949',
    fontSize: 18,
    fontFamily: 'sans-serif',
    marginBottom: 12,
  },
  greetUser: {
    fontSize: 16,
    color: '#7a7a7a',
    fontFamily: 'sans-serif',
    marginTop: 12,
  },
  greyLine: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  },
  heading: {
    fontSize: 20,
    lineHeight: 30,
    color: '#141414',
    fontFamily: 'sans-serif-medium',
    marginTop: 8,
  },
  circularTabButton: {
    color: 'red',
    borderRadius: 30,
    height: 59.8,
    width: 59.8,
  },
  tabButtonUnSelected: {
    backgroundColor: '#f6f6f6',
  },
  tabButtonSelected: {
    backgroundColor: '#f0b9bd',
    borderColor: '#ff4c5a',
    borderWidth: 2,
  },
  tabRow: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  validSubmit: {
    backgroundColor: '#ff4c5a',
  },
  inValidSubmit: {
    backgroundColor: '#b0b0b0',
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
  },
  subHeading: {
    fontSize: 16,
    color: '#141414',
    fontFamily: 'sans-serif',
    marginTop: 12,
  },
  helmetSelectionRow: {
    flexDirection: 'row',
  },
  ovalChoiceButton: {
    borderRadius: 24,
    borderColor: '#c0c0c0',
    borderWidth: 2,
    height: 40,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 9,
  },
  choiceText: {
    color: '#141414',
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  ovalChoiceButtonSelected: {
    backgroundColor: '#f0b9bd',
    borderColor: '#ff4c5a',
    borderWidth: 2,
  },
});
