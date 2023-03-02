import { detailApi } from '../../../apis/controller/detail.api';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

export const useQueryGetDetailStore = () => {
  const router = useRouter();

  const getData = useCallback(async () => {
    const res = await detailApi.getDetail(String(router.query.id));
    console.log(res);
    return res;
  }, [router.query.id]);

  return useQuery(['useQueryGetDetailStore', router.query.id], getData, {
    enabled: router.isReady && !!router.query.id,
    onError: (e) => {
      console.log(e);
    },
  });
};
