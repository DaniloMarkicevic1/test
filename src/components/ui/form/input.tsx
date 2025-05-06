import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ErrorText } from './error';

type Props = {
  register: UseFormRegisterReturn;
  error: boolean;
  errorText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ register, error, errorText, ...props }: Props) => {
  const errorClass = error ? true : '';

  return (
    <>
      <label className="capitalize w-full flex justify-between items-start  text-lg flex-col">
        {props.placeholder}:{' '}
        <input
          {...register}
          {...props}
          className={`border rounded-md px-2 py-1 focus:outline-1 ${
            errorClass
              ? 'focus:outline-red-600 outline-0 border-1 border-red-600'
              : ''
          }`}
        />
      </label>
      {errorText ? <ErrorText text={errorText} /> : null}
    </>
  );
};
