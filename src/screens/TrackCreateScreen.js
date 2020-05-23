import React from 'react';
import { View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import { Text} from 'react-native-elements';

const TrackCreateScreen = () => {
    return(
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>
                Create Track Screen 
            </Text>
            <Map />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});


export default TrackCreateScreen;