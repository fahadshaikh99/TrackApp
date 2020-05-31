import { useState, useEffect, useContext} from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    // console.log(shouldTrack);
    const [ err, setErr] = useState(null);  
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try{
            await requestPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback
            );
            setSubscriber(sub);
        }
        catch(e){
            console.log(e);
            
        }
    }
    useEffect(() => {
        if(shouldTrack) {
        startWatching();
        }
        else {
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack]);

    return [err];
}
