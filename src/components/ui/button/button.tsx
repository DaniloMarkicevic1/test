import { ButtonHTMLAttributes } from 'react';

type Props = { text: string } & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, ...props }: Props) => {
  return (
    <button
      {...props}
      className="border px-5 py-2 rounded-md hover:cursor-pointer transition hover:opacity-60 hover:text-emerald-400 scale-100 hover:scale-110 hover:shadow-emerald-700 hover:shadow-xl/50 disabled:opacity-15"
    >
      {text}
    </button>
  );
};
