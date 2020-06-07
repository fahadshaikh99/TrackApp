import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import Map from '../components/Map';
import {SafeAreaView, withNavigationFocus} from "react-navigation";

// importing context elements to get access to real user location
import { Context as LocationContext } from '../context/LocationContext';

import useLocation from '../hooks/useLocation';

import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

// import mock file to test location tracker with fake user location
import '../_locationmock';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);

  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );

  // shouldTrack in useLocation hook is equal to isFocused we receive from withNavigationFocus
  // Use location checks if we record or not and returns errors if some are present
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2 style={styles.title}>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    margin: 10
  }
});

// withNavigationFocus allows to access isFocused to know if the component is currently on the screen
export default withNavigationFocus(TrackCreateScreen);