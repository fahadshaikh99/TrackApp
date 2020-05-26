import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';
import { Text} from 'react-native-elements';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext} from '../context/LocationContext';


const TrackCreateScreen = () => {

    useEffect(() => {
        startWatching();
    }, []);

    const { addLocation } = useContext(LocationContext);

    const [ err, setErr] = useState(null);
        const startWatching = async () => {
            try{
                await requestPermissionsAsync();
                await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, (location) => {
                  //  console.log(location);
                    addLocation(location);
                }
                );
            }
            catch(e){
                console.log(e);
                
            }
        }


    return(
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>
                Create Track Screen 
            </Text>
            <Map />
            
            {/* {err ? <Text>Please enalbe location Services</Text> : null } */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});


export default TrackCreateScreen;