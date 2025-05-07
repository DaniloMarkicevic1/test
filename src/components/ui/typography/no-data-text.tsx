import { HTMLAttributes } from 'react';

type Props = { text?: string } & HTMLAttributes<HTMLParagraphElement>;

export const NoDataText = ({ text = 'No Data Found', ...rest }: Props) => {
  return (
    <p className="font-bold text-xl text-center w-full" {...rest}>
      {text}
    </p>
  );
};
