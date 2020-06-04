import React, { useState, useEffect, useContext, useCallback} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, NavigationEvents, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Text} from 'react-native-elements';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm  from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {

    
    const {state, addLocation } = useContext(LocationContext);

    const callback = useCallback( location => {
        addLocation(location, state.recording);
    }, [state.recording]);

    const [err] = useLocation(isFocused,);
      
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


            {/* {err ? <Text>Please enalbe location Services</Text> : null } */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});


export default withNavigationFocus(TrackCreateScreen);