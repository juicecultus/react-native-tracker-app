import {useState, useEffect} from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

export default callback => {
  const [err, seterr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback,
      );
    } catch (e) {
      seterr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};
