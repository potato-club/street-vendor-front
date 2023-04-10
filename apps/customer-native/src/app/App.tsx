/* eslint-disable jsx-a11y/accessible-emoji */
import { nativeMessage } from '@street-vendor/core';
import React, { useEffect, useRef } from 'react';
import { Alert, BackHandler, Platform } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

export const App = () => {
  const webViewRef = useRef(null);

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current?.postMessage(`${nativeMessage.BACKPRESS}:GO_BACK`);
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

  const handleWebViewMessage = async (e: WebViewMessageEvent) => {
    const data: any = e.nativeEvent.data;

    const [id, message] = data.split(':');

    switch (id) {
      case nativeMessage.ISMAIN:
        if (message === '2') {
          BackHandler.exitApp();
        }
        break;
      case nativeMessage.UPLOAD:
        if (message === '1') {
          Alert.alert(
            '안내',
            '내용은 저장되지 않습니다\n정말로 뒤로 가시겠습니까?',
            [
              {
                text: '확인',
                onPress: () =>
                  webViewRef.current?.postMessage(
                    `${nativeMessage.UPLOAD}:GO_BACK`
                  ),
              },
              {
                text: '취소',
                onPress: () =>
                  webViewRef.current?.postMessage(
                    `${nativeMessage.UPLOAD}:CANCEL`
                  ),
              },
            ]
          );
        }
      default:
        break;
    }
  };

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
      onMessage={handleWebViewMessage}
      contentInsetAdjustmentBehavior="automatic"
      javaScriptEnabled={true}
      userAgent="Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36"
    />
  );
};

export default App;
