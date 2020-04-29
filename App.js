import React, { useState, useEffect } from 'react';

import Routes from './src/routes'

import { Camera } from 'expo-camera';


export default function App() {

  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Routes />
  );
}


