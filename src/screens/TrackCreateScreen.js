import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import { Text} from 'react-native-elements';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {

    
    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation(addLocation);
      


    return(
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>
                Create Track Screen 
            </Text>
            <Map />
            
            {err ? <Text>Please enalbe location Services</Text> : null }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});


export default TrackCreateScreen;