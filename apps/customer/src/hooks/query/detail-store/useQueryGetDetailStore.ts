import { storeApi } from "../../../apis/controller/store.api";
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

export const useQueryGetDetailStore = () => {
  const router = useRouter();

  const getData = useCallback(async () => {
    const response = await storeApi.getDetail(String(router.query.id));
    // console.log('response.data', response.data);
    return response.data.data;
  }, [router.query.id]);

  return useQuery(['useQueryGetDetailStore', router.query.id], getData, {
    enabled: router.isReady && !!router.query.id,
    onError: (e) => {
      console.log(e);
    },
  });
};
