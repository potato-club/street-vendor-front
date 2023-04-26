/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, BackHandler, Platform, View, StyleSheet } from 'react-native';
import {
  WebView,
  WebViewMessageEvent,
  WebViewNavigation,
} from 'react-native-webview';

const NATIVE_MESSAGE = {
  BACKPRESS: 'BACKPRESS',
  ISMAIN: 'ISMAIN',
  UPLOAD: 'UPLOAD',
} as const;

export const App = () => {
  const webViewRef = useRef(null);
  const [url, setUrl] = useState('');
  const onAndroidBackPress = useCallback(() => {
    if (webViewRef.current) {
      if (url.indexOf('https://street-vendor-front-customer') !== -1) {
        //내부 URL이면 웹에 back명령어 전송
        webViewRef.current.postMessage(`${NATIVE_MESSAGE.BACKPRESS}:GO_BACK`);
      } else {
        //외부 URL 이면 그냥 back처리
        webViewRef.current.goBack();
      }

      return true;
    }

    return false;
  }, [url]);

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
  }, [url]);

  const handleWebViewMessage = async (e: WebViewMessageEvent) => {
    const data: any = e.nativeEvent.data;

    const [id, message] = data.split(':');

    switch (id) {
      case NATIVE_MESSAGE.ISMAIN:
        if (message === '2') {
          BackHandler.exitApp();
        }
        break;
      case NATIVE_MESSAGE.UPLOAD:
        if (message === '1') {
          Alert.alert(
            '안내',
            '내용은 저장되지 않습니다\n정말로 뒤로 가시겠습니까?',
            [
              {
                text: '확인',
                onPress: () =>
                  webViewRef.current?.postMessage(
                    `${NATIVE_MESSAGE.UPLOAD}:GO_BACK`
                  ),
              },
              {
                text: '취소',
                onPress: () =>
                  webViewRef.current?.postMessage(
                    `${NATIVE_MESSAGE.UPLOAD}:CANCEL`
                  ),
              },
            ]
          );
        }
      default:
        break;
    }
  };

  const handleNavigationStateChange = (state: WebViewNavigation) => {
    setUrl(state.url);
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        style={styles.webContainer}
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
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  webContainer: {
    width: '100%',
    height: '100%',
  },
});
