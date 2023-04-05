import { Rating, RatingProps } from 'react-simple-star-rating';
import { EmptySpoon, FullSpoon } from './icons';
type Props = {
  width?: number;
  height?: number;
  gap?: number;
} & RatingProps;
export const SpoonRating = (props: Props) => {
  return (
    <Rating
      {...props}
      emptyIcon={
        <EmptySpoon width={props.width} height={props.height} gap={props.gap} />
      }
      fillIcon={
        <FullSpoon width={props.width} height={props.height} gap={props.gap} />
      }
      allowFraction
      readonly={props.readonly}
      style={{ cursor: 'default' }} // readonly 를 사용할때 콘솔창 에러를 없애기위해 해줘야할듯함. (라이브러리 이슈)
      transition
      allowHover={false}
    />
  );
};
