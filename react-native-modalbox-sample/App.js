import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modalbox';

import WelcomePage from './src/welcomePage';

import OfferRideFillDetails from './src/offerRideFillDetails';


export default class App extends React.Component {
  state = {
    welcome: false,
  };

  render() {
    return (
      <View style={[styles.wrapper]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ welcome: true })}>
          <Text>Welcome the user </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ welcome: false })}>
          <Text>Submit the data </Text>
        </TouchableOpacity>
        <Modal
          isOpen={true}
          style={[styles.modal, styles.bottomModal]}
          position={'bottom'}
          backdropPressToClose={false}
          swipeToClose={false}
          backdrop={false}>
          {this.state.welcome ? <WelcomePage /> : <OfferRideFillDetails />}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#88dd88',
  },
  modal: {
    padding: 25,
  },
  bottomModal: {
    height: 400,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  button: {
    marginTop: 10,
    padding: 10,
  },
});
