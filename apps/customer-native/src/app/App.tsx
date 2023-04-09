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
          Platform.OS === 'android'
            ? 'street-vendor-front-customer.vercel.app/'
            : '127.0.0.1:4000/'
        }`,
      }}
      contentInsetAdjustmentBehavior="automatic"
      javaScriptEnabled={true}
      userAgent="Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36"
    />
  );
};

export default App;
