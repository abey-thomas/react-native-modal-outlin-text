import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modalbox';

import OutlinedView from '../components/outlinedView';

export default class OfferRideFillDetails extends React.Component {
  state = {
    leavingFrom: 'Ninth Block, 1705, 2nd floor, E …',
    goingTo: 'Ground & 1st Floor, Cyber Spac…',
    tripTime: 'Today, 02:30pm',
    tripSeats: 'Car, 4 seats',
    tripRate: '₹3.5/km',
    estimate: 'Estimate ₹67.4',
  };
  render() {
    return (
      <View>
        <View>
          <OutlinedView
            label="Leaving From"
            value={this.state.leavingFrom}
            onChangeText={this.handleTextChange}
          />
          <View style={styles.greenDrop} />
        </View>
        <View>
          <OutlinedView
            label="Going To"
            value={this.state.goingTo}
            onChangeText={this.handleTextChange}
          />
          <View style={styles.redDrop} />
        </View>
        <View style={[styles.tripSummary]}>
          <Text style={[styles.tripDetails]}>{this.state.tripTime}</Text>
          <Text style={[styles.tripDetails]}>{this.state.tripSeats}</Text>
        </View>
        <View style={styles.greyLine} />
        <View style={[styles.tripSummary]}>
          <View>
            <Text style={[styles.tripDetails]}>{this.state.tripRate}</Text>
            <Text style={[styles.tripDetailsEstimate]}>
              {this.state.estimate}
            </Text>
          </View>
          <TouchableOpacity style={[styles.submitButton]}>
            <Text style={[styles.submitText]}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#ff4c5a',
    fontFamily: 'sans-serif',
    fontSize: 18,
    width: 162,
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
  },
  tripSummary: {
    paddingTop: 33,
    paddingBottom: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greyLine: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  },
  tripDetails: {
    color: '#131df5',
    fontFamily: 'sans-serif-medium',
    fontSize: 18,
  },
  tripDetailsEstimate: {
    color: '#141414',
    fontSize: 14,
    fontFamily: 'sans-serif',
  },
  greenDrop: {
    width: 5,
    height: 5,
    backgroundColor: 'green',
    position: 'absolute',
    top: 45,
    left: 10,
  },
  redDrop: {
    width: 5,
    height: 5,
    backgroundColor: 'red',
    position: 'absolute',
    top: 45,
    left: 10,
  },
});
