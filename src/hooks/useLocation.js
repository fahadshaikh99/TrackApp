import { useState, useEffect, useContext} from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (callback) => {

    const [ err, setErr] = useState(null);  

    const startWatching = async () => {
        try{
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback
            );
        }
        catch(e){
            console.log(e);
            
        }
    }
    useEffect(() => {
        startWatching();
    }, []);

    return [err];
}