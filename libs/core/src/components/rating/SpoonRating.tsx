import React from 'react'
import { Rating, RatingProps } from 'react-simple-star-rating';
import { EmptySpoon, FullSpoon } from './icons';
export const SpoonRating = (props: RatingProps) => {
  return (
    <Rating
      {...props}
      emptyIcon={<EmptySpoon />}
      fillIcon={<FullSpoon />}
      emptyStyle={{ display: 'flex', alignItems: 'center' }}
      allowFraction
      readonly={props.readonly}
      style={{ cursor: 'default' }} // readonly 를 사용할때 콘솔창 에러를 없애기위해 해줘야할듯함. (라이브러리 이슈)
      transition
      allowHover={false}
    />
  );
};
