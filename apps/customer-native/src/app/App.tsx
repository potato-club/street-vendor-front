/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useRef } from 'react';
import { BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export const App = () => {
  const webViewRef = useRef(null);

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onAndroidBackPress
        );
      };
    }
  }, []);

  return (
    <WebView
      ref={webViewRef}
      source={{
        uri: `http://${
          Platform.OS === 'android' ? '10.0.2.2' : '127.0.0.1'
        }:4000/home`,
      }}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
};

export default App;
