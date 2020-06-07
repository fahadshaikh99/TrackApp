import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        // access the subscriber property
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    // if user is recording, start watching position every second
    // and use the callback to add positions to array of positions
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        // remove allows us to stop tracking
        subscriber.remove();
      }
      // clean the subscriber
      subscriber = null;
    }

    // clean startWatching from first time
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);
  // each time shouldTrack changes or when we add change the callback
  // rerun useEffect

  return [err];
};