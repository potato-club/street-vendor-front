import { Control, Controller, FieldValues } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import { EmptySpoon, FullSpoon } from './icons';

interface Props {
  name: string;
  control: Control<FieldValues>;
}

export const SpoonRatingForm = (props: Props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={{ required: true }}
      render={({ field: { onChange } }) => (
        <Rating
          onClick={onChange}
          size={36}
          allowFraction
          transition
          emptyColor="gray"
          allowHover={false}
          emptyIcon={<EmptySpoon />}
          fillIcon={<FullSpoon />}
          emptyStyle={{ display: 'flex', alignItems: 'center' }}
        />
      )}
    />
  );
};
