import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, NavigationEvents, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Text} from 'react-native-elements';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm  from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {

    
    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation(isFocused, addLocation);
      
 //   console.log(isFocused);


    return(
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>
                Create Track Screen 
            </Text>
            <Map />
            <TrackForm />
            {/* <NavigationEvents 
                onWillBlur={() => console.log('Leaving')}
            /> */}


            {err ? <Text>Please enalbe location Services</Text> : null }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});


export default withNavigationFocus(TrackCreateScreen);