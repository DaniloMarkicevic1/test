import React from 'react';
import { NavLink } from 'react-router';

type Props = { to: string; text: string };

export const LinkButton = ({ to, text }: Props) => {
  return (
    <NavLink
      className={
        'flex border justify-center items-center px-5 py-2 rounded-md hover:cursor-pointer transition hover:opacity-60 hover:text-emerald-400 scale-100 hover:scale-110 hover:shadow-emerald-700 hover:shadow-xl/50'
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};
