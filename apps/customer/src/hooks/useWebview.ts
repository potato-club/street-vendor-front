import { appPostMessage, nativeMessage } from '@street-vendor/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { pathName } from '../configs/pathName';

export const useWebview = () => {
  const router = useRouter();
  const [exitCount, setExitCount] = useState(0);
  const [backCheckCount, setBackCheckCount] = useState(0);
  const { back, pathname, push } = useRouter();

  useEffect(() => {
    if (exitCount === 1) {
      toast('뒤로가기 버튼을 한번 더 누르면 앱이 종료됩니다');
      setTimeout(() => {
        setExitCount(0);
      }, 4000);
    }
    if (exitCount === 2) {
      appPostMessage.isMain(exitCount.toString());
    }
  }, [exitCount]);

  useEffect(() => {
    if (backCheckCount === 1) {
      appPostMessage.uploadCloseModal(backCheckCount.toString());
    }
  }, [backCheckCount]);

  useEffect(() => {
    setExitCount(0);
  }, [pathname]);

  useEffect(() => {
    window.__WEBVIEW_BRIDGE__ = {
      init: function () {
        try {
          document.addEventListener('message', async (e: any) => {
            const { data } = e;

            const [id, message] = data.split(':');

            switch (id) {
              case nativeMessage.BACKPRESS:
                if (message === 'GO_BACK') {
                  //뒤로가기 종료
                  if (
                    pathName.HOME === location.pathname ||
                    pathName.INDEX === location.pathname ||
                    pathName.LOGIN === location.pathname
                  ) {
                    setExitCount((cur) => cur + 1);
                  } //뒤로갈시 저장 안되는 페이지 경고
                  else if (pathName.MY_PAGE === location.pathname) {
                    setBackCheckCount((cur) => cur + 1);
                  } //그외 페이지는 뒤로가기
                  else {
                    back();
                  }
                }

              case nativeMessage.UPLOAD:
                if (message === 'GO_BACK') {
                  back();
                } else if (message === 'CANCEL') {
                  setBackCheckCount(0);
                }
            }
          });
        } catch (err) {}
      },
    };

    window.__WEBVIEW_BRIDGE__.init();
  }, []);
  return {};
};
