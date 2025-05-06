import React, { HTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Wrapper = ({ children, ...rest }: Props) => {
  return (
    <div className="max-h-[calc(100vh-80px)] overflow-auto p-5" {...rest}>
      {children}
    </div>
  );
};
