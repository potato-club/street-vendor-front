import { nativeMessage } from '../constants';

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

export const appPostMessage = {
  isMain: (count: string) => {
    try {
      window.ReactNativeWebView.postMessage(`${nativeMessage.ISMAIN}:${count}`);
    } catch (e) {}
  },
  uploadCloseModal: (count: string) => {
    try {
      window.ReactNativeWebView.postMessage(`${nativeMessage.UPLOAD}:${count}`);
    } catch (e) {}
  },
};
