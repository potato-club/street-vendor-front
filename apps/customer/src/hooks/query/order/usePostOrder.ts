import { orderApi } from "../../../apis/controller/order.api";
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

export const usePostOrder = () => {

  return useMutation((data:any) => orderApi.order(data), {
    onSuccess: () => {
      toast.success('주문이 완료되었습니다.');
    },
    onError: () => {
      toast.error('주문완료가 되지 않았습니다')
    }
  })
};
